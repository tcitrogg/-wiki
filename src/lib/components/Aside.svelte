<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from "$lib/types";
  import Troggapp from "./Trogg/Troggapp.svelte";
  import ThemeBtn from "./ThemeBtn.svelte";
  import SearchInput from "./SearchInput.svelte";
  import CategoriesTag from "./CategoriesTag.svelte";
  import DomainsDir from "./DomainsDir.svelte";
  
  export let data: any;
	
	let titles: any[] = []; // menu built from bookData
	let categories: string[] = []; // menu built from bookData
	let domains: any[] = []; // menu built from bookData
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
  
	// Get all categories
  const getCategories = () => {
    for (let postObj of data.posts) {
      if (!categories.includes(postObj.categories)) {
        categories = [...categories, ...postObj.categories]
      }
    }
    
    categories = [...new Set(categories)]
  }
	onMount(() => getCategories());
  
	// Get all domains
  const getDomains = () => {
    for (let postObj of data.posts) {
      if (!domains.includes(postObj.domain)) {
        domains.push(postObj.domain)
      }
    }
    
    domains.forEach((each_domain:any)=>{
      let i = domains.indexOf(each_domain)
      domains[i] = {
      title: each_domain,
      isOpen: false,
    }
    })
    
    return [...new Set(domains)]
  }
	// onMount(() => getDomains());

  // ~ For Select Menu
	$: if (selectedCategory) getPostsByCategories();
	
	const getPostsByCategories = () => {
		// resets search input if menu is being used
		searchTerm = ""; 
		
		if (selectedCategory === "all") {
			return filteredPosts = [];
		} 
		return filteredPosts = data.posts.filter((eachPost: any) => eachPost.categories.includes(selectedCategory));

	}

  // ~ For Domains
	// $: if (selectedDomain) getPostsByDomains();
	// $: console.log(filteredPosts, selectedCategory);
	
	// const getPostsByDomains = () => {
	// 	// resets search input if menu is being used
	// 	searchTerm = ""; 
		
	// 	return filteredPosts = data.posts.filter((eachPost: any) => eachPost.categories.includes(selectedDomain));

	// }

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
  class="w-full h-full flex flex-col space-y-4 py-2 md:py-1.5"
>
  <!-- <div class="w-full bg-rose- md:hidden flex items-center justify-between px-3 md:px-4">
    <h1 class="font-medium text-xl ">
      <Troggapp name="Wiki" />
    </h1>
  </div> -->
  <div class="md:px-4">
    <div class="px-4 md:px-0 space-y-2">
      <SearchInput bind:searchTerm on:input={searchPosts} />
      <CategoriesTag {categories} bind:selectedCategory/>
    </div>
  </div>

  <div class="overflow-y-auto space-y-2 px-2">
    <DomainsDir domains={getDomains()} posts={data.posts}/>
  </div>

</aside>
