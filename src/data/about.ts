export interface AboutContent {
  title: string;
  description: string;
  imageLeft: string;
  badgeText: string;
  imageRight: string;
}

export interface AboutData {
  en: AboutContent;
  id: AboutContent;
}

export const aboutData: AboutData = {
  en: {
    title: 'Turning Ideas Into\\nMasterpieces',
    description: 'We may be a compact team, but our creativity knows no bounds. By staying agile and collaborating closely with our clients, we transform ideas into cutting-edge designs that leave a lasting impression.',
    imageLeft: '/team-working.png',
    badgeText: 'A CREATIVE DESIGN\\nAGENCY',
    imageRight: '/smiling-woman.png'
  },
  id: {
    title: 'Mengubah Ide Menjadi\\nKarya Terbaik',
    description: 'Kami adalah tim yang gesit dengan kreativitas tanpa batas. Dengan bekerja sama erat bersama klien, kami mengubah ide menjadi desain mutakhir yang memberikan kesan abadi.',
    imageLeft: '/team-working.png',
    badgeText: 'AGENSI DESAIN\\nKREATIF',
    imageRight: '/smiling-woman.png'
  }
};
