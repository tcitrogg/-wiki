<script lang="ts">
  export let searchTerm: any;
  
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<div class={`${focusWithinStyle} bg-zinc-300 dark:bg-zinc-800 md:bg-zinc-200 md:dark:bg-zinc-900 rounded-full flex items-center`}>
  <input bind:value={searchTerm} on:input type="text" name="" id="" placeholder="Search /Wiki..." autocomplete="off" class={`${noFocusStyle} px-3 py-1.5 w-full bg-transparent border-0 rounded-full text-sm`}>
</div>
