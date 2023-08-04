<script lang="ts">
  export let text: string = ""

  const focusStyle = "focus:outline-none focus:ring-1 focus:ring-blue-700/70"
</script>

<a href={`/topics/${text}`} class={`${focusStyle} rounded-xl bg-blue-700/20 hover:bg-blue-700 text-blue-700 hover:text-blue-200 mx-0.5 my-0.5 py-0.5 px-3 font-medium`}>
  {text}
</a>