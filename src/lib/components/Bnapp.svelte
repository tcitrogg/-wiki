<script lang="ts">
  export let name:string = "";
  export let style:string = "";
  
  // const focusStyle = "focus:outline-none focus:ring-1 focus:ring-zinc-500/70"
  // const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-zinc-500/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<!-- <a href={`/`} class={`${noFocusStyle} flex rounded-md`}> -->
  <p class={`${style}`}>
    <span class="opacity-50">bnierimi/</span>
    <span class="font-medium text-blue-700">{name}</span>
  </p>
<!-- </a> -->
