export interface ServiceItem {
  svgIcon: string;
  title: string;
  description?: string;
}

export interface ServicesData {
  en: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
  id: {
    title: string;
    description: string;
    items: ServiceItem[];
  };
}

export const servicesData: ServicesData = {
  en: {
    title: 'Our Services',
    description: 'Comprehensive digital solutions tailored to elevate your brand and drive results.',
    items: [
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>', title: 'UI/UX Design', description: 'User-centered interface and experience design.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6h.01"/></svg>', title: 'Web Development', description: 'Robust, performant websites and web apps.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M12 18h.01"></path></svg>', title: 'Mobile Apps', description: 'Cross-platform mobile applications.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a7 7 0 1 0-14.8 0"></path></svg>', title: 'Branding', description: 'Brand identity and positioning.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M7 8h10"></path><path d="M7 12h6"></path><path d="M7 16h4"></path></svg>', title: 'IT Consulting', description: 'Strategic IT advisory and implementation.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18"></path><path d="M3 17l5-4 4 3 6-8 3 2"></path></svg>', title: 'Digital Marketing', description: 'Performance-driven digital marketing.' }
    ]
  },
  id: {
    title: 'Layanan Kami',
    description: 'Solusi digital menyeluruh yang dirancang untuk meningkatkan merek dan hasil bisnis Anda.',
    items: [
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>', title: 'Desain UI/UX', description: 'Desain antarmuka dan pengalaman pengguna berfokus pada pengguna.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6"/><path d="M8 6h.01"/></svg>', title: 'Pengembangan Web', description: 'Situs web dan aplikasi web yang tangguh dan berkinerja tinggi.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"></rect><path d="M12 18h.01"></path></svg>', title: 'Aplikasi Mobile', description: 'Aplikasi mobile lintas platform.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a7 7 0 1 0-14.8 0"></path></svg>', title: 'Branding', description: 'Identitas dan penempatan merek.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><path d="M7 8h10"></path><path d="M7 12h6"></path><path d="M7 16h4"></path></svg>', title: 'Konsultasi TI', description: 'Konsultasi dan implementasi TI strategis.' },
      { svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18"></path><path d="M3 17l5-4 4 3 6-8 3 2"></path></svg>', title: 'Pemasaran Digital', description: 'Pemasaran digital berorientasi kinerja.' }
    ]
  }
};
