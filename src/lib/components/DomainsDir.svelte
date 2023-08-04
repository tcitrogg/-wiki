<!-- src/components/Accordion.svelte -->

<script lang="ts">
    import { getPath } from "$lib/utils";
  import ListOfRows from "./ListOfRows.svelte";
  export let domains: any[] = [];
  export let norms: any[] = [];
  export let posts: any[] = [];

  function toggleAccordion(itemIndex: any) {
    domains = domains.map((item, index) => ({
      ...item,
      isOpen: index === itemIndex ? !item.isOpen : false,
    }));
    
    return [...new Set(domains)]
  }
  
  const getEachDomainContent = (domainTitle: string) => {
    return posts.filter((eachPost) => getPath(eachPost.path) === domainTitle)
  }

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<!-- ~folders -->
{#each domains as item, index}
  <div class={`rounded- ${item.isOpen ? "hover:bg-transparent dark:hover:bg-transparent" : "hover:bg-zinc-300 dark:hover:bg-zinc-800 md:hover:bg-zinc-200 md:dark:hover:bg-zinc-700" } `}>
    <button class={`${focusStyle} w-full px-4 py-1 text-left flex items-center justify-between space-x-2 ${item.isOpen ? "bg-zinc-300 dark:bg-zinc-800 md:bg-zinc-200 md:dark:bg-zinc-700" : ""}`} on:click={() => toggleAccordion(index)}>
      <span class="font-medium">
        {item.title}
      </span>
      <i class={`icon icon-${item.isOpen ? "ic_fluent_chevron_down_20_regular opacity-80" : "ic_fluent_chevron_right_20_regular opacity-30"} flex text-lg`}></i>
    </button>

    {#if item.isOpen}
      <div class="relative">
        <div class="bg-zinc-400 dark:bg-zinc-700 md:bg-zinc-300 md:dark:bg-zinc-600 w-0.5 h-full absolute top-0 left-2"></div>
          <ListOfRows data={getEachDomainContent(item.title)}/>
      </div>
    {/if}
    
  </div>
{/each}

<!-- ~files -->
<ListOfRows data={norms}/>
<!-- {#each norms as item, index}
{/each} -->