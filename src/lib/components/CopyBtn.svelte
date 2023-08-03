<script lang="ts">
  import CopyToClipboard from "svelte-copy-to-clipboard";
  export let text: string = "";

  let label: string = "Copy"

  const handleSuccessfullyCopied = (e: any) => {
    alert(`(+) Link copied`);
  }
  
  const handleFailedCopy = () => {
    alert(`(x) Failed to copy link`);
  }
  
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"

</script>

<CopyToClipboard text={text} on:copy={handleSuccessfullyCopied} on:fail={handleFailedCopy} let:copy>
  <button title="Copy link" on:click={copy} class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
    <i class="icon icon-ic_fluent_link_20_regular flex text-xl"></i>
  </button>
    
</CopyToClipboard>