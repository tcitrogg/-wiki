<script lang="ts">
	import InkMde from 'ink-mde/svelte'
	import type { Instance } from 'ink-mde'
  
	// doc
	let value = `# Yo!
_Type something..._`
	// reactive option, if this change, the editor will be reconfigured.
	let isDarkTheme = true
</script>
  
<!-- <input type="checkbox" bind:checked={isDarkTheme} name="isDarkTheme" /> -->
<div class="w-full h-full bg-zinc-300 dark:bg-zinc-800 rounded-tl-md space-y-1 py-2 md:py-0">
	<h3 class="font-medium px-4 my-2 opacity-70">Writer</h3>
	<InkMde
		bind:value
		options={{
		  interface: {
			appearance: isDarkTheme ? 'dark' : 'light',
		  },
		}}
	/>
</div>
