<!-- src/components/Accordion.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';
  import ListOfRows from "./ListOfRows.svelte";
  export let domains: any[] = [];
  export let posts: any[] = [];
  let domain_map: any[] = [];

  function toggleAccordion(itemIndex: any) {
    domains = domains.map((item, index) => ({
      ...item,
      isOpen: index === itemIndex ? !item.isOpen : false,
    }));
    
    return [...new Set(domains)]
  }
  
  const getEachDomainContent = (domainTitle: string) => {
    let grouped = posts.filter((eachPost) => eachPost.domain === domainTitle)
    return grouped
  }

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

{#each domains as item, index}
  <div class={`border border-transparent ${item.isOpen ? "border-zinc-200 dark:border-zinc-700 hover:bg-transparent dark:hover:bg-transparent shadow" : "" } hover:bg-zinc-300 dark:hover:bg-zinc-800 md:hover:bg-zinc-200 md:dark:hover:bg-zinc-700 rounded-lg`}>
    <button class={`${focusStyle} w-full px-2 py-2 text-left flex items-center justify-between space-x-2 rounded-lg`} on:click={() => toggleAccordion(index)}>
      <span class="font-medium">
        {item.title}
      </span>
      <i class={`icon icon-${item.isOpen ? "ic_fluent_chevron_down_20_regular opacity-80" : "ic_fluent_chevron_right_20_regular opacity-30"} flex text-lg`}></i>
    </button>

    {#if item.isOpen}
      <ListOfRows data={getEachDomainContent(item.title)}/>
    {/if}
  </div>
{/each}