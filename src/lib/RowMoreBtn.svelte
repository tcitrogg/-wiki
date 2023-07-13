<script lang="ts">
  export let id:string = ""

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-emerald-500/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-emerald-500/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<button id={`${id}Btn`} data-dropdown-toggle={id} data-dropdown-placement="left-start" class={`${focusStyle} p-1 rounded-full hover:bg-zinc-300 dark:hover:bg-zinc-700`}>
  <i class="icon icon-ic_fluent_more_vertical_20_regular flex text-xl"></i>
</button>

<div id={id} class="z-10 hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl shadow w-44">
  <ul class="p-1 text-sm" aria-labelledby={`${id}Btn`}>
    <li>
      <a href="#" class="block rounded-lg px-4 py-2 hover:bg-zinc-300 hover:dark:bg-zinc-700">Share</a>
    </li>
    <li>
      <a href="#" class="block rounded-lg px-4 py-2 hover:bg-zinc-300 hover:dark:bg-zinc-700">Archive</a>
    </li>
    <li>
      <a href="#" class="block rounded-lg px-4 py-2 hover:bg-zinc-300 hover:dark:bg-zinc-700">Delete</a>
    </li>
    <li>
      <a href="#" class="block rounded-lg px-4 py-2 hover:bg-zinc-300 hover:dark:bg-zinc-700">Add to</a>
    </li>
  </ul>
</div>