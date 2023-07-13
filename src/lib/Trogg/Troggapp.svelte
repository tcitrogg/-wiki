<script lang="ts">
  export let name:string = "";
  export let style:string = "";
  
  // const focusStyle = "focus:outline-none focus:ring-1 focus:ring-zinc-500/70"
  // const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-zinc-500/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<a href={`tcitrogg.org/app/${name}`} class={`${noFocusStyle} flex rounded-md`}>
  <p class={`${style} -space-x-1`}>
    <span class="opacity-50">t/</span>
    <span>{name}</span>
  </p>
</a>
