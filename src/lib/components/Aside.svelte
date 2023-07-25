<script lang="ts">
  import ListOfRows from "./ListOfRows.svelte";
  import Troggapp from "./Trogg/Troggapp.svelte";
  import ThemeBtn from "./ThemeBtn.svelte";
  import type { Post } from "$lib/types";
  import SearchInput from "./SearchInput.svelte";


	import { onMount } from 'svelte';
	
  export let data: Post[];
  // console.log(data)
	// import Menu from './Menu.svelte';
	// import Book from './Book.svelte';
	// import NoResults from './NoResults.svelte';
	
	let languages: any[] = []; // menu built from bookData
	let selectedLang: string = ""; //  menu selection	

	// Query results
	let filteredBooks: Post[] = [];
	
	const getLanguages = () => {
		for (let bookObj of data.posts) {
			if (!languages.includes(bookObj.title)) {
				languages = [...languages, bookObj.title]
			}
		}
		languages = languages.sort();
	}	
	onMount(() => getLanguages());

	// For Search Input
	let searchTerm = "";
	// resets language menu if search input is used
	$: if (searchTerm) selectedLang = ""; 
	
	const searchBooks = () => {	
		return filteredBooks = data.posts.filter((book: any) => {
			let bookTitle = book.title.toLowerCase();
			return bookTitle.includes(searchTerm.toLowerCase())
		});
	}

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<aside
  class="w-full h-full flex flex-col space-y-4 py-4 px-2"
>
  <div class="w-full bg-rose- flex items-center justify-between px-4">
    <h1 class="font-medium text-xl">
      <Troggapp name="Wiki" />
    </h1>
    <ThemeBtn />
  </div>
  <div class="px-4">
    <div class={`${focusWithinStyle} bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center`}>

	    <SearchInput bind:searchTerm on:input={searchBooks} />
      <!-- <button class={`${focusStyle} p-1.5 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 ml-1`}>
        <i class="icon icon-ic_fluent_search_20_regular flex text-xl"></i>
      </button> -->
    </div>
  </div>

	{#if searchTerm && filteredBooks.length === 0}
    <p class="italic opacity-50 text-sm text-center">list of pages</p>
  {:else if filteredBooks.length > 0}
    <ListOfRows data={filteredBooks}/>
  {:else}
    <ListOfRows data={data.posts}/>
  {/if}
</aside>
