<script lang="ts">
  import { goto, afterNavigate } from "$app/navigation"
  import { base } from "$app/paths";
    import Mklogo from "$lib/Trogg/Mklogo.svelte";
    import Yuzaname from "$lib/Trogg/Yuzaname.svelte";

  let previousPage: string = base;

  afterNavigate(({from})=>{
    previousPage = from?.url.pathname || previousPage
  })

  // to go back
  // goto(previousPage)
</script>

<main class="w-full h-full flex flex-col items-center justify-center space-y-2">
  <Mklogo title={"Wk"}/>
  <h2 class="font-medium text-xl">
    <Yuzaname name="Wiki"/>
  </h2>
  <p class="md:w-8/12 lg:w-6/12 b-rose-600 text-sm text-center opacity-50">
    Get direct help from our community on different issues and our products.
    <br>
    Use Wiki with a Tcitrogg account and your phone at your time.
  </p>
</main>