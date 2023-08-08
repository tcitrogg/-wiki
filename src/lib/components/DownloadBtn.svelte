<script lang="ts">
  import Tooltip from "./Tooltip.svelte";
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"

  export let url: string = "";

  const handleDownload = ()=>{
    window.open(url)
  }
</script>
<!-- on:click={handleDownload} -->
<a href={url} download={url.replace("/src/articles", "")} data-tooltip-target={`dwn-page-btn`} data-tooltip-placement="bottom" class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
  <i class="icon icon-ic_fluent_arrow_download_20_regular flex text-xl"></i>
</a>
<Tooltip title={"Download this page"} id={"dwn-page-btn"}/>