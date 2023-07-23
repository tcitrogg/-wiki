<script lang="ts">
  import Row from "./Row.svelte";
  

  // const listOfPosts: any[] = [
  //   "README", "Installing NVM and Nodejs", "Downloading a website with wget", "Calculate your CGPA with t/Akada", "Fluent system icons", "Tailwind",
  //   "Advanced routing", "Pathless layout routes", "Chapel of the light"
  // ]

  // export let listOfPosts: object[] = []
  // console.log("from ListOfRows", listOfPosts)

  // import { posts } from "../stores";

  export let listOfPosts: any;
</script>

{#if !(listOfPosts.length === 0)}
  <ul class="w-full flex flex-col space-y-1">
    {#each listOfPosts as eachPost}
      <li class="w-full ">
        <Row title={eachPost.post} id={`${eachPost.id}`}/>
      </li>
    {/each}
  </ul>
{:else}
  <p class="italic opacity-50 text-sm text-center">list of pages</p>
{/if}