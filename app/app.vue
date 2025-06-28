<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
// Принудительно устанавливаем светлую тему
const colorMode = useColorMode()
colorMode.preference = 'light'
colorMode.value = 'light'
</script>