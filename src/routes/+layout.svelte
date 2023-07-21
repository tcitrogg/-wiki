<script lang="ts">
  import Aside from "$lib/Aside.svelte";
  import "../app.css"

  export let data;
</script>

<section class="w-full h-smscreen md:h-screen relative font-sans bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 scrollbar overflowhidden">

  <div class="lg:container lg:mx-auto h-full flex">

    <section class="w-full xl:w-3/12 lg:w-4/12 md:w-4/12 h-full md:block hidden">
      <Aside listOfWknotes={data}/>
    </section>
    <section class="w-full xl:w-9/12 lg:w-8/12 md:w-8/12 h-full md:p-1">

      <div class="w-full h-full md:bg-zinc-200 md:dark:bg-zinc-800 md:rounded-lg">
        <slot/>
      </div>
    </section>
  </div>
</section>