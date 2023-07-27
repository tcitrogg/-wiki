<script lang="ts">
  import Badge from "./Badge.svelte";

  export let categories: string[];
  export let selectedCategory: string;
</script>

<select name="menu" id="menu" bind:value={selectedCategory} class="bg-zinc-200 dark:bg-zinc-800 rounded-full border-none px-3 py-1 text-sm">
  <!-- <option disabled selected value="">Select a language.</option> -->
  <option value="" disabled selected>Categories</option>
  <option value="all">All</option>
  {#each categories as each_category}
    <option value={each_category}>
      {each_category}
    </option>
  {/each}
</select>

<!-- <div class="w-full overflow-x-auto text-sm flex relative space-x-2 py-2">
  <ul class="grid w-full gap-6 md:grid-cols-2">
    {#each categories as each_category}
    <li>
      <input value={each_category} type="radio" id="hosting-small" name="hosting" class="hidden peer" required>
      <label for="hosting-small" class="inline-flex border cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600">                           
        <Badge text={each_category}/>
      </label>
    </li>
    {/each}
  </ul>
</div> -->
