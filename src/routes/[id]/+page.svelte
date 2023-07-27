<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
	import { flip } from "svelte/animate";
  import Yuzaname from "$lib/components/Trogg/Yuzaname.svelte";
  import CopyBtn from "$lib/components/CopyBtn.svelte";
  import Badge from "$lib/components/Badge.svelte";
  import SvelteMarkdown from 'svelte-markdown'
  import { onMount } from "svelte";

  let isReady = false;
	onMount(() => isReady = true);

  const yonko = "bnierimi"
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"

	import { formatDate } from '$lib/utils'
	import { url } from '$lib/config'

	export let data
  const link: string= `${url}${data.paramsId}`
  // console.log(data.meta)

  let isSideTab: boolean = true;
  $: isSideTabSmScreen = false;
  const handleSideTab = ()=>{
    isSideTab = !isSideTab
    isSideTabSmScreen = isSideTab
  }
  
</script>

<!-- <section class="p-1"></section> -->
<!-- {#if isReady}
{/if} -->
  <main transition:slide="{{ duration: 200 }}" class="w-full h-full p4 rounded-md relative flex lg:divide-x-2 lg:divide-zinc-100 dark:lg:divide-zinc-900">

    <!-- Display content -->
    <section class={`w-full ${isSideTab ? "lg:w-8/12" : ""} h-full overflow-y-auto relative flex flex-col md:bg-zinc-200 md:dark:bg-zinc-800 md:rounded-md lg:rounded-l-lg`}>
      <h2 class="w-full lg:w-10/12 lg:mx-auto font-medium text-lg px-4 py-3 sticky top-0 z-40 bg-zinc-100 dark:bg-zinc-900 md:bg-zinc-200 md:dark:bg-zinc-800">
        <a href="/" class="">
          <span class="text-blue-600">/wiki</span>
        </a>
        <span class="opacity-50">/</span>
        <span>{data.meta.title}</span>
        <!-- <span>{data.each_wknote.title} - {"{data.each_wknote.cryptId}"}</span> -->
      </h2>
      <div class="w-full lg:w-10/12 lg:mx-auto h-full flex flex-col space-y-4">
        <div class="space-y-2">
    
          <div class="flex items-center justify-between text-sm px-4 py-0.5">
            <div class="flex items-center space-x-2">
              <span class="opacity-50 italic">from</span>
              <a href="https://bnierimi-gallery.vercel.app" class="">
                <div class="rounded-full py-0.5 px-2 bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700 flex items-center justify-center">
                  <Yuzaname name={data.meta.author}/>
                </div>
              </a>
            </div>
      
            <div class="flex items-center space-x-2">
      
              <!-- <button class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
                <i class="icon icon-ic_fluent_chat_20_regular flex text-xl"></i>
              </button> -->

              <CopyBtn text={link}/>

              <button title="Show details" on:click={handleSideTab} class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
                <i class="icon icon-ic_fluent_info_20_regular flex text-xl"></i>
              </button>
            </div>
          </div>
        </div>
        <hr class="border-zinc-300/50 dark:border-zinc-700/50">
        <div class="w-full h-full px-4 leading-5 prose prose-headings:text-zinc-700 prose-headings:dark:text-zinc-200 prose-a:text-zinc-700 prose-a:dark:text-zinc-200 prose-pre:bg-zinc-200 dark:prose-pre:bg-zinc-800 prose-pre:text-zinc-700 dark:prose-pre:text-zinc-200 md:prose-pre:bg-zinc-300 md:dark:prose-pre:bg-zinc-900 prose-code:p-1 prose-code:mx-0.5 prose-code:rounded-lg prose-code:bg-zinc-200 dark:prose-code:bg-zinc-800 md:prose-code:bg-zinc-300 md:dark:prose-code:bg-zinc-900 prose-code:dark:text-zinc-200 text-zinc-700 dark:text-zinc-200 prose-blockquote:bg-blue-500/10 prose-blockquote:text-zinc-700 prose-blockquote:dark:text-zinc-200
        prose-blockquote:py-0.5 prose-blockquote:border-l-blue-500 prose-strong:text-zinc-700 dark:prose-strong:text-zinc-200">
        <!-- <div class="w-full h-full px-4 prose text-zinc-700 dark:text-zinc-200"> -->
          <svelte:component this={data.content} />
          <!-- {data.each_wknote.content} -->
    
          <!-- <div>{@html data.content}</div> -->
        </div>
      </div>
    </section>

    <!-- Side info tab -->
    <section transition:slide="{{ duration: 200, axis:"x" }}" class={`w-full lg:w-4/12 h-full bg-rose- ${isSideTab ? "hidden lg:block" : "block lg:hidden"} fixed top-0 right-0 md:absolute lg:relative z-40`}>

      <!-- overlay -->
      <div on:click={handleSideTab} class="w-full h-full bg-transparent/30 absolute top-0 left-0 md:rounded-md lg:rounded-r-lg"></div>
      <section class={`w-11/12 md:w-full h-full fixed top-0 right-0 md:relative py-3 px-3 bg-zinc-100 dark:bg-zinc-900 shadow-md md:bg-zinc-200 md:dark:bg-zinc-800 md:shadow-none md:rounded-md lg:rounded-r-lg flex flex-col justify-between`}>
        <div class="text-sm">
          <p class="font-medium text-lg block lg:hidden mb-2 -space-x-0.5">
            <span class="opacity-80">/</span>
            <span class="opacity-80">Details</span>
          </p>
          <div class="space-y-1.5 ">
            <p class="flex items-start space-x-2">
              <i class="icon icon-ic_fluent_person_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <span class="font-medium pt-1">{data.meta.author}</span>
            </p>
            <p class="flex items-start space-x-2">
              <i class="icon icon-ic_fluent_info_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <span class="pt-1">{data.meta.description}</span>
            </p>
            <!-- <p class="flex items-start space-x-2">
              <i class="icon icon-ic_fluent_chat_multiple_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <span class="font-medium pt-1">2.4k</span>
            </p> -->
            <p class="flex items-start space-x-2">
              <i class="icon icon-ic_fluent_clock_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <span class="pt-1">{data.meta.date}</span>
            </p>
            <p class="flex items-center space-x-2">
              <i class="icon icon-ic_fluent_arrow_upload_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <Badge text={data.meta.published}/>
            </p>
            <div class="">
              <div class="flex items-start space-x-2">
                <i class="icon icon-ic_fluent_tag_circle_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
                <span class="font-medium pt-1">Contact</span>
              </div>
              <div class="pl-3.5">
                <div class="flex flex-col space-y- text-xs border-l border-l-zinc-200 dark:border-l-zinc-800 md:border-l-zinc-300/50 md:dark:border-l-zinc-700/50">
                  {#each data.meta.contact as each_contact}
                    <a href={each_contact} class="rounded-r-lg py-1 px-1  hover:underline hover:text-blue-500">{each_contact}</a>
                  {/each}
                </div>
              </div>
            </div>
            <div class="">
              <div class="flex items-start space-x-2">
                <i class="icon icon-ic_fluent_tag_circle_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
                <span class="font-medium pt-1">Categories</span>
              </div>
              <div class="pl-3.5">
                <div class="text-xs flex flex-wrap relative ">
                  <!-- <div class="absolute top-0 left-0.5 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 h-full w-0.5 rounded-full"></div> -->
                  <!-- <div class="absolute top-0 left-0.5 border-l-2 border-l-zinc-200 dark:border-l-zinc-800 h-full rounded-full"></div> -->
                  {#each data.meta.categories as each_category}
                    <Badge text={each_category}/>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="">
          <button title="Minimize" on:click={handleSideTab} class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
            <i class="icon icon-ic_fluent_chevron_right_20_regular flex text-2xl"></i>
          </button>
        </div>
      </section>
    </section>
  </main>