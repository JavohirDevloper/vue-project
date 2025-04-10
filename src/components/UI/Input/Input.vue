<template>
  <div>
    <label class="mb-2">{{ label }}</label>
    <input
        :type="type"
        class="w-full pl-10 p-3 border rounded-lg"
        v-bind="$attrs"
        :placeholder="placeholder"
        required
    >

  </div>
  <slot></slot>
</template>

<script>
export default {
  name: 'InputUI',
  props: {
    label: String,
    type: String,
    placeholder: String
  },
  inheritAttrs: false
};
</script>