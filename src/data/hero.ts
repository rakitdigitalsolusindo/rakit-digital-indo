export interface HeroContent {
  headline: string;
  subheadline: string;
  buttonText: string;
}

export interface HeroData {
  en: HeroContent;
  id: HeroContent;
  image: string;
}

export const heroData: HeroData = {
  en: {
    headline: 'Transform Your Digital Vision',
    subheadline: 'Rakit Digital Solusindo is your strategic partner in delivering innovative tech solutions, intuitive UI/UX design, and impactful digital strategies to scale your business.',
    buttonText: 'Discover More'
  },
  id: {
    headline: 'Wujudkan Visi Digital Anda',
    subheadline: 'Rakit Digital Solusindo adalah mitra strategis Anda dalam menghadirkan solusi teknologi inovatif, desain UI/UX yang intuitif, dan strategi digital yang berdampak untuk mengembangkan bisnis Anda.',
    buttonText: 'Kenali Kami'
  },
  image: '/hero-image.png'
};
