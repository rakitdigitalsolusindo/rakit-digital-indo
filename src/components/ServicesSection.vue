<template>
  <section class="services-section" ref="sectionRef">
    <div class="services-container">
      <transition name="fade" mode="out-in">
        <div :key="currentLang" class="services-header">
          <h2>{{ servicesData[currentLang].title }}</h2>
          <p>{{ servicesData[currentLang].description }}</p>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <div :key="currentLang" class="services-grid" :class="{ 'animate-in': isVisible }">
          <div class="service-card" v-for="(service, index) in servicesData[currentLang].items" :key="service.title" :style="{ zIndex: 10 - index }">
            <div class="service-icon" v-html="service.svgIcon"></div>
            <h3>{{ service.title }}</h3>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { servicesData } from '../data/services';
import { currentLang } from '../composables/useLanguage';

const isVisible = ref(false);
const sectionRef = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.15 });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<style scoped>
.services-section {
  position: relative;
  background-color: transparent;
  padding-bottom: 120px;
  color: var(--text-main);
}

.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
  padding-top: 24px; /* Reduced gap */
}

.services-header {
  text-align: center;
  margin-bottom: 64px;
}

.services-header h2 {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #ffffff;
}

.services-header p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.service-card {
  background-color: var(--card-bg);
  padding: 24px 32px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  border: 1px solid rgba(0,0,0,0.02);
  /* Animation setup */
  opacity: 1;
  transform: translateY(0);
  transition: transform 4s cubic-bezier(0.16, 1, 0.3, 1), opacity 4s ease, box-shadow 0.3s ease;
  position: relative;
}

.service-card:hover {
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.services-grid.animate-in .service-card:hover {
  transform: translateY(-5px);
}

/* Initial state for children 3,4 (Row 2) */
.services-grid:not(.animate-in) .service-card:nth-child(3),
.services-grid:not(.animate-in) .service-card:nth-child(4) {
  /* Offset up exactly 1 row (114px height + 32px gap) */
  transform: translateY(-146px);
  opacity: 0;
}

/* Initial state for children 5,6 (Row 3) */
.services-grid:not(.animate-in) .service-card:nth-child(5),
.services-grid:not(.animate-in) .service-card:nth-child(6) {
  /* Offset up exactly 2 rows */
  transform: translateY(-292px);
  opacity: 0;
}

/* Children 1,2 just fade in to look consistent */
.services-grid:not(.animate-in) .service-card:nth-child(1),
.services-grid:not(.animate-in) .service-card:nth-child(2) {
  opacity: 0;
}

.service-icon {
  background-color: rgba(172, 88, 233, 0.1);
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  flex-shrink: 0;
  color: var(--primary-accent, #ac58e9);
  padding: 16px;
}

.service-icon svg {
  width: 32px;
  height: 32px;
  stroke: currentColor;
}

.service-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-main);
  margin: 0;
}

@media (max-width: 768px) {
  .services-container {
    padding-top: 40px;
  }
  
  .services-header h2 {
    font-size: 36px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }
  
  /* Responsive offset disable for 1-column layout */
  .services-grid:not(.animate-in) .service-card {
    transform: translateY(-50px) !important;
  }
}
</style>
