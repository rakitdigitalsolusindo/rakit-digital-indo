import { NavLink } from './navbar';

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  en: {
    brandName: string;
    description: string;
    logo: string;
    linkGroups: FooterLinkGroup[];
    copyright: string;
  };
  id: {
    brandName: string;
    description: string;
    logo: string;
    linkGroups: FooterLinkGroup[];
    copyright: string;
  };
}

export const footerData: FooterData = {
  en: {
    brandName: 'Rakit Digital Solusindo',
    description: 'Turning Ideas Into Masterpieces. We are a creative digital agency committed to delivering exceptional results.',
    logo: '/logo.svg',
    linkGroups: [
      {
        title: 'Services',
        links: [
          { label: 'UI/UX Design', href: '#' },
          { label: 'Web Development', href: '#' },
          { label: 'Branding', href: '#' },
          { label: 'Digital Marketing', href: '#' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About Us', href: '#' },
          { label: 'Our Work', href: '#' },
          { label: 'Careers', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      }
    ],
    copyright: 'All rights reserved.'
  },
  id: {
    brandName: 'Rakit Digital Solusindo',
    description: 'Mengubah Ide Menjadi Karya. Kami adalah agensi digital kreatif yang berkomitmen untuk memberikan hasil luar biasa.',
    logo: '/logo.svg',
    linkGroups: [
      {
        title: 'Layanan',
        links: [
          { label: 'Desain UI/UX', href: '#' },
          { label: 'Pengembangan Web', href: '#' },
          { label: 'Branding', href: '#' },
          { label: 'Pemasaran Digital', href: '#' }
        ]
      },
      {
        title: 'Perusahaan',
        links: [
          { label: 'Tentang Kami', href: '#' },
          { label: 'Portofolio', href: '#' },
          { label: 'Karir', href: '#' },
          { label: 'Kontak', href: '#' }
        ]
      }
    ],
    copyright: 'Hak Cipta Dilindungi.'
  }
};
