<template>
  <ul class="error-list">
    <li
        v-for="errorMessage in errorMessages"
        :key="errorMessage"
        class="error-item"
    >
      {{ errorMessage }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const msg = this.validationErrors[name].join(', ')
        return `${name} ${msg}`
      })
    },
  },
}
</script>

<style scoped>
.error-list {
  list-style: none;
  padding: 0;
  margin-top: 10px;
}

.error-item {
  background-color: #ffe5e5;
  border: 1px solid #ff4d4d;
  color: #b30000;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
}
</style>