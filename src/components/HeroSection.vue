<template>
  <section class="hero-section" ref="heroSectionRef">
    <!-- Background Curve -->
    <div class="hero-bg">
      <svg viewBox="0 0 1440 320" preserveAspectRatio="none" class="wave-svg">
        <path
          fill="var(--wave-color)"
          fill-opacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,144C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,133.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class="hero-bottom-fill"></div>
    </div>

    <div class="hero-container">
      <div class="hero-content" :class="{ 'animate-in': isVisible }">
        <h1>
          {{ heroData.titleStart }} <br /><span class="text-gradient">{{ heroData.titleHighlight }}</span>
        </h1>
        <p>{{ heroData.subtitle }}</p>
        <button class="btn-primary">{{ heroData.buttonText }}</button>
      </div>
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

.hero-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
}

.wave-svg {
  width: 100%;
  height: 250px;
}

.hero-bottom-fill {
  background-color: var(--wave-color);
  height: 150px;
  width: 100%;
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
  color: #000000;
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
  background: linear-gradient(135deg, #ac58e9, #c384fa);
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
  background: linear-gradient(90deg, #ff6b6b, #ff4785);
  color: white;
  border: none;
  padding: 16px 36px;
  border-radius: 9999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  position: relative;
  left: -1000px;
  opacity: 0;
  transition:
    left 4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 4s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 10px 20px -5px rgba(255, 71, 133, 0.4);
}

.hero-content.animate-in .btn-primary {
  left: 0;
  opacity: 1;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 25px -5px rgba(255, 71, 133, 0.5);
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
