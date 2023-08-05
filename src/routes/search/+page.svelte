<script lang="ts">
  import { onMount } from "svelte";
  import type { Post } from "$lib/types";
  export let data: { posts: Post[] };

  let titles: any[] = []; // menu built from bookData
  let topics: string[] = []; // menu built from bookData
  let selectedTopic: string = ""; //  menu selection

  // ~ Filtered results
  let filteredPosts: Post[] = [];

  const getTitles = () => {
    for (let postObj of data.posts) {
      if (!titles.includes(postObj.title)) {
        titles = [...titles, postObj.title];
      }
    }
    titles = titles.sort();
  };
  onMount(() => getTitles());

  // Get all topics
  const getTopics = () => {
    for (let postObj of data.posts) {
      if (!topics.includes(`${postObj.topics}`)) {
        topics = [...topics, ...`${postObj.topics}`];
      }
    }

    topics = [...new Set(topics)];
  };
  onMount(() => getTopics());


  // ~ For Select Menu
  $: if (selectedTopic) getPostsByCategories();

  const getPostsByCategories = () => {
    // resets search input if menu is being used
    searchTerm = "";

    if (selectedTopic === "all") {
      return (filteredPosts = []);
    }
    return (filteredPosts = data.posts.filter((eachPost: any) =>
      eachPost.topics.includes(selectedTopic)
    ));
  };

  // ~ For Search Input
  let searchTerm: string = "";
  // resets language menu if search input is used
  $: if (searchTerm) selectedTopic = "";

  const searchPosts = () => {
    return (filteredPosts = data.posts.filter((book: any) => {
      let bookTitle = book.title.toLowerCase();
      return bookTitle.includes(searchTerm.toLowerCase());
    }));
  };

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70";
  const focusWithinStyle =
    "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70";
  const noFocusStyle = "focus:outline-none focus:ring-0";
</script>

<div class="md:pr-2">
  <div class="w-full h-full bg-zinc-200 dark:bg-zinc-800 md:bg-transparent rounded-tl-md md:rounded-md space-y-1 py-2 md:py-0">
    <h3 class="font-medium px-4 my-2 opacity-70">Search</h3>
  </div>
</div>
<!-- <div class="w-full flex items-center justify-between px-3 pt-1 md:px-4">
      <p class="font-medium text-base text-blue-700 block mb-2 -space-x-0.5">
        <span class="opacity-80">Home</span>
      </p>
    </div> -->
<!-- <div class="md:px-4">
      <div class="px-4 md:px-0 space-y-2">
        <SearchInput bind:searchTerm on:input={searchPosts} />
        <CategoriesTag {topics} bind:selectedTopic/>
      </div>
    </div> -->
