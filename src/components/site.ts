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
    title: 'Home Service',
    description: 'Layanan panggilan untuk inspeksi, emergency repair, maintenance berkala, dan konsultasi upgrade.',
    tag: 'On Call',
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
];
