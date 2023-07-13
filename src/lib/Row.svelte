<script lang="ts">
    import RowMoreBtn from "./RowMoreBtn.svelte";

  export let title: string = ""
  export let id: string = ""

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-emerald-500/70"
</script>

<div class="flex items-center justify-between hover:bg-zinc-200 dark:hover:bg-zinc-800 group space-x- rounded-lg">
  <a href={`/${id}`} class="flex items-start space-x-2 w-full px-2 py-2.5">
    <!-- <i class="icon icon-ic_fluent_document_one_page_20_regular flex text-xl bg-emerald-500 text-zinc-900 p-1 rounded-full"></i> -->
    <i class="icon icon-ic_fluent_document_page_top_right_20_regular flex text-xl bg-emerald-500 text-zinc-900 p-1 rounded-full"></i>
    <p class="font-medium">{title}</p>
  </a>

  <!-- <div class="items-center opacity-40group-hover:opacity-100 pr-2">
    <RowMoreBtn id={id}/>
  </div> -->
</div>