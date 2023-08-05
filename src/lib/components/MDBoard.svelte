<script lang="ts">
  export let content: any;
</script>

<div class="w-full h-full px-4 leading-5 rounded-tl-md md:rounded-md
  prose
  prose-headings:text-zinc-700 prose-headings:dark:text-zinc-200 prose-headings:mb-4
  prose-a:text-zinc-700 prose-a:dark:text-zinc-200
  prose-pre:bg-zinc-200 dark:prose-pre:bg-zinc-800 prose-pre:text-zinc-700 dark:prose-pre:text-zinc-200 md:prose-pre:bg-zinc-300 md:dark:prose-pre:bg-zinc-900
  prose-code:pt-0.5 prose-code:px-0.5 prose-code:mx-0.5 prose-code:rounded-lg prose-code:bg-zinc-300 dark:prose-code:bg-zinc-700 md:prose-code:bg-zinc-200md:dark:prose-code:bg-zinc-800 prose-code:dark:text-zinc-200
  text-zinc-700 dark:text-zinc-200
  prose-blockquote:bg-blue-700/5 prose-blockquote:text-zinc-700 prose-blockquote:dark:text-zinc-200 prose-blockquote:py-0.5 prose-blockquote:border-l-blue-700/30 prose-blockquote:
  prose-strong:text-zinc-700 dark:prose-strong:text-zinc-200 prose-strong:font-medium
  prose-em:italic">
  <svelte:component this={content} />
</div>