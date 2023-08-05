<script lang="ts">
  import { onMount } from 'svelte';
	import { fly, fade, scale, slide } from 'svelte/transition';
  import type { Post } from "$lib/types";
  import DomainsDir from "./DomainsDir.svelte";
    import SearchSection from './SearchSection.svelte';
  
  export let data: {posts: Post[]};

	let domains: any[] = []; // Folders
	let norms: any[] = []; // Files not in a folder
  
	// Get all domains
  const getDomains = () => {
    for (let postObj of data.posts) {
      const p = postObj.path.split("/src/posts")[1]
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
  <SearchSection {data}/>
  <DomainsDir {norms} domains={getDomains()} posts={data.posts}/>
</aside>
