<script lang="ts">
    export let isX: boolean = false
    export let style: string = ""
</script>

<div class={`${isX ? "h-[0.2rem] w-3/5 left-[20%] bottom-0.5" : "w-[0.2rem] h-3/5 top-[20%] right-0.5"} absolute bg-blue-600 rounded-full ${style}`}></div>