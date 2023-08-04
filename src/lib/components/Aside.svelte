<script lang="ts">
  import { onMount } from 'svelte';
  import type { Post } from "$lib/types";
  import DomainsDir from "./DomainsDir.svelte";
  
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
	// onMount(() => getDomains());

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-600/70"
  const focusWithinStyle = "focus-within:outline-none focus-within:ring-1 focus-within:ring-blue-600/70"
  const noFocusStyle = "focus:outline-none focus:ring-0"
</script>

<aside
  class="w-full h-full flex flex-col space-y-1 py-2 md:py-1.5"
>
  <h3 class="font-medium text-sm md:text-base px-4 my-2 opacity-70">Articles</h3>

  <div class="overflow-y-auto space-y-2 px-">
    <DomainsDir {norms} domains={getDomains()} posts={data.posts}/>
  </div>

</aside>
