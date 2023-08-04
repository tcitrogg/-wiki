<script lang="ts">
  import Badge from "./Badge.svelte";

  export let topics: string[] = [];
  export let selectedTopic: string = "";
</script>

<select name="menu" id="menu" bind:value={selectedTopic} class="bg-zinc-200 dark:bg-zinc-900 rounded-full border-none px-3 py-1 text-sm">
  <!-- <option disabled selected value="">Select a language.</option> -->
  <option value="" disabled selected>Topics</option>
  <option value="all">All</option>
  {#each topics.sort() as each_topic}
    <option value={each_topic}>
      {each_topic}
    </option>
  {/each}
</select>

<!-- <div class="w-full overflow-x-auto text-sm flex relative space-x-2 py-2">
  <ul class="grid w-full gap-6 md:grid-cols-2">
    {#each categories as each_topic}
    <li>
      <input value={each_topic} type="radio" id="hosting-small" name="hosting" class="hidden peer" required>
      <label for="hosting-small" class="inline-flex border cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600">                           
        <Badge text={each_topic}/>
      </label>
    </li>
    {/each}
  </ul>
</div> -->
