export interface ContactContent {
  title: string;
  subtitle: string;
  email: string;
  buttonText: string;
  whatsappNumber: string;
  whatsappText: string;
  whatsappButtonText?: string;
}

export interface ContactData {
  en: ContactContent;
  id: ContactContent;
}

export const contactData: ContactData = {
  en: {
    title: "Let's Get in Touch",
    subtitle: "Have a project in mind or just want to say hi? We'd love to hear from you.",
    email: "rakitdigitalsolusindo@gmail.com",
    buttonText: "Send an Email",
    whatsappNumber: "62859106547253",
    whatsappText: "Hello Rakit Digital Solusindo, I would like to discuss a project.",
    whatsappButtonText: 'Chat via WhatsApp'
  },
  id: {
    title: 'Hubungi Kami',
    subtitle: 'Punya proyek atau ingin menyapa? Kami siap membantu.',
    email: 'rakitdigitalsolusindo@gmail.com',
    buttonText: 'Kirim Email',
    whatsappNumber: '62859106547253',
    whatsappText: 'Halo Rakit Digital Solusindo, saya ingin berdiskusi tentang proyek.',
    whatsappButtonText: 'Chat via WhatsApp'
  }
};
