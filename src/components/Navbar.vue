<template>
  <nav :class="['navbar', { 'navbar--scrolled': isScrolled, 'navbar--mobile-open': isMobileMenuOpen }]">
    <div class="navbar-container">
      <div class="navbar-left">
        <a href="#" class="navbar-logo">
          <img src="/logo.svg" alt="Rakit Digital Solusindo" class="nav-logo-img" />
        </a>
      </div>

      <button class="hamburger-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
        <span class="bar" :class="{ 'bar--open': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar--open': isMobileMenuOpen }"></span>
        <span class="bar" :class="{ 'bar--open': isMobileMenuOpen }"></span>
      </button>

      <div class="navbar-center">
        <ul class="navbar-menu">
          <li v-for="link in navbarData[currentLang]" :key="link.label">
            <a :href="link.href" @click="isMobileMenuOpen = false">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="navbar-right">
        <div class="navbar-actions">
          <button class="lang-switch" @click="toggleLanguage">
            {{ currentLang === 'en' ? 'EN' : 'ID' }}
          </button>
          <a href="#contact" class="btn-secondary" @click="isMobileMenuOpen = false">
            {{ currentLang === 'en' ? 'Contact Us' : 'Hubungi Kami' }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navbarData } from '../data/navbar'
import { currentLang, toggleLanguage } from '../composables/useLanguage'

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
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;
  background-color: transparent;
}

.navbar--scrolled {
  background-color: rgba(10, 10, 12, 0.8);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.navbar-container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.navbar-left,
.navbar-center,
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-center {
  flex: 1;
  justify-content: center;
}

.navbar-right {
  justify-content: flex-end;
}

.navbar-logo {
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
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  display: flex;
  align-items: center;
}

.navbar-menu a {
  font-weight: 600;
  color: var(--text-main);
  transition: color 0.3s ease;
}

.navbar-menu a:hover {
  color: var(--primary);
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.lang-switch {
  background: transparent;
  border: 1px solid var(--text-main);
  color: var(--text-main);
  padding: 0.5rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.lang-switch:hover {
  background-color: var(--primary);
  color: white;
  border-color: var(--primary);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  border: 2px solid var(--text-main);
  color: var(--text-main);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-secondary:hover {
  background-color: var(--text-main);
  color: #000000;
}

.navbar--scrolled .btn-secondary {
  border-color: var(--primary-accent);
  color: var(--primary-accent);
}

.navbar--scrolled .btn-secondary:hover {
  background-color: var(--primary-accent);
  color: #ffffff;
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
  background-color: var(--text-main);
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

@media (max-width: 768px) {
  .hamburger-btn {
    display: flex;
  }

  .navbar-center,
  .navbar-right {
    display: none;
  }

  .navbar--mobile-open .navbar-container {
    flex-wrap: wrap;
  }

  .navbar--mobile-open .navbar-center {
    display: flex;
    order: 3;
    width: 100%;
    justify-content: center;
    padding-top: 0.5rem;
  }

  .navbar--mobile-open .navbar-right {
    display: flex;
    order: 4;
    width: 100%;
    justify-content: center;
    padding-top: 0.5rem;
  }

  .navbar-menu {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  .navbar-actions {
    flex-direction: column;
    gap: 0.75rem;
  }
}
</style>
