<template>
  <section class="hero-section" ref="heroSectionRef">
    <div class="hero-container">
      <transition name="fade" mode="out-in">
        <div :key="currentLang" class="hero-content" :class="{ 'animate-in': isVisible }">
          <h1>
            <span class="text-gradient">{{ heroData[currentLang].headline }}</span>
          </h1>
          <p>{{ heroData[currentLang].subheadline }}</p>
          <a href="#about" class="btn-primary">{{ heroData[currentLang].buttonText }}</a>
        </div>
      </transition>
      <div class="hero-image" :class="{ 'animate-in': isVisible }">
        <img :src="getDriveDirectUrl(heroData.image)" alt="Dashboard Preview" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { heroData } from '../data/hero';
import { getDriveDirectUrl } from '../utils/gdrive';
import { currentLang } from '../composables/useLanguage';

const isVisible = ref(false);
const heroSectionRef = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.1 },
  );

  if (heroSectionRef.value) {
    observer.observe(heroSectionRef.value);
  }
});

onUnmounted(() => {
  if (observer && heroSectionRef.value) {
    observer.unobserve(heroSectionRef.value);
  }
});
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  z-index: 1;
}

.hero-content {
  flex: 1;
  max-width: 50%;
  transform: translateY(-80px);
}

.hero-content h1 {
  font-size: 48px;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-main);
  margin-bottom: 16px;
  position: relative;
  left: -1000px;
  opacity: 0;
  transition: left 4s cubic-bezier(0.16, 1, 0.3, 1), opacity 4s ease;
}

.hero-content.animate-in h1 {
  left: 0;
  opacity: 1;
}

.text-gradient {
  background: linear-gradient(135deg, #ffffff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-content p {
  font-size: 16px;
  color: var(--text-muted);
  margin-bottom: 32px;
  max-width: 400px;
  position: relative;
  left: -1000px;
  opacity: 0;
  transition: left 4s cubic-bezier(0.16, 1, 0.3, 1), opacity 4s ease;
}

.hero-content.animate-in p {
  left: 0;
  opacity: 1;
}

.btn-primary {
  background: linear-gradient(90deg, #ac58e9, #c384fa);
  color: white;
  border: none;
  padding: 16px 36px;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  left: -1000px;
  opacity: 0;
  transition:
    left 4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 4s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.4);
}

.hero-content.animate-in .btn-primary {
  left: 0;
  opacity: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  background: linear-gradient(90deg, #ac58e9, #c384fa);
  box-shadow: 0 15px 25px -5px rgba(139, 92, 246, 0.45);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transform: scale(0.1);
  transition:
    opacity 4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 4s cubic-bezier(0.16, 1, 0.3, 1);
}

.hero-image.animate-in {
  opacity: 1;
  transform: scale(1);
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 900px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    gap: 48px;
    padding-top: 48px;
  }

  .hero-content {
    max-width: 100%;
  }

  .hero-content p {
    margin: 0 auto 40px auto;
  }

  .hero-content h1 {
    font-size: 48px;
  }

  .hero-image {
    display: none;
  }
}
</style>
