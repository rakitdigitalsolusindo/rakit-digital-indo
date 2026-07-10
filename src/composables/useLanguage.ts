import { ref } from 'vue';

export const currentLang = ref('en');

export const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'en' ? 'id' : 'en';
};
