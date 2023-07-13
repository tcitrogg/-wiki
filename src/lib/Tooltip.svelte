<script lang="ts">
  export let title: string = ""
  export let id: string = ""
</script>

<div id={id} role="tooltip" class="absolute z-10 invisible inline-block px-3 py-1 text-sm font-medium bg-zinc-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-700">
  { title }
  <div class="tooltip-arrow" data-popper-arrow></div>
</div>