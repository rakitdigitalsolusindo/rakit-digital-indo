export interface ServiceItem {
  icon: string;
  title: string;
}

export interface ServicesData {
  title: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: ServicesData = {
  title: 'Our Services',
  description: 'Comprehensive digital solutions tailored to elevate your brand and drive results.',
  items: [
    { icon: '✨', title: 'UI/UX Design' },
    { icon: '💻', title: 'Web Development' },
    { icon: '📱', title: 'Mobile Apps' },
    { icon: '🎨', title: 'Branding' },
    { icon: '💼', title: 'IT Consultant' },
    { icon: '🚀', title: 'Digital Marketing' }
  ]
};
