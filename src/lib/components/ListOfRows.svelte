<script lang="ts">
  import type { Post } from "$lib/types";
  import Row from "./Row.svelte";
  import EmptyLabel from "./EmptyLabel.svelte";
  
  export let data: Post[];
</script>

{#if !(data.length === 0)}
  <ul class="w-full h-auto max-h-96 flex flex-col md:space-y-1 overflow-y-auto pt-0.5">
    {#each data as eachPost}
      <li class="w-full">
        <Row title={eachPost.title} description={eachPost.description} path={eachPost.path} id={`${eachPost.nanid}`}/>
      </li>
    {/each}
  </ul>
{:else}
  <EmptyLabel text={"List of articles"}/>
{/if}