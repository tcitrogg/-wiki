<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { flip } from "svelte/animate";
  
  import Aside from "$lib/components/Aside.svelte";
  import Mklogo from "$lib/components/Trogg/Mklogo.svelte";
  import Troggapp from "$lib/components/Trogg/Troggapp.svelte";

	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
    import type { Post } from "$lib/types";

	export let data: Post[];
</script>

<main transition:slide="{{ duration: 200 }}" class="w-full h-full md:bg-zinc-200 md:dark:bg-zinc-800 md:rounded-lg">
  <section class="w-full h-full md:hidden block">
    <Aside {data}/>
  </section>
  <section class="w-full h-full hidden md:flex flex-col items-center justify-center space-y-2">
    <Mklogo title={"Wk"}/>
    <h2 class="font-medium text-xl">
      <Troggapp name="Wiki"/>
    </h2>
    <p class="md:w-8/12 lg:w-6/12 b-rose-600 text-sm text-center opacity-50">
      Get direct help from our community on different issues and our products.
      <br>
      Use Wiki with a Tcitrogg account and your phone at your time.
    </p>
  </section>


  <!-- <section>
    <ul class="posts">
      {#each data.posts as post}
        <li class="post">
          <a href={post.slug} class="title">{post.title}</a>
          <p class="date">{formatDate(post.date)}</p>
          <p class="description">{post.description}</p>
        </li>
      {/each}
    </ul>
  </section> -->
  
</main>