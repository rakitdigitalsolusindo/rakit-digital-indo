export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarData {
  en: NavLink[];
  id: NavLink[];
}

export const navbarData: NavbarData = {
  en: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Showcase', href: '#work' }
  ],
  id: [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#work' }
  ]
};
