<template>
  <button
      class="btn w-full mt-5 bg-blue-500 p-3 rounded-lg transition-colors rounded-lg
           hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      :type="type"
      :disabled="disabled"
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
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>
