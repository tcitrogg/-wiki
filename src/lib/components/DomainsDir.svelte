<!-- src/components/Accordion.svelte -->

<script lang="ts">
  import { getPath } from "$lib/utils";
  import ListOfRows from "./ListOfRows.svelte";
  export let domains: any[] = [];
  export let norms: any[] = [];
  export let posts: any[] = [];

  const genRandomColor = ()=>{
    return `#${Math.random().toString(16).slice(-6)}`
  }

  function toggleAccordion(itemIndex: any) {
    domains = domains.map((item, index) => ({
      ...item,
      isOpen: index === itemIndex ? !item.isOpen : false,
    }));
    // console.log(domains)
    return [...new Set(domains)]
  }
  
  const getEachDomainContent = (domainTitle: string) => {
    return posts.filter((eachPost) => getPath(eachPost.path) === domainTitle)
  }

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<div class="w-full h-full space-y-5">
  <!-- ~folders -->
  <div class="w-full space-y-1">
    <h3 class="font-medium text-base px-4 my-2 opacity-70 sticky left-0 top-0">Domains</h3>
    {#each domains as item, index}
      <div class={`rounded- ${item.isOpen ? "hover:bg-transparentdark:hover:bg-transparent" : "hover:bg-zinc-300 md:hover:bg-zinc-200 dark:hover:bg-zinc-700" } `}>
        <button class={`${focusStyle} w-full px-2 py-1 text-left flex items-center justify-between border-l-2 ${item.isOpen ? "bg-zinc-300dark:bg-zinc-700 bg-blue-700/10 border-l-blue-700" : "border-l-transparent"}`} on:click={() => toggleAccordion(index)}>
          <div class="flex items-center space-x-1.5">
            <i class="icon icon-ic_fluent_folder_20_regular flex text-xl rounded-full opacity-80 -rotate-90"></i>
            <span class="font-medium">
              {item.title}
            </span>
          </div>
          <i class={`icon icon-${item.isOpen ? "ic_fluent_chevron_down_20_regular opacity-80" : "ic_fluent_chevron_right_20_regular opacity-50"} flex text-lg`}></i>
        </button>
    
        {#if item.isOpen}
          <div class="relative">
            <div class="bg-zinc-400 dark:bg-zinc-700 md:bg-zinc-300 md:dark:bg-zinc-600 w-0.5 h-full absolute top-0 left-2"></div>
              <ListOfRows data={getEachDomainContent(item.title)} isInDomain={true}/>
          </div>
        {/if}
        
      </div>
    {/each}
  </div>
  
  <!-- ~files -->
  <div class="w-full">
    <h3 class="font-medium text-base px-4 my-2 opacity-70 sticky left-0 top-0">Articles</h3>
    <ListOfRows data={norms}/>
  </div>
</div>
