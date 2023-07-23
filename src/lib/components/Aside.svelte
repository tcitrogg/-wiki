<script lang="ts">
  import ListOfRows from "./ListOfRows.svelte";
  import Troggapp from "./Trogg/Troggapp.svelte";
  import ThemeBtn from "./ThemeBtn.svelte";

  export let listOfPosts: any;
  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<aside
  class="w-full h-full flex-col space-y-4 py-4 px-2"
>
  <div class="w-full bg-rose- flex items-center justify-between px-4">
    <h1 class="font-medium text-xl">
      <Troggapp name="Wiki" />
    </h1>
    <ThemeBtn />
  </div>
  <div class="px-4">
    <div class={`${focusWithinStyle} bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center`}>
      <input type="text" name="" id="" placeholder="Search Wiki..." class={`${noFocusStyle} px-3 py-1.5 w-full bg-transparent border-0 rounded-full text-sm`}>
      <button class={`${focusStyle} p-1.5 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700 ml-1`}>
        <i class="icon icon-ic_fluent_search_20_regular flex text-xl"></i>
      </button>
    </div>
  </div>
  <ListOfRows {listOfPosts}/>
</aside>
