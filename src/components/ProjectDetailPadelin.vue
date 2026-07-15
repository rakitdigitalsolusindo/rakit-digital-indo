<template>
  <div class="project-modal-overlay" @click.self="$emit('close')">
    <div class="project-modal-window">
      <button type="button" class="close-btn" @click="$emit('close')" aria-label="Close project detail">×</button>

      <div class="modal-content-wrapper">
      <div class="project-gallery">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="img"
          :alt="`Health Tracking App screenshot ${index + 1}`"
          class="carousel-image"
          :class="{
            active: currentImageIndex === index,
            prev: index === (currentImageIndex - 1 + images.length) % images.length,
            next: index === (currentImageIndex + 1) % images.length
          }"
        />

        <div class="carousel-gradient-overlay"></div>

        <button type="button" class="carousel-btn left" @click="prev" aria-label="Previous image">‹</button>
        <button type="button" class="carousel-btn right" @click="next" aria-label="Next image">›</button>
      </div>

      <div class="project-info">
        <h2>PadeLIN</h2>
        <p class="project-description">
          {{ currentLang === 'id' ? 'Sistem manajemen logistik dan pelacakan distribusi barang yang dirancang untuk mempercepat alur kerja gudang dan memastikan pengiriman tepat waktu.' : 'A logistics management and goods-distribution tracking system designed to streamline warehouse workflows and ensure on-time delivery.' }}
        </p>

        <ul class="feature-list">
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="flex-shrink: 0;"><path fill="#ac58e9" d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
            {{ currentLang === 'id' ? 'Pelacakan langsung pengiriman armada.' : 'Live fleet delivery tracking.' }}
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="flex-shrink: 0;"><path fill="#ac58e9" d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
            {{ currentLang === 'id' ? 'Manajemen stok gudang.' : 'Warehouse inventory management.' }}
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="flex-shrink: 0;"><path fill="#ac58e9" d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
            {{ currentLang === 'id' ? 'Pemindaian barcode dan QR code barang.' : 'Item barcode and QR code scanning.' }}
          </li>
          <li>
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" style="flex-shrink: 0;"><path fill="#ac58e9" d="M9 16.2l-4.2-4.2-1.4 1.4L9 19 21 7l-1.4-1.4z"/></svg>
            {{ currentLang === 'id' ? 'Laporan analitik distribusi bulanan.' : 'Monthly distribution analytics reports.' }}
          </li>
        </ul>

        <a class="project-demo-btn" href="https://example.com/health-tracking-app" target="_blank" rel="noreferrer">{{ currentLang === 'id' ? 'Kunjungi Web' : 'Live Demo' }}</a>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { currentLang } from '../composables/useLanguage';

defineEmits(['close']);

const images = [
  '/detail-images-app/padellin (1).png',
  '/detail-images-app/padellin (2).png',
  '/detail-images-app/padellin (3).png',
  '/detail-images-app/padellin (4).png',
  '/detail-images-app/padellin (5).png',
  '/detail-images-app/padellin (6).png',
];

const currentImageIndex = ref(0);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.body.style.overflow = '';
});

// images is the full array; template computes classes (active/prev/next) directly

const prev = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

const next = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};
</script>

<style scoped>
.project-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  animation: modalFadeIn 0.3s ease-out forwards;
}

.project-modal-window {
  background-color: #0a0a0a;
  width: 100%;
  max-width: 1350px;
  max-height: 85vh;
  overflow: hidden;
  border-radius: 24px;
  position: relative;
  padding: 4rem 3rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  border: 1px solid #27272a;
  display: flex;
  flex-direction: column;
}

@keyframes modalFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.close-btn {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #1a1a1a;
  color: #ffffff;
  border: 1px solid #3f3f46;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 50;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.4);
}

.close-btn:hover {
  background-color: #ac58e9;
  border-color: #ac58e9;
  transform: scale(1.1);
}

.modal-content-wrapper {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 4.5rem;
  align-items: center;
  width: 95%;
  max-width: 1350px;
  margin: 0 auto;
  height: calc(85vh - 8rem);
  min-height: 0;
}

.project-gallery {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  position: absolute;
  width: 85%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  opacity: 0;
  z-index: -1;
  transform: translateX(0) scale(0.6);
  pointer-events: none;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease, z-index 0.6s, filter 0.6s;
}

.carousel-image.active {
  opacity: 1;
  z-index: 3;
  transform: translateX(0) scale(1);
  filter: drop-shadow(0px 20px 30px rgba(0, 0, 0, 0.8)) brightness(1);
  pointer-events: auto;
}

.carousel-image.prev {
  opacity: 0.4;
  z-index: 1;
  transform: translateX(-40%) scale(0.8);
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.5)) brightness(0.3);
}

.carousel-image.next {
  opacity: 0.4;
  z-index: 1;
  transform: translateX(40%) scale(0.8);
  filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.5)) brightness(0.3);
}

.carousel-gradient-overlay {
  position: absolute;
  top: 0;
  left: 20%;
  right: -150%;
  height: 100%;
  background: linear-gradient(to right,
    rgba(10, 10, 10, 0) 0%,
    rgba(10, 10, 10, 0.8) 40%,
    #0a0a0a 80%,
    #0a0a0a 100%
  );
  z-index: 4;
  pointer-events: none;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn.left { left: 0; }
.carousel-btn.right { right: 0; }

.project-info {
  position: relative;
  z-index: 5;
  height: 100%;
  overflow-y: auto;
  padding-right: 1.5rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
}

/* --- CUSTOM SCROLLBAR UNTUK TAMPILAN PREMIUM --- */
.project-info::-webkit-scrollbar {
  width: 6px;
}

.project-info::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
}

.project-info::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #ac58e9, #c384fa);
  border-radius: 10px;
}

.project-info::-webkit-scrollbar-thumb:hover {
  background: #c384fa;
}

.project-info h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 0;
  color: white;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.5rem 0;
  padding: 0;
  list-style: none;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: #ffffff;
  text-align: left;
  line-height: 1.4;
}

.feature-list svg {
  width: 24px;
  height: 24px;
  color: #ac58e9;
  flex-shrink: 0;
}

.project-demo-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #ac58e9;
  color: white;
  text-decoration: none;
  border-radius: 9999px;
  padding: 1rem 1.6rem;
  font-weight: 700;
  width: fit-content;
}

@media (max-width: 768px) {
  .project-modal-overlay {
    padding: 1rem;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .project-modal-window {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: auto;
    max-height: 90vh;
    padding: 3rem 1.5rem;
  }

  .modal-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: auto;
  }

  .project-info {
    height: auto;
    overflow-y: visible;
    padding-right: 0;
    padding-bottom: 2rem;
  }

  .project-gallery {
    min-height: 250px;
  }
}
</style>
