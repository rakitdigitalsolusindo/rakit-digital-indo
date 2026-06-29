<template>
  <section class="contact-section">
    <div class="contact-container">
      <div class="contact-content">
        <h2>{{ contactData.title }}</h2>
        <p>{{ contactData.subtitle }}</p>
        <a :href="'mailto:' + contactData.email" class="btn-email">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="email-icon">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span>{{ contactData.email }}</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { contactData } from '../data/contact';
</script>

<style scoped>
.contact-section {
  background-color: #ffffff;
  color: var(--text-dark);
  padding: 120px 0;
  text-align: center;
  position: relative;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
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
  color: #000000;
}

.contact-content p {
  font-size: 20px;
  color: var(--text-muted);
  margin-bottom: 48px;
  line-height: 1.6;
}

.btn-email {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: var(--primary-accent);
  text-decoration: none;
  padding: 16px 36px;
  border-radius: 9999px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(172, 88, 233, 0.25);
}

.btn-email:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(172, 88, 233, 0.4);
}

.email-icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .contact-content h2 {
    font-size: 40px;
  }
  
  .btn-email {
    font-size: 18px;
    padding: 14px 28px;
  }
  
  .contact-section {
    padding: 80px 0;
  }
}
</style>
