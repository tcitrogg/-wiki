<script lang="ts">
  import "../app.css"
  import type { Post } from "$lib/types";
  import { colors } from "$lib/utils";
  import Aside from "$lib/components/Aside.svelte";
  import Bnapp from "$lib/components/Bnapp.svelte";
  import Indicator from "$lib/components/Indicator.svelte";
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let data: {posts: Post[]};
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<section class="w-full h-mobileScreen md:h-screen relative font-sans bg-zinc-100 dark:bg-zinc-900 md:bg-zinc-200 md:dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 scrollbar overflow-x-hidden flex flex-col">

  <!-- md:top bar -->
  <nav class="w-full mx-auto md:h-[7%] pt-2 md:pt-0 px-5 hidden md:flex items-center justify-between">

    <section class="h-full flex items-center space-x-">
      <h1 class="font-medium text-base">
        <Bnapp name="Wiki" />
      </h1>
    </section>
    
    <section class="h-full hidden md:flex items-center space-x-">
      <button data-tooltip-target={`lt-top-nav-bar-1`} data-tooltip-placement="right" class={`${focusStyle} p-1.5 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-full`}>
        <i class={`icon icon-ic_fluent_grid_20_regular flex text-lg opacity-70`}></i>
      </button>
      <Tooltip title={"More apps"} id={"lt-top-nav-bar-1"}/>
    </section>

  </nav>

  <!-- sm:nav bar  -->
  <section class="w-full md:hidden flex items-center justify-between px-4 py-2">
    <div class="flex items-center space-x-3">
      <h1 class="font-medium text-base">
        <Bnapp name="Wiki" />
      </h1>
    </div>
  </section>

  <div class="w-full h-full md:h-[93%] flex">
    
    <!-- md:nav bar  -->
    <section class="hidden md:flex flex-col justify-between items-center h-full pb-1.5 px-1.5 bg-zinc-200dark:bg-zinc-800 border-rborder-r-zinc-300dark:border-r-zinc-700">
      
      <div class="flex flex-col space-y-2">
        <a href="/" data-tooltip-target={`side-nav-bar-1`} data-tooltip-placement="right" class={`${focusStyle} p-2 bg-blue-700/10 rounded relative`}>
          <i class={`icon icon-ic_fluent_home_20_filled flex text-2xl text-${colors[1]}`}></i>
          <Indicator/>
        </a>
        <Tooltip title={"Home"} id={"side-nav-bar-1"}/>
        
        <a href="/wkWriter" data-tooltip-target={`side-nav-bar-2`} data-tooltip-placement="right" class={`${focusStyle} p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 opacity-70 hover:opacity-100 rounded`}>
          <i class={`icon icon-ic_fluent_clipboard_text_edit_20_regular flex text-2xl`}></i>
        </a>
        <Tooltip title={"Writer"} id={"side-nav-bar-2"}/>
        
        <button data-drawer-target="search-drawer-layout" data-drawer-show="search-drawer-layout" data-drawer-backdrop="false" aria-controls="search-drawer-layout" data-tooltip-target={`side-nav-bar-3`} data-tooltip-placement="right" class={`md:block hidden ${focusStyle} p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 opacity-70 hover:opacity-100 rounded`}>
          <i class={`icon icon-ic_fluent_search_20_regular flex text-2xl`}></i>
        </button>
        
        <Tooltip title={"Search /Wiki"} id={"side-nav-bar-3"}/>
      </div>
      
      <div class="flex flex-col space-y-2">
        <a href="https://bnierimi.vercel.app" data-tooltip-target={`side-nav-bar-4`} data-tooltip-placement="right" class={`${focusStyle} p-2 bg-zinc-300 dark:bg-zinc-800 opacity-70 hover:opacity-100 rounded`}>
          <i class={`icon icon-ic_fluent_person_20_regular flex text-2xl`}></i>
        </a>
        <Tooltip title={"Bnierimi's Page"} id={"side-nav-bar-4"}/>
      </div>
    </section>
  
    <!-- body container -->
    <div class="w-full h-full md:pr-2">

      <div class="w-full h-full relative bg-zinc-200 md:bg-zinc-100 dark:bg-zinc-800 md:dark:bg-zinc-800 rounded-t-md md:rounded-md flex md:divide-x-2 md:divide-zinc-200 dark:md:divide-zinc-900">

        <section class="w-full lg:w-3/12 md:w-4/12 h-full md:block hidden absolutez-10md:relative">
          <Aside {data} searchId={"search-drawer-layout"}/>
        </section>

        <section class="w-full lg:w-9/12 md:w-8/12 h-full md:py-2 md:pl-2">

          
          <div class={`${focusStyle} w-full h-full flex flex-col rounded-tl-md md:rounded-md md:pb-20 relative overflow-y-auto`}>
            <slot/>
          </div>
        </section>
      </div>
  
    </div>
  </div>



  <!-- sm:nav bar  -->
  <section class="w-full md:hidden flex items-center justify-between px-4 py-1.5">
    <div class="flex items-center space-x-4">
      <a href="/" class={`${focusStyle} p-1.5 rounded relative`}>
        <i class={`icon icon-ic_fluent_home_20_filled flex text-2xl text-${colors[1]}`}></i>
        <Indicator isX={true}/>
      </a>

      <a href="/wkWriter" class={`${focusStyle} p-1.5 opacity-70 hover:opacity-100 rounded`}>
        <i class={`icon icon-ic_fluent_clipboard_text_edit_20_regular flex text-2xl`}></i>
      </a>

      <a href="/search" class={`${focusStyle} p-1.5 opacity-70 hover:opacity-100 rounded`}>
        <i class={`icon icon-ic_fluent_search_20_regular flex text-2xl`}></i>
      </a>
    </div>
    <div class="flex items-center space-x-4">
      <a href="https://bnierimi.vercel.app" class={`${focusStyle} p-1 bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-200dark:hover:bg-zinc-700 opacity-70 hover:opacity-100 rounded-full`}>
        <i class={`icon icon-ic_fluent_person_20_regular flex text-2xl`}></i>
      </a>
    </div>
  </section>

</section>