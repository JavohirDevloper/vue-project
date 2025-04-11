<template>
  <button
      class="btn w-full mt-5 bg-blue-500 p-3 rounded-lg transition-colors
           hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      :type="type"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
})
</script>
