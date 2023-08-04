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

<InkMde
	bind:value
	options={{
	  interface: {
		appearance: isDarkTheme ? 'dark' : 'light',
	  },
	}}
/>
