<template>
  <footer class="w-full" pt-6 pb-4>
    <hr class="border-t border-gray-300 mb-6" />
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div class="flex-1 flex justify-start md:justify-center mb-4 md:mb-0">
        <span class="text-2xl font-bold text-primary-600">GrowTrack</span>
      </div>
      <div class="flex-1 flex justify-end space-x-8">
        <a href="#about" class="text-gray-600 hover:text-primary-600 transition">О нас</a>
        <a @click="panel" class="text-gray-600 hover:text-primary-600 transition">Войти</a>
        <a href="#privacy" class="text-gray-600 hover:text-primary-600 transition">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
function panel() {
    navigateTo({ path: '/view' })
}
</script>
