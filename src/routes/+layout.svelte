<script lang="ts">
  import type { Post } from "$lib/types";
  import { colors } from "$lib/utils";
  import Aside from "$lib/components/Aside.svelte";
  import Troggapp from "$lib/components/Trogg/Troggapp.svelte";
  import ThemeBtn from "$lib/components/ThemeBtn.svelte";
  import "../app.css"
  import Indicator from "$lib/components/Indicator.svelte";
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let data: Post[];
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<section class="w-full h-screen relative font-sans bg-zinc-200 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 scrollbar overflow-hidden flex flex-col">

  <!-- top nav bar -->
  <div class={`w-full h-fit hidden md:flex bg-${colors[1]}border-bborder-b-zinc-200dark:border-b-zinc-800`}>
    <nav class="w-full mx-auto py-1.5 px-5 flex items-center justify-between bg-green-">

      <section class="h-full flex items-center space-x-">
        <h1 class="font-medium text-base">
          <Troggapp name="Wiki" />
        </h1>
      </section>
      <section class="h-full flex items-center space-x-"></section>
      <section class="h-full flex items-center space-x-">
        <button data-tooltip-target={`top-nav-bar-1`} data-tooltip-placement="right" class={`${focusStyle} p-1.5 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-full`}>
          <i class={`icon icon-ic_fluent_grid_20_regular flex text-lg opacity-70`}></i>
        </button>
        <Tooltip title={"More apps"} id={"top-nav-bar-1"}/>
      </section>
    </nav>
  </div>

  <div class="w-full h-full flex">
    
    <!-- side nav bar -->
    <section class="hidden md:flex flex-col justify-between items-center h-full py-2 px-1.5 bg-zinc-200dark:bg-zinc-800 border-rborder-r-zinc-300dark:border-r-zinc-700">
      
      <div class="flex flex-col space-y-2">
        <button data-tooltip-target={`side-nav-bar-1`} data-tooltip-placement="right" class={`${focusStyle} p-2 bg-blue-500/10 rounded relative`}>
          <i class={`icon icon-ic_fluent_home_20_filled flex text-2xl text-${colors[1]}`}></i>
          <Indicator/>
        </button>
        <Tooltip title={"Home"} id={"side-nav-bar-1"}/>
        
        <button data-tooltip-target={`side-nav-bar-2`} data-tooltip-placement="right" class={`${focusStyle} p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded`}>
          <i class={`icon icon-ic_fluent_clipboard_text_edit_20_regular flex text-2xl opacity-70`}></i>
        </button>
        <Tooltip title={"Writer"} id={"side-nav-bar-2"}/>
        
        <button data-tooltip-target={`side-nav-bar-5`} data-tooltip-placement="right" class={`${focusStyle} p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded`}>
          <i class={`icon icon-ic_fluent_branch_20_regular flex text-2xl opacity-70`}></i>
        </button>
        <Tooltip title={"GitHub repo"} id={"side-nav-bar-5"}/>
        
        <!-- <button data-tooltip-target={`side-nav-bar-4`} data-tooltip-placement="right" class={`${focusStyle} p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded`}>
          <i class={`icon icon-ic_fluent_text_bullet_list_square_20_regular flex text-2xl opacity-70`}></i>
        </button>
        <Tooltip title={"Categories"} id={"side-nav-bar-4"}/> -->
        
        <button data-tooltip-target={`side-nav-bar-3`} data-tooltip-placement="right" class={`${focusStyle} p-2 hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded`}>
          <i class={`icon icon-ic_fluent_search_20_regular flex text-2xl opacity-70`}></i>
        </button>
        <Tooltip title={"Search /Wiki"} id={"side-nav-bar-3"}/>
        
      </div>

      <div class="flex flex-col space-y-2">
        <ThemeBtn />
      </div>
    </section>
  
    <!-- <div class="lg:container lg:mx-auto h-full flex"> -->
    <div class="w-full h-full md:py- md:pr-2">

      <div class="w-full h-full bg-zinc-00 dark:bg-zinc-00 md:bg-zinc-100 md:dark:bg-zinc-800 rounded-t flex lg:divide-x-2 lg:divide-zinc-200 dark:lg:divide-zinc-900">

        <section class="w-full lg:w-3/12 md:w-4/12 h-full md:block hidden">
          <Aside {data}/>
        </section>
        <section class="w-full lg:w-9/12 md:w-8/12 h-full md:py-2 md:pl-2">
    
          <div class="w-full h-full">
            <slot/>
          </div>
        </section>
      </div>
  
    </div>
  </div>

</section>