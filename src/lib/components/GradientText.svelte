<script lang="ts">
  export let text: string = ""
  export let color: string = "bg-gradient-to-r from-purple-400 to-pink-600"
</script>

<span class="text-transparent bg-clip-text {color}">
  {text}
</span>