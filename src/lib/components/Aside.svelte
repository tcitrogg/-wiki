<script lang="ts">
  import ListOfRows from "./ListOfRows.svelte";
  import Troggapp from "./Trogg/Troggapp.svelte";
  import ThemeBtn from "./ThemeBtn.svelte";
  import type { Post } from "$lib/types";
  import SearchInput from "./SearchInput.svelte";


	import { onMount } from 'svelte';
    import CategoriesTag from "./CategoriesTag.svelte";
	
  export let data: object;
  // console.log(data)
	
	let titles: any[] = []; // menu built from bookData
	let categories: string[] = []; // menu built from bookData
	let selectedCategory: string = ""; //  menu selection	

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
  
  const getCategories = () => {
    for (let postObj of data.posts) {
      if (!categories.includes(postObj.categories)) {
        categories = [...categories, ...postObj.categories]
      }
    }
    
    categories = [...new Set(categories)]
  }
	onMount(() => getCategories());

  // ~ For Select Menu
	$: if (selectedCategory) getPostsByCategories();
	// $: console.log(filteredPosts, selectedCategory);
	
	const getPostsByCategories = () => {
		// resets search input if menu is being used
		searchTerm = ""; 
		
		if (selectedCategory === "all") {
			return filteredPosts = [];
		} 
		return filteredPosts = data.posts.filter((eachPost: any) => eachPost.categories.includes(selectedCategory));

	}	

	// ~ For Search Input
	let searchTerm: string = "";
	// resets language menu if search input is used
	$: if (searchTerm) selectedCategory = ""; 
	
	const searchPosts = () => {
		return filteredPosts = data.posts.filter((book: any) => {
			let bookTitle = book.title.toLowerCase();
			return bookTitle.includes(searchTerm.toLowerCase())
		});
	}

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<aside
  class="w-full h-full flex flex-col space-y-4 py-3 md:px-2"
>
  <div class="w-full bg-rose- flex items-center justify-between px-3 md:px-4">
    <h1 class="font-medium text-xl">
      <Troggapp name="Wiki" />
    </h1>
    <ThemeBtn />
  </div>
  <div class="md:px-4">
    <div class="px-4 md:px-0 space-y-2">
      <SearchInput bind:searchTerm on:input={searchPosts} />
        
        <!-- <button class={`${focusStyle} p-1.5 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 ml-1`}>
          <i class="icon icon-ic_fluent_search_20_regular flex text-xl"></i>
        </button> -->
      <CategoriesTag {categories} bind:selectedCategory/>
    </div>
    </div>

	{#if searchTerm && filteredPosts.length === 0}
    <p class="italic opacity-50 text-sm text-center">list of posts</p>
  {:else if filteredPosts.length > 0}
    <ListOfRows data={filteredPosts}/>
  {:else}
    <ListOfRows data={data.posts}/>
  {/if}
</aside>
