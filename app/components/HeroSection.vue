<script setup lang="ts">
  const heroCaption = 'Adopt A Pet'
  const heroTitle = 'Thousands of homeless dogs, one act of kindness'
  const heroDescription =
    'Find your new furry friend today! We have a wide variety of lovable pets available for adoption. Come visit us and take home your new best friend!'
</script>
<template>
  <section class="w-screen min-h-screen relative overflow-hidden flex items-center justify-center px-0">
    <div class="absolute inset-0 -z-1">
      <NuxtImg 
        src="https://primefaces.org/cdn/templates/genesis/pages/e-learning/hero-background.jpg" 
        class="absolute inset-0 w-full h-full object-cover z-0 brightness-50" 
        alt="Hero background"
      />
    </div>
    <div class="relative z-10 w-full flex justify-start">
      <div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 w-full max-w-5xl">
        <div
          class="flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
        >
          <div class="w-full text-left mr-[8%]">
            <h4
              class="font-extrabold mb-4 text-primary-600 dark:text-primary-200 text-3xl md:text-5xl uppercase drop-shadow-lg"
            >
              Хочешь понять
            </h4>
            <h1 class="leading-tight mb-4 text-white text-5xl md:text-7xl font-black drop-shadow-xl">
              Кем ты хочешь быть <br> и как к этому прийти?
            </h1>
            <p class="font-thin mb-8 text-gray-200 text-2xl md:text-4xl max-w-2xl drop-shadow">
              Пройди лёгкий маршрут самоопределения.<br>
              Всего 5–7 минут. Без оценок. По-настоящему — про тебя.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>