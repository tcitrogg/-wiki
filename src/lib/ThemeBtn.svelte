<script>
	import { browser } from "$app/environment";
	import { fly, fade, scale, slide } from "svelte/transition";

	let isDarkMode = true;
	
	const handleMode = () => {
		isDarkMode = !isDarkMode;

        localStorage.setItem('theme', isDarkMode ? "dark" : "light");
        // localStorage.setItem('color-theme', isDarkMode ? "dark" : "light");

		isDarkMode
			? document.documentElement.classList.add("dark")
			: document.documentElement.classList.remove("dark");
		// alert(`it is dark ${localStorage.getItem('color-theme')}`);
	}

	if (browser) {
		if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.classList.add("dark");
			isDarkMode = true;
		} else {
			document.documentElement.classList.remove("dark");
			isDarkMode = false;
		}
	}
</script>

<!-- <input type="checkbox" checked={isDarkMode} on:click={handleMode} name="theme-toggle" id="theme-toggle"/> -->
<button type="button" title="Theme" on:click={handleMode} class={`p-0.5 relative ${isDarkMode ? "bg-blue-600 hover:bg-blue-500" : " bg-gray-300 dark:bg-zinc-800 hover:bg-transparent/10 dark:hover:bg-zinc-700/70"} rounded-full focus:outline-none focus:ring-1 focus:ring-blue-600 overflow-hidden`}>
{#if isDarkMode}
	<i transition:slide class="relative icon icon-ic_fluent_weather_sunny_20_regular flex text-xl rounded-full text-zinc-100 p-0.5"></i>
{:else}
	<i transition:slide class="relative icon icon-ic_fluent_weather_moon_20_regular flex text-xl rounded-full p-0.5"></i>
{/if}
</button>