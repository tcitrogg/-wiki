<script lang="ts">
  import Aside from "$lib/Aside.svelte";
  import Mklogo from "$lib/Trogg/Mklogo.svelte";
  import Troggapp from "$lib/Trogg/Troggapp.svelte";
</script>

<main class="w-full h-full">
  <section class="w-full h-full md:hidden block">
    <Aside/>
  </section>
  <section class="w-full h-full hidden md:flex flex-col items-center justify-center space-y-2">
    <Mklogo title={"Wk"}/>
    <h2 class="font-medium text-xl">
      <Troggapp name="Wiki"/>
    </h2>
    <p class="md:w-8/12 lg:w-6/12 b-rose-600 text-sm text-center opacity-50">
      Get direct help from our community on different issues and our products.
      <br>
      Use Wiki with a Tcitrogg account and your phone at your time.
    </p>
  </section>
</main>