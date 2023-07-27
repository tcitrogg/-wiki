<script lang="ts">
  import Aside from "$lib/components/Aside.svelte";
    import type { Post } from "$lib/types";
  import "../app.css"

  export let data: Post[];
</script>

<section class="w-full h-smscreen md:h-screen relative font-sans bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 scrollbar overflowhidden">

  <!-- <div class="lg:container lg:mx-auto h-full flex"> -->
  <div class="w-full h-full flex">

    <section class="w-full lg:w-3/12 md:w-4/12 h-full md:block hidden">
      <Aside {data}/>
    </section>
    <section class="w-full lg:w-9/12 md:w-8/12 h-full md:p-1">

      <div class="w-full h-full">
        <slot/>
      </div>
    </section>
  </div>
</section>