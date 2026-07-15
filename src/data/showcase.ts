export interface ShowcaseItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

export interface ShowcaseData {
  en: {
    title: string;
    description: string;
    items: ShowcaseItem[];
  };
  id: {
    title: string;
    description: string;
    items: ShowcaseItem[];
  };
}

export const showcaseData: ShowcaseData = {
  en: {
    title: 'Our Showcase',
    description: "A glimpse into the masterpieces we've created for our clients.",
    items: [
      {
        id: 1,
        image: '/showcase-image/desadigital.png',
        title: 'Desa Digital',
        category: 'UI/UX Design',
        description: 'A modern, intuitive dashboard for a leading financial technology company.',
        link: '#'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        title: 'E-Property',
        category: 'Web Development',
        description: 'High-performance e-commerce solution with seamless checkout experience.',
        link: '#'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
        title: 'LightDocs',
        category: 'Mobile Apps',
        description: 'Cross-platform mobile application for personal health monitoring.',
        link: '#'
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
        title: 'Masjid Digital',
        category: 'Branding',
        description: 'Complete brand identity redesign for a multinational corporation.',
        link: '#'
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
        title: 'PadeLIN',
        category: 'Web Development',
        description: 'Scalable cloud-based software solution for enterprise management.',
        link: '#'
      },
      {
       id: 6,
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
        title: 'ProyekKU',
        category: 'Web Development',
        description: 'Scalable cloud-based software solution for enterprise management.',
        link: '#' 
      }
    ]
  },
  id: {
    title: 'Portofolio Kami',
    description: 'Sekilas tentang karya-karya terbaik yang telah kami buat untuk klien kami.',
    items: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        title: 'Dashboard Fintech',
        category: 'Desain UI/UX',
        description: 'Dashboard modern dan intuitif untuk perusahaan teknologi finansial.',
        link: '#'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        title: 'Platform E-Commerce',
        category: 'Pengembangan Web',
        description: 'Solusi e-commerce berkinerja tinggi dengan pengalaman checkout mulus.',
        link: '#'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
        title: 'Aplikasi Pelacak Kesehatan',
        category: 'Aplikasi Mobile',
        description: 'Aplikasi mobile lintas platform untuk pemantauan kesehatan pribadi.',
        link: '#'
      },
      {
        id: 4,
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
        title: 'Rebranding Perusahaan',
        category: 'Branding',
        description: 'Redesain identitas merek lengkap untuk perusahaan multinasional.',
        link: '#'
      },
      {
        id: 5,
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
        title: 'Platform SaaS',
        category: 'Pengembangan Web',
        description: 'Solusi perangkat lunak berbasis cloud yang dapat diskalakan untuk manajemen perusahaan.',
        link: '#'
      }
    ]
  }
};
