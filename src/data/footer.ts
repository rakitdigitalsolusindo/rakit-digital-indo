import { NavLink } from './navbar';

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}

export interface FooterData {
  brandName: string;
  description: string;
  logo: string;
  linkGroups: FooterLinkGroup[];
}

export const footerData: FooterData = {
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
  ]
};
