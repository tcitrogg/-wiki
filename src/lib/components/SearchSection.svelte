<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
  import ListOfRows from "./ListOfRows.svelte";
  import type { Post } from "$lib/types";

	import { onMount } from 'svelte';
  import TopicsTag from "./TopicsTag.svelte";
    import EmptyLabel from './EmptyLabel.svelte';
	
  export let data: any;
	
	let titles: any[] = []; // menu built from articleData
	let topics: string[] = []; // menu built from articleData
	let selectedTopic: string = ""; //  menu selection	

	// ~ Filtered results
	let filteredPosts: Post[] = [];
	
	const getTitles = () => {
		for (let postObj of data.posts) {
			if (!titles.includes(postObj.title)) {
				titles = [...titles, postObj.title]
			}
		}
		titles = titles.sort();
	}
	onMount(() => getTitles());
  
  const getTopics = () => {
    for (let postObj of data.posts) {
      if (!topics.includes(postObj.topics)) {
        topics = [...topics, ...postObj.topics]
      }
    }
    
    topics = [...new Set(topics)]
  }
	onMount(() => getTopics());

  // ~ For Select Menu
	$: if (selectedTopic) getPostsByTopics();
	// $: console.log(filteredPosts, selectedTopic);
	
	const getPostsByTopics = () => {
		// resets search input if menu is being used
		searchTerm = ""; 
		
		if (selectedTopic === "all") {
			return filteredPosts = [];
		} 
		return filteredPosts = data.posts.filter((eachPost: any) => eachPost.topics.includes(selectedTopic));

	}	

	// ~ For Search Input
	let searchTerm: string = "";
	// resets language menu if search input is used
	$: if (searchTerm) selectedTopic = ""; 
	
	const searchPosts = () => {
		return filteredPosts = data.posts.filter((article: any) => {
			let articleTitle = article.title.toLowerCase();
			return articleTitle.includes(searchTerm.toLowerCase())
		});
	}
  
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<section transition:slide="{{ duration: 300, axis:"x" }}" id="search-drawer" tabindex="-1" aria-labelledby="search-drawer-label" class={`hidden md:block absolute z-40 top-0 left-0 transition-transform -translate-x-full w-full h-full space-y-1 bg-zinc-200 md:bg-zinc-100 dark:bg-zinc-800 md:dark:bg-zinc-800 md:rounded-md`}>
  <div class="flex items-center justify-between px-4">
    <h3 id="search-drawer-label" class="font-medium text-lg my-3 opacity-70 sticky left-0 top-0">Search</h3>

    <div class="">
      <button title="Minimize" data-drawer-hide="search-drawer" aria-controls="search-drawer" class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
        <i aria-hidden="true" class="icon icon-ic_fluent_chevron_left_20_regular flex text-2xl"></i>
      </button>
    </div>
  </div>

  <div class="space-y-3">
    <div class="space-y-1">

      <!-- Search -->
      <div class="w-full px-4">
        <div class={`${focusWithinStyle} bg-zinc-300 dark:bg-zinc-900/50 md:bg-zinc-200 rounded-full flex items-center`}>
          <input bind:value={searchTerm} on:input={searchPosts} type="text" name="" id="" placeholder="Search /Wiki..." autocomplete="off" class={`${noFocusStyle} px-3 py-1.5 w-full bg-transparent border-0 rounded-full text-sm`}>
        </div>
      </div>

      <!-- Tags -->
      <div class="md:px-4">
        <div class="px-4 md:px-0 space-y-2">
          <TopicsTag {topics} bind:selectedTopic/>
        </div>
      </div>
    </div>
  
    <div class="flex w-full overflow-y-auto">
      {#if searchTerm && filteredPosts.length === 0}
        <div class="w-full flex items-center justify-center">
          <EmptyLabel text={"List of articles"}/>
        </div>
      {:else if filteredPosts.length > 0}
        <ListOfRows data={filteredPosts}/>
      {:else}
        <ListOfRows data={data.posts}/>
      {/if}
    </div>
  </div>
</section>