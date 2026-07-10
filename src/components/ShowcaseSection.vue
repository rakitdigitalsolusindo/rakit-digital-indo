<template>
  <section class="showcase-section">
    <transition name="fade" mode="out-in">
      <div :key="currentLang" class="showcase-header">
        <h2>{{ localized.title }}</h2>
        <p>{{ localized.description }}</p>
      </div>
    </transition>
    
    <transition name="fade" mode="out-in">
      <div :key="currentLang" class="carousel-wrapper">
      <!-- Navigation Prev -->
      <button class="nav-btn prev-btn" @click="prev" aria-label="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <div class="carousel-container" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <div 
          class="carousel-track" 
          :style="{ 
            transform: `translateX(-${currentIndex * (cardWidth + gap)}px)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }"
          @transitionend="handleTransitionEnd"
        >
          <div class="showcase-card" v-for="item in showcases" :key="item.uniqueKey">
            <div class="card-image">
              <img :src="getDriveDirectUrl(item.image)" :alt="item.title" loading="lazy" />
            </div>
            <div class="card-content">
              <span class="category">{{ item.category }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <a :href="item.link" class="view-link">View Project &rarr;</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Next -->
      <button class="nav-btn next-btn" @click="next" aria-label="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>
    </div>
    </transition>

    <!-- Dots (Navigation) -->
    <div class="carousel-dots">
      <button 
        v-for="index in itemsCount" 
        :key="index - 1"
        :class="['dot', { active: activeDot === (index - 1) }]"
        @click="goTo(index - 1)"
        aria-label="Go to slide"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { showcaseData } from '../data/showcase';
import { currentLang } from '../composables/useLanguage';
import { getDriveDirectUrl } from '../utils/gdrive';

const localized = computed(() => showcaseData[currentLang.value] ?? { title: '', description: '', items: [] });

const baseShowcases = () => localized.value.items || [];

const itemsCount = computed(() => baseShowcases().length);

// Triplicate the array for seamless infinite scrolling
const showcases = ref([]);

const currentIndex = ref(0); // will be set after initialization
const isTransitioning = ref(true);
const cardWidth = 320;
const gap = 32;

const activeDot = computed(() => {
  const n = itemsCount.value || 1;
  return ((currentIndex.value % n) + n) % n;
});

const handleTransitionEnd = () => {
  const n = itemsCount.value;
  // If we've scrolled into the third set, silently jump back to the middle set
  if (currentIndex.value >= n * 2) {
    isTransitioning.value = false;
    currentIndex.value -= n;
  } 
  // If we've scrolled into the first set, silently jump forward to the middle set
  else if (currentIndex.value <= n - 1) {
    isTransitioning.value = false;
    currentIndex.value += n;
  }
};

let autoplayInterval = null;

const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    next();
  }, 3000); 
};

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
};

const next = () => {
  isTransitioning.value = true;
  currentIndex.value++;
  startAutoplay();
};

const prev = () => {
  isTransitioning.value = true;
  currentIndex.value--;
  startAutoplay();
};

const goTo = (index) => {
  isTransitioning.value = true;
  // Jump to the specific item in the middle set
  currentIndex.value = itemsCount.value + index;
  startAutoplay();
};

const initShowcases = () => {
  const base = baseShowcases();
  const n = base.length;
  showcases.value = [
    ...base.map((s, i) => ({ ...s, uniqueKey: `set1-${i}` })),
    ...base.map((s, i) => ({ ...s, uniqueKey: `set2-${i}` })),
    ...base.map((s, i) => ({ ...s, uniqueKey: `set3-${i}` }))
  ];
  currentIndex.value = n; // start at the middle set
};

onMounted(() => {
  initShowcases();
  startAutoplay();
});

// Re-init when language changes
watch(currentLang, () => {
  initShowcases();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
.showcase-section {
  padding: 10px 0 120px;
  background-color: var(--bg-light);
  overflow: hidden;
}

.showcase-header {
  text-align: center;
  margin-bottom: 64px;
  padding: 0 24px;
}

.showcase-header h2 {
  font-size: 48px;
  font-weight: 800;
  color: #000000;
  margin-bottom: 16px;
}

.showcase-header p {
  font-size: 18px;
  color: var(--text-muted);
}

.carousel-wrapper {
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 40px; /* Space for arrows */
}

.carousel-container {
  width: 100%;
  overflow: hidden;
  padding: 20px 0; /* Space for shadow */
  /* Remove mask to prevent sudden clipping during jumps, or keep it if it looks good. */
  -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
}

.carousel-track {
  display: flex;
  gap: 32px;
  width: max-content;
  will-change: transform;
}

.showcase-card {
  width: 320px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  flex-shrink: 0;
  border: 1px solid rgba(0,0,0,0.02);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.showcase-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.showcase-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.category {
  font-size: 12px;
  font-weight: 800;
  color: var(--primary-accent);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  display: inline-block;
}

.card-content h3 {
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  margin-bottom: 12px;
}

.card-content p {
  color: var(--text-muted);
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.view-link {
  font-weight: 700;
  font-size: 14px;
  color: #000000;
  display: inline-flex;
  align-items: center;
  transition: color 0.3s ease;
}

.view-link:hover {
  color: var(--primary-accent);
}

/* Navigation Buttons */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #000000;
  transition: all 0.3s ease;
  z-index: 10;
}

.nav-btn:hover {
  background-color: var(--primary-accent);
  color: white;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

/* Dots */
.carousel-dots {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

.dot:hover {
  background-color: rgba(0,0,0,0.2);
}

.dot.active {
  background-color: var(--primary-accent);
  width: 32px;
  border-radius: 9999px;
}

@media (max-width: 768px) {
  .carousel-wrapper {
    padding: 0 16px;
  }
  .nav-btn {
    display: none;
  }
  .showcase-header h2 {
    font-size: 36px;
  }
}
</style>
