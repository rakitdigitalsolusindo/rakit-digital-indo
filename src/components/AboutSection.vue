<template>
  <section class="about-section" ref="sectionRef">
    <div class="about-container">
      <div class="about-column-left" :class="{ 'animate-left': isVisible }">
        <h2 class="about-title" v-html="aboutData.title.replace('\\n', '<br/>')"></h2>
        <div class="image-left">
          <img :src="getDriveDirectUrl(aboutData.imageLeft)" alt="Creative Design Agency Team" />
          <div class="green-badge">
            <span class="star-icon">✦</span>
            <span v-html="aboutData.badgeText.replace('\\n', '<br/>')"></span>
          </div>
        </div>
      </div>
      
      <div class="about-column-right" :class="{ 'animate-right': isVisible }">
        <div class="about-description">
          <p>{{ aboutData.description }}</p>
        </div>
        <div class="image-right">
          <img :src="getDriveDirectUrl(aboutData.imageRight)" alt="Creative Team Member" />
          <div class="red-doodle">
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff4785" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 18h6"></path>
                <path d="M10 22h4"></path>
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 12 3a4.65 4.65 0 0 0-4.5 8.5c.76.76 1.23 1.52 1.41 2.5"></path>
             </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { aboutData } from '../data/about';
import { getDriveDirectUrl } from '../utils/gdrive';

const isVisible = ref(false);
const sectionRef = ref(null);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isVisible.value = entry.isIntersecting;
    });
  }, { threshold: 0.2 });

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
.about-section {
  background-color: var(--wave-color);
  padding: 40px 24px 120px 24px;
  color: white;
  margin-top: -2px;
  overflow: hidden; /* Mencegah horizontal scrollbar saat animasi */
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 64px;
}

.about-column-left {
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* Start hidden & shifted left */
  opacity: 0;
  transform: translateX(-150px);
  transition: opacity 4s ease, transform 4s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-column-right {
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 40px;
  /* Start hidden & shifted right */
  opacity: 0;
  transform: translateX(150px);
  transition: opacity 4s ease, transform 4s cubic-bezier(0.16, 1, 0.3, 1);
}

.about-column-left.animate-left,
.about-column-right.animate-right {
  opacity: 1;
  transform: translateX(0);
}

.about-title {
  font-size: 56px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}

.about-description {
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.9;
  padding-top: 16px; /* Align visually with the heading */
}

.image-left {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background-color: #111111;
  height: 400px;
  flex-grow: 1;
}

.image-left img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.green-badge {
  position: absolute;
  bottom: 32px;
  left: 32px;
  background-color: #bfff40;
  color: #000000;
  padding: 16px 24px;
  font-weight: 800;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  line-height: 1.4;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.star-icon {
  font-size: 24px;
  color: #000000;
}

.image-right {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background-color: #111111;
  height: 480px;
  flex-grow: 1;
}

.image-right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
}

.red-doodle {
  position: absolute;
  top: 24px;
  left: 24px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 12px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transform: rotate(-10deg);
}

@media (max-width: 900px) {
  .about-container {
    flex-direction: column;
    gap: 40px;
  }
  
  .about-title {
    font-size: 40px;
  }
  
  .image-left, .image-right {
    height: 300px;
  }
}
</style>
