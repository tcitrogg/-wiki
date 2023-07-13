<script lang="ts">
  import { goto, afterNavigate } from "$app/navigation"
  import { base } from "$app/paths";
  import Mklogo from "$lib/Trogg/Mklogo.svelte";
  import Yuzaname from "$lib/Trogg/Yuzaname.svelte";

  import SvelteMarkdown from 'svelte-markdown'

  let previousPage: string = base;

  afterNavigate(({from})=>{
    previousPage = from?.url.pathname || previousPage
  })

  // to go back
  // goto(previousPage)


  const source = `
  # This is a header

This is a paragraph.

* This is a list
* With two items
  1. And a sublist
  2. That is ordered
    * With another
    * Sublist inside

| And this is | A table |
|-------------|---------|
| With two    | columns |`

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-emerald-500/70"
</script>

<!-- <section class="p-1"></section> -->
<main class="w-full h-full flex flex-col p-4 rounded-md">
  <div class="w-full lg:w-10/12 lg:mx-auto h-full space-y-4">
    <div class="space-y-2">
      <h2 class="font-medium text-2xl">Title</h2>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <span class="opacity-50 italic">by</span>
          <div class="rounded-full py-0.5 px-2 bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700 flex items-center justify-center">
            <Yuzaname name="Shanks"/>
          </div>
        </div>
  
        <div class="flex items-center space-x-2">
  
          <button class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
            <i class="icon icon-ic_fluent_chat_20_regular flex text-xl"></i>
          </button>
    
          <button class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
            <i class="icon icon-ic_fluent_share_ios_20_regular flex text-xl"></i>
          </button>
        </div>
      </div>
    </div>
    <hr class="border-zinc-300/50 dark:border-zinc-700/50">
    <div class="overflow-y-auto prose">
      <SvelteMarkdown {source} />
    </div>
  </div>
</main>