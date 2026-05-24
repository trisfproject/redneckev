export const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const withBase = (path = '') => {
  const cleanPath = path.replace(/^\/+/, '');
  return `${basePath}${cleanPath}`;
};

export const whatsappNumber = '6281234567890';
export const whatsappText = 'Halo Redneck EV, saya mau konsultasi service EV.';
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

export const navItems = [
  { label: 'Home', href: withBase('') },
  { label: 'Services', href: withBase('services/') },
  { label: 'Garage', href: withBase('garage/') },
  { label: 'About', href: withBase('about/') },
  { label: 'Contact', href: withBase('contact/') },
];

export const services = [
  {
    title: 'Service Sepeda Listrik',
    description: 'Diagnosis kelistrikan, rem, dinamo hub, throttle, display, kabel harness, dan tune-up harian.',
    tag: 'E-Bike',
  },
  {
    title: 'Service Motor Listrik',
    description: 'Perbaikan sistem motor, controller, BMS, charger, sensor, kelistrikan, dan performa berkendara.',
    tag: 'E-Moto',
  },
  {
    title: 'Upgrade Battery Lithium',
    description: 'Paket lithium, balancing, proteksi BMS, peningkatan jarak tempuh, dan instalasi aman.',
    tag: 'Lithium',
  },
  {
    title: 'Controller Tuning',
    description: 'Kalibrasi akselerasi, limiter, regenerative setting, respons throttle, dan efisiensi daya.',
    tag: 'Tuning',
  },
  {
    title: 'EV Conversion',
    description: 'Konversi ringan untuk kendaraan custom, pemetaan komponen, wiring, battery box, dan commissioning.',
    tag: 'Build',
  },
  {
    title: 'Home Service',
    description: 'Layanan panggilan untuk inspeksi, emergency repair, maintenance berkala, dan konsultasi upgrade.',
    tag: 'On Call',
  },
];

export const garageImages = [
  {
    title: 'Lithium Battery Bench',
    src: 'https://images.unsplash.com/photo-1617704548623-340376564e68?auto=format&fit=crop&w=1200&q=80',
    alt: 'Industrial workbench with electronics tools and battery components',
  },
  {
    title: 'Electric Motorcycle Bay',
    src: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?auto=format&fit=crop&w=1200&q=80',
    alt: 'Motorcycle detail in a dark workshop',
  },
  {
    title: 'E-Bike Diagnostics',
    src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1200&q=80',
    alt: 'Electric bicycle in an urban garage setup',
  },
  {
    title: 'Tools And Wiring',
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    alt: 'Workshop tools and repair equipment',
  },
];
