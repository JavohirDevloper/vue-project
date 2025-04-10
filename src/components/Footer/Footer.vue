<template>
  <footer class="py-6">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm">&copy; 2025 Barcha huquqlar himoyalangan</p>
        </div>
        <div class="flex gap-4 space-x-6">
          <router-link to="/" class="hover:text-blue-400 transition-colors">
            Bosh sahifa
          </router-link>
          <router-link to="/about" class="hover:text-blue-400 transition-colors">
            Biz haqimizda
          </router-link>
          <router-link to="/contact" class="hover:text-blue-400 transition-colors">
            Aloqa
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
</style>