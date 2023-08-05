<script lang="ts">
    import { mkLink } from "$lib/utils";

  export let title: string = ""
  export let description: string = ""
  export let id: string = ""
  export let path: string = ""
  export let isInDomain: boolean = false

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<div title={description} class={`flex items-center justify-between hover:bg-zinc-300 dark:hover:bg-zinc-700 md:hover:bg-zinc-200 md:dark:hover:bg-zinc-700 group space-x- pr-1 ${isInDomain ? "pl-4" : "pl-2"}`}>
  <a href={mkLink(id, path)} class={`${focusStyle} flex items-center space-x-1.5 w-full py-1`}>
    <i class="icon icon-ic_fluent_document_one_page_20_regular flex text-xl rounded-full opacity-80"></i>
    <p class="">{title}</p>
  </a>
</div>