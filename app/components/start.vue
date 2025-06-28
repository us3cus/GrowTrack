<template>
  <section class="start-section">
    <h2 class="start-title">
      <span class="emoji">🧭</span> Готов узнать себя получше?
    </h2>
    <p class="start-subtitle">
      Ты ответишь на 6 простых вопросов — про себя, мечты и то, что тебе важно.<br />
      В конце ты получишь маршрут в формате PDF.<br />
      Простой, личный, твой.
    </p>
    <div class="start-buttons" :class="{ 'show': showButtons }">
      <Button class="start-btn yes big" @click="onYes">Да, поехали</Button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showButtons = ref(false)

onMounted(() => {
  setTimeout(() => {
    showButtons.value = true
  }, 800)
})

function onYes() {
    navigateTo({ path: '/form' })
}
</script>

<style scoped>
.start-section {
  border-radius: 1.5rem;
  padding: 3rem 1.5rem 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: none;
  margin: 2.5rem 0;
}
.start-title {
  color: #4b2996;
  font-size: 2.3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.2rem;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  letter-spacing: -0.5px;
}
.emoji {
  font-size: 2.1rem;
  vertical-align: middle;
  margin-right: 0.4rem;
}
.start-subtitle {
  color: #555;
  font-size: 1.18rem;
  text-align: center;
  margin-bottom: 2.2rem;
  line-height: 1.6;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
}
.start-buttons {
  display: flex;
  gap: 1.2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
}
.start-buttons.show {
  opacity: 1;
  transform: translateY(0);
}
.start-btn {
  min-width: 140px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 2rem;
  padding: 0.85rem 1.7rem;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  transition: box-shadow 0.2s;
}
.start-btn.yes {
  background: linear-gradient(90deg, #a084ee 0%, #7f53e7 100%);
  color: #fff;
  border: none;
  box-shadow: 0 2px 12px 0 rgba(127, 83, 231, 0.13);
}
.start-btn.yes:hover {
  background: linear-gradient(90deg, #7f53e7 0%, #a084ee 100%);
}
.start-btn.big {
  min-width: 320px;
  min-height: 80px;
  font-size: 2.2rem;
  padding: 1.5rem 3.5rem;
  border-radius: 3rem;
}
</style>
