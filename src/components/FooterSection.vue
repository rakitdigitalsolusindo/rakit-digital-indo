<template>
  <footer class="footer-section">
    <div class="footer-container">
      <div class="footer-brand">
        <div class="logo-wrapper">
          <img :src="footerData[currentLang].logo" alt="Rakit Digital Solusindo Logo" class="footer-logo" />
        </div>
        <h2>{{ footerData[currentLang].brandName }}</h2>
        <p>{{ footerData[currentLang].description }}</p>
      </div>
      <div class="footer-links">
        <div class="link-group" v-for="group in footerData[currentLang].linkGroups" :key="group.title">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="link in group.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} {{ footerData[currentLang].brandName }}. {{ footerData[currentLang].copyright }}</p>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { footerData } from '../data/footer';
import { currentLang } from '../composables/useLanguage';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer-section {
  background-color: #000000; /* Dark background */
  color: white;
  padding-top: 80px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  gap: 64px;
  margin-bottom: 64px;
}

.footer-brand {
  max-width: 400px;
}

.logo-wrapper {
  display: inline-block;
  margin-bottom: 24px;
}

.footer-logo {
  height: 25px;
  width: auto;
  object-fit: contain;
  display: block;
}

.footer-brand h2 {
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 16px;
}

.footer-brand p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.footer-links {
  display: flex;
  gap: 64px;
}

.link-group h3 {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
}

.link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-group li {
  margin-bottom: 16px;
}

.link-group a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-group a:hover {
  color: var(--primary-accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px 24px;
  text-align: center;
}

.footer-bottom p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 14px;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 40px;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
