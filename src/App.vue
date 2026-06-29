<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <Navbar />
  <main>
    <HeroSection id="home" />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <ShowcaseSection id="work" />
    <ContactSection id="contact" />
  </main>
  <FooterSection />
</template>
