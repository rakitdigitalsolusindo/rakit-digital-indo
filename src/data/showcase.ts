export interface ShowcaseItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  link: string;
}

export interface ShowcaseData {
  title: string;
  description: string;
  items: ShowcaseItem[];
}

export const showcaseData: ShowcaseData = {
  title: 'Our Showcase',
  description: "A glimpse into the masterpieces we've created for our clients.",
  items: [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      title: 'Fintech Dashboard',
      category: 'UI/UX Design',
      description: 'A modern, intuitive dashboard for a leading financial technology company.',
      link: '#'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'High-performance e-commerce solution with seamless checkout experience.',
      link: '#'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
      title: 'Health Tracking App',
      category: 'Mobile Apps',
      description: 'Cross-platform mobile application for personal health monitoring.',
      link: '#'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      title: 'Corporate Rebranding',
      category: 'Branding',
      description: 'Complete brand identity redesign for a multinational corporation.',
      link: '#'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
      title: 'SaaS Platform',
      category: 'Web Development',
      description: 'Scalable cloud-based software solution for enterprise management.',
      link: '#'
    }
  ]
};
