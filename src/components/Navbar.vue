<template>
  <nav :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="#"><img src="/logo.svg" alt="Rakit Digital Solusindo" class="nav-logo-img" /></a>
      </div>
      <ul class="navbar-menu">
        <li v-for="link in navbarData" :key="link.label">
          <a :href="link.href">{{ link.label }}</a>
        </li>
      </ul>
      <div class="navbar-actions">
        <a href="#contact" class="btn-secondary">Contact Us</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navbarData } from '../data/navbar'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  transition: all 0.3s ease-in-out;
  z-index: 1000;
  background-color: transparent;
}

.navbar--scrolled {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 16px 24px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.navbar-logo a {
  display: flex;
  align-items: center;
}

.nav-logo-img {
  height: 25px;
  width: auto;
  object-fit: contain;
}

.navbar-menu {
  display: flex;
  gap: 32px;
}

.navbar-menu a {
  font-weight: 600;
  color: var(--text-dark);
  transition: color 0.3s ease;
}

.navbar-menu a:hover {
  color: var(--primary-accent);
}

.btn-secondary {
  display: inline-block;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid var(--text-dark);
  color: var(--text-dark);
  padding: 10px 24px;
  border-radius: 9999px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--text-dark);
  color: var(--text-light);
}

.navbar--scrolled .btn-secondary {
  border-color: var(--primary-accent);
  color: var(--primary-accent);
}
.navbar--scrolled .btn-secondary:hover {
  background-color: var(--primary-accent);
  color: var(--text-light);
}
</style>
