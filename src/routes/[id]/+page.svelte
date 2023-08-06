<script lang="ts">
	import { fly, fade, scale, slide } from 'svelte/transition';
  import SvelteMarkdown from 'svelte-markdown'
  // import { onMount } from "svelte";
	import { formatDate, mkLink } from '$lib/utils'
  import { title, description, keywords, url, contacts, yonko } from "$lib/config";
  import CopyBtn from "$lib/components/CopyBtn.svelte";
  import Badge from "$lib/components/Badge.svelte";
  import EmptyLabel from '$lib/components/EmptyLabel.svelte';
  import MDBoard from '$lib/components/MDBoard.svelte';
  import Tooltip from "$lib/components/Tooltip.svelte";

  // For loading...
  // let isReady = false;
	// onMount(() => isReady = true);

	export let data
  const link: string = data.meta.pathId
    ? `${url}${data.paramsId}?fd=${data.meta.pathId}`
    : `${url}${data.paramsId}`

  let isSideTab: boolean = true;
  $: isSideTabSmScreen = false;
  const handleSideTab = ()=>{
    isSideTab = !isSideTab
    isSideTabSmScreen = isSideTab
  }

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<svelte:head>
  <title>{`bn/Wiki - ${data.meta.title} @${data.meta.author}` || title}</title>
  <meta name="og:title" content={`bn/Wiki - ${data.meta.title} @${data.meta.author}` || title}>
  <meta name="og:author" content={data.meta.author || `g/${yonko}`}>
  <meta name="og:description" content={data.meta.description || description}>
  <meta name="og:keywords" content={`${data.meta.topics}` || keywords}>
  <meta name="datetime" content={formatDate(data.meta.date) || '03 Aug 2023'}>
  <meta name="og:image" content={data.meta.thumbnail || "./favicon.svg"}>
</svelte:head>

