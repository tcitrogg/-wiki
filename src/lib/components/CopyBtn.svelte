<script lang="ts">
	import { clickToCopy } from "$lib/utils"

  export let link: string = ""
  
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  console.log(link)

</script>

<button class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
  <i class="icon icon-ic_fluent_link_20_regular flex text-xl"></i>
</button>