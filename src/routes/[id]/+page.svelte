<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { flip } from "svelte/animate";
  import Yuzaname from "$lib/Trogg/Yuzaname.svelte";
  import SvelteMarkdown from 'svelte-markdown'

  // import { yonko } from "../../../.store/stores";
  import { onMount } from "svelte";

  let isReady = false;
	onMount(() => isReady = true);

  export let data;
  const yonko = "bnierimi"
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
</script>

<!-- <section class="p-1"></section> -->
<!-- {#if isReady}
{/if} -->
  <main transition:slide="{{ duration: 600 }}" class="w-full h-full p4 rounded-md overflow-y-auto relative">
    <h2 class="w-full lg:w-10/12 lg:mx-auto font-medium text-lg px-4 py-3 sticky top-0 z-40 bg-zinc-100 dark:bg-zinc-900 md:bg-zinc-200 md:dark:bg-zinc-800">
      <span class="text-blue-600">wiki</span>
      <span class="opacity-50">/</span>
      <span>{data.each_wknote.title}</span>
      <!-- <span>{data.each_wknote.title} - {"{data.each_wknote.cryptId}"}</span> -->
    </h2>
    <div class="w-full lg:w-10/12 lg:mx-auto h-full flex flex-col space-y-4">
      <div class="space-y-2">
  
        <div class="flex items-center justify-between text-sm px-4 py-0.5">
          <div class="flex items-center space-x-2">
            <span class="opacity-50 italic">from</span>
            <div class="rounded-full py-0.5 px-2 bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700 flex items-center justify-center">
              <Yuzaname name={yonko}/>
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
      <div class="w-full h-full px-4 prose prose-headings:text-zinc-700 prose-headings:dark:text-zinc-200 prose-a:text-zinc-700 prose-a:dark:text-zinc-200 prose-pre:bg-zinc-200 dark:prose-pre:bg-zinc-800 md:prose-pre:bg-zinc-300 md:dark:prose-pre:bg-zinc-900 prose-code:text-zinc-700 prose-code:dark:text-zinc-200 text-zinc-700 dark:text-zinc-200">
        <SvelteMarkdown source={data.each_wknote.content} />
        <!-- {data.each_wknote.content} -->
  
        <!-- <div>{@html data.response}</div> -->
      </div>
    </div>
  </main>