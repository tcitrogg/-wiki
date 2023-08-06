<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
  
  import type { Post } from "$lib/types";
  import Aside from "$lib/components/Aside.svelte";
  import Mklogo from "$lib/components/Trogg/Mklogo.svelte";
  import Bnapp from "$lib/components/Bnapp.svelte";
  import ThemeBtn from '$lib/components/ThemeBtn.svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';

	export let data: {posts: Post[]};
  // let isSearchOpen: boolean = false;

  // const handleSearchOpen = ()=>{
  //   isSearchOpen = !isSearchOpen
  //   console.log(isSearchOpen)
  //   return isSearchOpen
  // }

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70";
  const focusWithinStyle =
    "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70";
  const noFocusStyle = "focus:outline-none focus:ring-0";
</script>

<section class="w-full h-full md:pr-2">
  <main transition:slide="{{ duration: 200 }}" class="w-full h-full md:rounded">

    
    <section class="w-full h-full md:hidden flex flex-col">

      <!-- top bar -->
      <!-- <div class={`w-full h-fit hidden md:flex border-bborder-b-zinc-200dark:border-b-zinc-800`}>
        <nav class="w-full mx-auto py-2 px-5 flex items-center justify-between bg-green-">
  
          <section class="h-full flex items-center space-x-">
            <h1 class="font-medium text-base">
              <Bnapp name="Wiki" />
            </h1>
          </section>
          <section class="h-full flex items-center space-x-"></section>
          <section class="h-full hidden :flex items-center space-x-">
            
            <a href="/search" data-tooltip-target={`pg-top-bar-btn-1`} data-tooltip-placement="right" class={`${focusStyle} px-3 py-1.5 bg-transparent/10 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 rounded-full flex items-center space-x-2 text-sm`}>
              <i class={`icon icon-ic_fluent_search_20_regular flex text-lg`}></i>
              <p class="">Search</p>
            </a>
            <Tooltip title={"Search"} id={"pg-top-bar-btn-1"}/>
          </section>
        </nav>
      </div> -->
      
      <!-- <Aside {data} {isSearchOpen}/> -->
      <div class="w-full h-full relative bg-zinc-200 dark:bg-zinc-800 rounded-tl-md">
        <Aside {data} searchId={"search-drawer"}/>
      </div>
      
      <!-- btm bar -->
      <div class={`w-full h-fit hidden :flex bg-zinc-300 dark:bg-zinc-800 border-bborder-b-zinc-200dark:border-b-zinc-800`}>
        <nav class="w-full mx-auto py-1.5 px-5 flex items-center justify-between bg-green-">
  
          <section class="h-full flex items-center space-x-">

            <a href="/wkWriter" data-tooltip-target={`pg-btm-bar-btn-1`} data-tooltip-placement="top" class={`${focusStyle} p-1.5 bg-transparent/10 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600 rounded-full flex items-center space-x-2 text-sm`}>
              <i class={`icon icon-ic_fluent_clipboard_text_edit_20_regular flex text-lg`}></i>
            </a>
            <Tooltip title={"Writer"} id={"pg-btm-bar-btn-1"}/>
          </section>
          <section class="h-full flex items-center space-x-">
            <ThemeBtn/>
          </section>
        </nav>
      </div>
    </section>
    
    <section class="w-full h-full hidden md:flex flex-col items-center justify-center space-y-2 md:mt-10">
      <Mklogo title={"Wk"}/>
      <h2 class="font-medium text-xl">
        <Bnapp name="Wiki"/>
      </h2>
      <p class="md:w-8/12 lg:w-6/12 b-rose-600 text-sm text-center opacity-50">
        Aims to provide a diverse and reliable resource for individuals seeking knowledge on numerous subjects.
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
</section>