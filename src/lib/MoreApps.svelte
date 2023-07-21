<script lang="ts">
    import Tooltip from "./Tooltip.svelte";

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"

  const moreApps = [
    {
      title: "Academia",
      logo: "bnierimi.svg"
    }, {
      title: "Lens",
      logo: "bnierimi-gray.svg"
    }, {
      title: "Kyu",
      logo: "holyrerri3-gray.svg"
    },
    {
      title: "Dome",
      logo: "note-gray.svg"
    }, {
      title: "Note",
      logo: "note.svg"
    }, {
      title: "Vault",
      logo: "pages-gray.svg"
    },
    {
      title: "Tssue",
      logo: "tssue.svg"
    }, {
      title: "Reishi",
      logo: "reishi.svg"
    }, {
      title: "Mugiwara",
      logo: "tssue-gray.svg"
    }
  ]
</script>

<button id="moreappsDropdownBtn" data-dropdown-toggle="moreappsDropdown" data-dropdown-placement="left-end" data-tooltip-target="moreappsTooltip" data-tooltip-placement="right" class={`${focusStyle} px-2 py-2 hover:bg-zinc-300 hover:dark:bg-zinc-700 rounded`}>
  <i class="icon icon-ic_fluent_grid_dots_20_regular flex text-xl"></i>
</button>

<div id="moreappsDropdown" class="z-10 hidden bg-zinc-200 dark:bg-zinc-800 rounded-xl shadow w-fit">
  <ul class="p-1 grid md:grid-cols-3 gap-2" aria-labelledby="moreappsDropdownBtn">
    {#each moreApps as eachApp, index}
      <li>
        <a href={`${eachApp.title.toLowerCase()}.trgg.app`} class="block rounded-xl px-4 py-3 hover:bg-zinc-300 hover:dark:bg-zinc-700">
          <div class="flex flex-col items-center space-y-1">
            <img src={`/imgs/${eachApp.logo}`} alt={eachApp.title} class="w-10"/>
            <p class="text-xs">{ eachApp.title }</p>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>

<Tooltip title={"More apps"} id={"moreappsTooltip"}/>