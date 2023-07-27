<script lang="ts">
    import type { Post } from "$lib/types";
  import Row from "./Row.svelte";
  

  // const listOfPosts: any[] = [
  //   "README", "Installing NVM and Nodejs", "Downloading a website with wget", "Calculate your CGPA with t/Akada", "Fluent system icons", "Tailwind",
  //   "Advanced routing", "Pathless layout routes", "Chapel of the light"
  // ]

  // export let listOfPosts: object[] = []
  // console.log("from ListOfRows", listOfPosts)

  // import { posts } from "../stores";

  export let data: Post[];
  data = data
</script>

<!-- {#if !(data.length === 0)} -->
<ul class="w-full h-full flex flex-col md:space-y-1 overflow-y-auto">
  {#each data as eachPost}
    <li class="w-full ">
      <Row title={eachPost.title} description={eachPost.description} id={`${eachPost.nanid}`}/>
      <!-- {eachPost.nanid} -->
    </li>
  {/each}
</ul>
<!-- {:else}
  <p class="italic opacity-50 text-sm text-center">list of pages</p>
{/if} -->