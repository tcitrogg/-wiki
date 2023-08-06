<script lang="ts">
  import CopyToClipboard from "svelte-copy-to-clipboard";
  import Tooltip from "$lib/components/Tooltip.svelte";

  export let text: string = "";
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  
  const handleSuccessfullyCopied = (e: any) => {
    console.log(`(+) Link copied`);
  }
  
  const handleFailedCopy = () => {
    console.log(`(x) Failed to copy link`);
  }

</script>

<CopyToClipboard text={text} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
  <button data-popover-target="copy-link-btn-click" data-popover-trigger="click" data-popover-placement="top" data-tooltip-target={`copy-link-btn`} data-tooltip-placement="bottom" on:click={copy} class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
    <i class="icon icon-ic_fluent_link_20_regular flex text-xl"></i>
  </button>
  <Tooltip title={"Copy link"} id={"copy-link-btn"}/>
  <div id={"copy-link-btn-click"} role="tooltip" class="absolute z-40 invisible inline-block px-3 py-1 text-sm font-medium bg-zinc-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-700">
    Copied
    <div data-popper-arrow></div>
  </div>
    
</CopyToClipboard>