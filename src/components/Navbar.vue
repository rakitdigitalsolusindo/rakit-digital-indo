<template>
  <nav :class="['navbar', { 'navbar--scrolled': isScrolled }]">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="#"><img src="/logo.svg" alt="Rakit Digital Solusindo" class="nav-logo-img" /></a>
      </div>
      <!-- Mobile Hamburger Button -->
      <button class="hamburger-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
        <span class="bar" :class="{ 'bar--open': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar--open': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar--open': isMobileMenuOpen }"></span>
      </button>

      <div class="nav-links-wrapper" :class="{ 'nav-links-wrapper--open': isMobileMenuOpen }">
        <ul class="navbar-menu">
          <li v-for="link in navbarData" :key="link.label">
            <a :href="link.href" @click="isMobileMenuOpen = false">{{ link.label }}</a>
          </li>
        </ul>
        <div class="navbar-actions">
          <a href="#contact" class="btn-secondary" @click="isMobileMenuOpen = false">Contact Us</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navbarData } from '../data/navbar'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

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

.hamburger-btn {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger-btn .bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-dark);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-btn .bar--open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-btn .bar--open:nth-child(2) {
  opacity: 0;
}

.hamburger-btn .bar--open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-links-wrapper {
  display: flex;
  align-items: center;
  gap: 32px;
}

@media (max-width: 768px) {
  .hamburger-btn {
    display: flex;
  }

  .nav-links-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    flex-direction: column;
    padding: 24px 0;
    gap: 24px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    transition: clip-path 0.4s ease-in-out;
    visibility: hidden;
  }

  .nav-links-wrapper--open {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    visibility: visible;
  }

  .navbar-menu {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
}
</style>
