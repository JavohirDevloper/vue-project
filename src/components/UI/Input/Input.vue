<template>
  <div>
    <label class="mb-2" :for="label">{{ label }}</label>
    <input
        :type="type"
        class="w-full pl-10 p-3 border rounded-lg"
        v-bind="$attrs"
        :id="label "
        :placeholder="placeholder"
        required
        @input="updateInput"
        :value="modelValue"
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
    placeholder: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  },
  inheritAttrs: false
};
</script>