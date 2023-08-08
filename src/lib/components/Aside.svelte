<script lang="ts">
  import { onMount } from 'svelte';
	import { fly, fade, scale, slide } from 'svelte/transition';
  import type { Post } from "$lib/types";
  import DomainsDir from "./DomainsDir.svelte";
  import SearchSection from './SearchSection.svelte';
  import ThemeBtn from './ThemeBtn.svelte';
  import { articleDir } from '$lib/config';
  
  export let data: {posts: Post[]};
  export let searchId: string;

	let domains: any[] = []; // Folders
	let norms: any[] = []; // Files not in a folder
  
	// Get all domains
  const getDomains = () => {
    for (let postObj of data.posts) {
      const p = postObj.path.split(articleDir)[1]
      const fd = p.split("/")[1]
      const endsMd = fd.endsWith(".md")

      if (!domains.includes(fd) && !endsMd) {
        domains.push(fd)
      } else if (endsMd) {
        norms.push(postObj)
      }
    }
    
    domains.forEach((each_domain:any)=>{
      let i = domains.indexOf(each_domain)
      domains[i] = {
      title: each_domain,
      isOpen: false,
    }
    })
    
    return [...new Set(domains)]
  }

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<aside
  class="w-full h-full flex flex-col py-2 md:py-1.5 overflow-y-auto relative"
  >
  <div class="flex px-4 my-2">
    <ThemeBtn />
  </div>
  <section transition:slide="{{ duration: 300, axis:"x" }}" id={`${searchId}`} tabindex="-1" aria-labelledby={`${searchId}-label`} class={`absolute z-50 top-0 left-0 transition-transform -translate-x-full w-full h-full space-y-1 bg-zinc-200 md:bg-zinc-100 dark:bg-zinc-800 md:dark:bg-zinc-800 md:rounded-md`}>
    <SearchSection {data} id={searchId}/>
  </section>
  <DomainsDir {norms} domains={getDomains()} posts={data.posts}/>
</aside>
