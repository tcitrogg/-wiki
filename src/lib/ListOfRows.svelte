<script lang="ts">
  import Row from "./Row.svelte";

  const listOfPages: any[] = [
    "README", "Installing NVM and Nodejs", "Downloading a website with wget", "Calculate your CGPA with t/Akada", "Fluent system icons", "Tailwind",
    "Advanced routing", "Pathless layout routes", "Chapel of the light"
  ]
</script>

{#if !(listOfPages.length === 0)}
  <ul class="w-full flex flex-col space-y-1">
    {#each listOfPages as eachPage, index}
      <li class="w-full ">
        <Row title={eachPage} id={`${index}`}/>
      </li>
    {/each}
  </ul>
{:else}
  <p class="italic opacity-50 text-sm text-center">list of pages</p>
{/if}