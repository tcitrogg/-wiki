<script lang="ts">
  export let searchTerm: any;
  
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<input bind:value={searchTerm} on:input type="text" name="" id="" placeholder="Search /Wiki..." autocomplete="off" class={`${noFocusStyle} px-3 py-1.5 w-full bg-transparent border-0 rounded-full text-sm`}>