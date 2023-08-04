<script lang="ts">
  import { page } from '$app/stores';
  import Bnapp from "$lib/components/Bnapp.svelte";

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<section class="w-full h-full flex flex-col justify-between">

  <div class="hidden opacity-100md:opacity-0 w-11/12 md:w-7/12 mx-auto py-4 text-lg">
    <Bnapp name={"Wiki"}/>
  </div>
  <div class="w-10/12 md:w-7/12 mx-auto md:flex divide-x divide-transparent/20 dark:divide-white/20 space-x-1 md:space-x-4">
    <h2 class="font-medium text-4xl">{$page.status}</h2>
    <p class="py-2 md:py-1 lg:py-0 pl-4">
      {@html $page.error?.message}
    </p>
  </div>
  <div class="w-11/12 md:w-7/12 mx-auto flex py-4">
    <div class="flex items-center space-x-3">
      <p class="opacity-70">Go back</p>

      <a href="/" class={`${focusStyle} flex bg-blue-700/20 hover:bg-blue-700 text-blue-700 dark:text-blue-300 hover:text-blue-200 rounded-full`}>
        <div class="rounded-xl py-1.5 px-3.5 font-medium flex items-center space-x-1">
          <i class="icon icon-ic_fluent_home_20_regular flex text-2xl rounded-full"></i>
  
          <span class="">Home</span>
        </div>
      </a>
    </div>
  </div>

</section>