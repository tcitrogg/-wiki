<script lang="ts">
	import { browser } from "$app/environment";
	import InkMde from 'ink-mde/svelte'
	import type { Instance } from 'ink-mde'
  
	// doc
	let value = `# Yo!
Type something...


_yours kagayaki_`

  const handleChange = ()=>{
    localStorage.setItem('mkWikiWriterContent', value);
  }
  
  if (browser) {
    if (localStorage.mkWikiWriterContent || (!("mkWikiWriterContent" in localStorage))) {
      value = localStorage.mkWikiWriterContent
		}
	}

	// reactive option, if this change, the editor will be reconfigured.
	let isDarkTheme = true
</script>

<!-- <input type="checkbox" bind:checked={isDarkTheme} name="isDarkTheme" /> -->
<div class="w-full h-full md:pr-2">
	<div class="w-full h-full bg-zinc-200 dark:bg-zinc-800 md:bg-transparent rounded-tl-md md:rounded-md space-y-1 md:py-0">
		<h3 class="font-medium text-lg px-4 my-3 opacity-70 sticky left-0 top-0">Writer</h3>
		<InkMde
			bind:value
      on:afterUpdate={handleChange}
			options={{
			  interface: {
				appearance: isDarkTheme ? 'dark' : 'light',
				autocomplete: true
			  },
			}}
		/>
	</div>
</div>
