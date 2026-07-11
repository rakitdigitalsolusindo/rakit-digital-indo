<template>
  <section class="contact-section">
    <div class="contact-container">
      <transition name="fade" mode="out-in">
        <div :key="currentLang" class="contact-content">
          <h2>{{ contactData[currentLang].title }}</h2>
          <p>{{ contactData[currentLang].subtitle }}</p>
          <div class="contact-buttons-container">
            <a :href="'mailto:' + contactData[currentLang].email" class="btn-email">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="email-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>{{ contactData[currentLang].buttonText }}</span>
            </a>
            <a
              :href="`https://wa.me/${contactData[currentLang].whatsappNumber}?text=${encodeURIComponent(contactData[currentLang].whatsappText)}`"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="whatsapp-icon" aria-hidden="true">
                <path d="M17.5 2.5A10.9 10.9 0 0 0 3.6 13.4c0 1.9.5 3.7 1.4 5.3L2 22l3.5-1.1a10.8 10.8 0 0 0 5.1 1.3h.1a10.9 10.9 0 0 0 6.8-18.7Zm-6.8 16.7h-.1a9 9 0 0 1-4.6-1.2l-.3-.2-2.1.7.7-2-.2-.3a9 9 0 1 1 6.6 3.1Zm5.1-6.7c-.3-.1-1.7-.8-1.9-1-.2-.1-.3-.2-.5.1s-.6.9-.7 1.1-.2.2-.4.1a7.4 7.4 0 0 1-2.2-1.3 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.5l.4-.4c.1-.1.2-.2.3-.3a.5.5 0 0 0 0-.4l-.3-.8a.8.8 0 0 0-.2-.3c-.1-.1-.2-.1-.4-.1h-.4c-.1 0-.3.1-.4.2-.2.2-.7.7-.7 1.7s.7 2 .8 2.2c.1.2 1.4 2.3 3.4 3.2.5.2.8.3 1.1.4.5.2.9.2 1.2.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1-.1-.2-.3-.2-.5-.2Z"/>
              </svg>
              <span>{{ contactData[currentLang].whatsappButtonText }}</span>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { contactData } from '../data/contact';
import { currentLang } from '../composables/useLanguage';
</script>

<style scoped>
.contact-section {
  background-color: transparent;
  color: var(--text-main);
  padding: 120px 0;
  text-align: center;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.contact-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 24px;
}

.contact-content h2 {
  font-size: 56px;
  font-weight: 800;
  margin-bottom: 24px;
  color: var(--text-main);
}

.contact-content p {
  font-size: 20px;
  color: var(--text-muted);
  margin-bottom: 48px;
  line-height: 1.6;
}

.contact-buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.btn-email,
.btn-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  padding: 16px 36px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  width: 100%;
  max-width: 320px;
  min-width: 240px;
}

.btn-email {
  background-color: var(--primary-accent);
  box-shadow: 0 10px 20px rgba(172, 88, 233, 0.25);
}

.btn-whatsapp {
  background-color: #25D366;
  box-shadow: 0 10px 20px rgba(37, 211, 102, 0.2);
}

.btn-email:hover,
.btn-whatsapp:hover {
  transform: translateY(-4px);
}

.btn-email:hover {
  box-shadow: 0 14px 28px rgba(172, 88, 233, 0.4);
}

.btn-whatsapp:hover {
  background-color: #128C7E;
  box-shadow: 0 14px 28px rgba(18, 140, 126, 0.3);
}

.email-icon,
.whatsapp-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .contact-content h2 {
    font-size: 40px;
  }
  
  .btn-email,
  .btn-whatsapp {
    font-size: 18px;
    padding: 14px 28px;
    min-width: 0;
  }
  
  .contact-section {
    padding: 80px 0;
  }
}
</style>
