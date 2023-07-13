<script lang="ts">
  export let title: string = ""
  export let size: number = 10
</script>

<div class={`w-${size} h-${size} rounded-lg border-2 border-zinc-800 dark:border-zinc-200 flex items-start justify-end p-0.5 opacity-20`}>
  <p class="leading-4 font-semibold text-xl">{ title }</p>
</div>