<main transition:slide="{{ duration: 200 }}" class={`${isSideTab ? "w-full" : "w-full lg:w-10/12 mx-auto" } h-fit md:pr-2 rounded-md relative flex space-x-2`}>

  <!-- display content -->
  <section class={`w-full ${isSideTab ? "lg:w-8/12" : ""} h-fit min-h-screen flex flex-col bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-200 md:dark:bg-zinc-900 rounded-tl-md md:rounded-md pb-10`}>
    <h2 class="w-full lg:w-10/12 lg:mx-auto font-medium text-lg px-4 pt-3 pb-0 sticky top-0 z-40 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-200 md:dark:bg-zinc-900 rounded-tl-md">
      <a href="/" class="">
        <span class="text-blue-700">/wiki</span>
      </a>
      <span class="opacity-50">/</span>
      <span>{data.meta.title}</span>
      <!-- <span>{data.each_wknote.title} - {"{data.each_wknote.cryptId}"}</span> -->
    </h2>

    <div class="w-full lg:w-10/12 lg:mx-auto flex items-center justify-between text-sm px-4 py-2">
      <div class="flex items-center space-x-2">
        <span class="opacity-50 italic">from</span>
        <a href={contacts[0]} class="">
          <div class="rounded-full py-0.5 px-2 bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700 flex items-center justify-center">
            {data.meta.author}
          </div>
        </a>
      </div>

      <div class="flex items-center space-x-2">

        <!-- <button class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
          <i class="icon icon-ic_fluent_chat_20_regular flex text-xl"></i>
        </button> -->

        <CopyBtn text={link}/>

        <button data-tooltip-target={`dwn-page-btn`} data-tooltip-placement="bottom" on:click={handleSideTab} class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
          <i class="icon icon-ic_fluent_arrow_enter_20_regular rotate-90 flex text-xl"></i>
        </button>
        <Tooltip title={"Download this page"} id={"dwn-page-btn"}/>

        <button data-tooltip-target={`about-page-btn`} data-tooltip-placement="bottom" on:click={handleSideTab} class={`${focusStyle} block lg:hidden p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
          <i class="icon icon-ic_fluent_info_20_regular flex text-xl"></i>
        </button>
        <Tooltip title={"About this article"} id={"about-page-btn"}/>
      </div>
    </div>
    
    <div class="w-full lg:w-10/12 lg:mx-auto h-full flex flex-col space-y-4">
      <hr class="mt-2 border-zinc-300/50 dark:border-zinc-700/50">
      <MDBoard content={data.content}/>
    </div>
  </section>

  <!-- side info tab holder -->
  <section transition:slide="{{ duration: 200, axis:"x" }}" class={`w-full lg:w-4/12 h-fit md:h-full lg:h-fit bg-rose- ${isSideTab ? "hidden lg:block" : "block lg:hidden"} fixed top-0 right-0 lg:sticky z-40`}>

    <!-- overlay -->
    <div on:click={handleSideTab} class="w-full h-full bg-transparent/30 fixed md:absolute top-0 left-0 lg:rounded-md"></div>

    <!-- side info tab -->
    <section transition:slide="{{ duration: 300, axis:"x" }}" class={`w-11/12 md:w-7/12 ml-auto lg:w-full h-full fixed top-0 right-0 md:relative pt-3 pb-5 px-3 bg-zinc-100 dark:bg-zinc-900 md:dark:bg-zinc-800 shadow-md lg:border lg:border-zinc-300 dark:lg:border-zinc-700 lg:shadow-none md:rounded-l-md lg:rounded-md flex flex-col justify-between space-y-28`}>
      <div class="text-sm space-y-5">
        <div class="space-y-1">
          <div class="flex justify-between">
            <p class="font-medium text-lg block mb-2">
              <span class="opacity-70">About</span>
            </p>

            <div class="">
              <button title="Minimize" on:click={handleSideTab} class={`${focusStyle} p-1 rounded-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
                <i class="icon icon-ic_fluent_chevron_right_20_regular flex text-2xl"></i>
              </button>
            </div>
          </div>

          <summary title="Description" class="flex items-start space-x-2 w-full h-full leading-5
          prose
          prose-headings:text-zinc-700 prose-headings:dark:text-zinc-200 prose-headings:leading-3
          prose-a:text-zinc-700 prose-a:dark:text-zinc-200
          prose-pre:bg-zinc-200 dark:prose-pre:bg-zinc-800 prose-pre:text-zinc-700 dark:prose-pre:text-zinc-200 md:prose-pre:bg-zinc-300 md:dark:prose-pre:bg-zinc-900
          prose-code:pt-0.5 prose-code:px-0.5 prose-code:mx-0.5 prose-code:rounded-lg prose-code:bg-zinc-200 dark:prose-code:bg-zinc-800 md:prose-code:bg-zinc-300 md:dark:prose-code:bg-zinc-800 prose-code:dark:text-zinc-200
          text-zinc-700 dark:text-zinc-200
          prose-blockquote:bg-blue-700/5 prose-blockquote:text-zinc-700 prose-blockquote:dark:text-zinc-200 prose-blockquote:py-0.5 prose-blockquote:border-l-blue-700/30 prose-blockquote:
          prose-strong:text-zinc-700 dark:prose-strong:text-zinc-200">
            <!-- <MDBoard content={data.meta.description}/> -->
            <SvelteMarkdown source={data.meta.description} />
            <!-- <div>{@html data.meta.description}</div> -->
          </summary>
        </div>

        <div class="space-y-2 ">
          {#if data.meta.pathId}
            <p title="Domain" class="flex items-start space-x-2">
              <i class="icon icon-ic_fluent_folder_20_regular -rotate-90 flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <span class="pt-1">{data.meta.pathId}</span>
            </p>
          {/if}
          <!-- <p class="flex items-start space-x-2">
            <i class="icon icon-ic_fluent_chat_multiple_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
            <span class="font-medium pt-1">2.4k</span>
          </p> -->
          <p title="Last updated" class="flex items-start space-x-2">
            <i class="icon icon-ic_fluent_clock_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
            <span class="pt-1">{formatDate(data.meta.date)}</span>
          </p>
          <p title="Published" class="flex items-center space-x-2">
            <i class="icon icon-ic_fluent_arrow_exit_20_regular -rotate-90 flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
            <Badge text={`${data.meta.published}`}/>
          </p>
          <div class="">
            <div title={`${data.meta.author}'s contacts`} class="flex items-start space-x-2">
              <i class="icon icon-ic_fluent_mention_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <div class="flex flex-col space-y- text-sm">
                {#each data.meta.contact as each_contact}
                  <a href={each_contact} class="rounded-r-lg py-0.5 pr-1 hover:underline hover:text-blue-500">{each_contact}</a>
                {/each}
              </div>
            </div>
          </div>
          <div class="">
            <div title="Topics" class="flex items-start space-x-1">
              <i class="icon icon-ic_fluent_number_symbol_20_regular flex text-xl p-1 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 rounded-full"></i>
              <div class="text-sm flex flex-wrap relative ">
                <!-- <div class="absolute top-0 left-0.5 bg-zinc-200 dark:bg-zinc-800 md:bg-zinc-300/50 md:dark:bg-zinc-700/50 h-full w-0.5 rounded-full"></div> -->
                <!-- <div class="absolute top-0 left-0.5 border-l-2 border-l-zinc-200 dark:border-l-zinc-800 h-full rounded-full"></div> -->
                {#if data.meta.topics.length > 0}
                  {#each data.meta.topics as each_topic}
                  <!-- <Badge link={`/topics/${each_topic}`} text={each_topic}/> -->
                    <Badge text={each_topic}/>
                  {/each}
                {:else}
                  <EmptyLabel text="No topic"/>
                {/if}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

  <!-- lg:minimize side info tab -->
  <div transition:slide="{{ duration: 300, axis:"x" }}" class={`${isSideTab ? "hidden" : "lg:block hidden"} flex justify-end fixed right-2 bottom-5`}>
    <button title="Minimize" on:click={handleSideTab} class={`${focusStyle} p-1 rounded-l-full bg-zinc-300/50 dark:bg-zinc-700/50 hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
      <i class="icon icon-ic_fluent_chevron_left_20_regular flex text-2xl"></i>
    </button>
  </div>
</main>