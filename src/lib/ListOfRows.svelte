<script lang="ts">
  import Row from "./Row.svelte";
  

  // const listOfWknotes: any[] = [
  //   "README", "Installing NVM and Nodejs", "Downloading a website with wget", "Calculate your CGPA with t/Akada", "Fluent system icons", "Tailwind",
  //   "Advanced routing", "Pathless layout routes", "Chapel of the light"
  // ]

  // export let listOfWknotes: object[] = []
  // console.log("from ListOfRows", listOfWknotes)

  // import { wknotes } from "../stores";

  export let listOfWknotes: any;
  listOfWknotes = listOfWknotes.listOfWknotes;
  // wknotes.subscribe((value)=>{
  //   listOfWknotes = value
  // })
  // console.log(listOfWknotes)

</script>

{#if !(listOfWknotes.length === 0)}
  <ul class="w-full flex flex-col space-y-1">
    {#each listOfWknotes as eachWknote, id}
      <li class="w-full ">
        <Row title={eachWknote} id={`${id}`}/>
      </li>
    {/each}
  </ul>
{:else}
  <p class="italic opacity-50 text-sm text-center">list of pages</p>
{/if}