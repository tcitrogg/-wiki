<script>
  import Aside from "$lib/Aside.svelte";
import "../app.css"
</script>

<section class="w-full h-smscreen md:h-screen relative font-sans bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 scrollbar overflowhidden">

  <div class="lg:container mx-auto h-full flex">

    <Aside/>
    <section class="xl:w-9/12 lg:w-8/12 md:w-8/12 h-full md:p-1">

      <div class="w-full h-full md:bg-zinc-200 md:dark:bg-zinc-800 md:rounded-lg">
        <slot/>
      </div>
    </section>
  </div>
</section>