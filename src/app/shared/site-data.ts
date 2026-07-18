export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  category: string;
  beforePhoto: string;
  afterPhoto: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface ReviewItem {
  name: string;
  initials: string;
  quote: string;
}

export const SERVICES: ServiceItem[] = [
  {
    title: 'Construction Builds',
    description:
      'Full dry-in and complete turn-key builds — from foundation to finish — built to last in Central Kentucky.',
    icon: '🏗️',
  },
  {
    title: 'Excavation Work',
    description:
      'Site prep, grading, and excavation for driveways, foundations, and outdoor projects done right the first time.',
    icon: '🚜',
  },
  {
    title: 'Remodeling',
    description:
      'Interior and exterior remodeling plus hardscaping to refresh and expand the spaces you already love.',
    icon: '🔨',
  },
  {
    title: 'Demolition',
    description:
      'Safe, efficient demolition and clean-up so your next project can start on a clear, ready site.',
    icon: '🧱',
  },
  {
    title: 'Installations',
    description:
      'Professional installations for a wide range of residential and light commercial needs.',
    icon: '⚙️',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Interior Renovation',
    category: 'Remodeling',
    beforePhoto: '/interior1.jpg',
    afterPhoto: '/interior2.jpg',
    beforeAlt: 'Interior room before renovation',
    afterAlt: 'Interior room after renovation by Rigid Contracting',
  },
  {
    title: 'Driveway Installation',
    category: 'Excavation',
    beforePhoto: '/driveway1.jpg',
    afterPhoto: '/driveway2.jpg',
    beforeAlt: 'Driveway area before installation',
    afterAlt: 'Completed driveway installation by Rigid Contracting',
  },
  {
    title: 'External Repair After Equipment Replacement',
    category: 'Repair',
    beforePhoto: '/electric1.jpg',
    afterPhoto: '/electric2.jpg',
    beforeAlt: 'Exterior wall before equipment replacement repair',
    afterAlt: 'Exterior wall after repair by Rigid Contracting',
  },
  {
    title: 'Garage Construction',
    category: 'Construction',
    beforePhoto: '/barn1.jpg',
    afterPhoto: '/barn2.jpg',
    beforeAlt: 'Garage site before construction',
    afterAlt: 'Completed garage construction by Rigid Contracting',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    name: 'Tanna Combs Crouch',
    initials: 'TC',
    quote: 'We love everything you all have done and highly recommend this company.',
  },
  {
    name: 'Michael H.',
    initials: 'MH',
    quote:
      'Professional from start to finish. They showed up on time, kept us informed, and the quality of work exceeded our expectations.',
  },
  {
    name: 'Sarah W.',
    initials: 'SW',
    quote:
      'Rigid Contracting remodeled our kitchen and the results look fantastic. Fair pricing and great communication throughout.',
  },
  {
    name: 'Robert D.',
    initials: 'RD',
    quote:
      'Our new driveway and grading work made a huge difference. Local, reliable, and built to last — just like they say.',
  },
];

export const OWNERS = [
  {
    name: 'Austin Richards',
    role: 'Co-Owner',
    phone: '(606) 484-0606',
    phoneHref: 'tel:+16064840606',
    email: 'austin.richards@rigidcontractingky.com',
  },
  {
    name: 'Justice Reed',
    role: 'Co-Owner',
    phone: '(859) 595-8172',
    phoneHref: 'tel:+18595958172',
    email: 'justice.reed@rigidcontractingky.com',
  },
] as const;

export const BUSINESS = {
  name: 'Rigid Contracting',
  addressLine1: '6224 US HWY 460 W.',
  city: 'Frenchburg',
  state: 'KY',
  zip: '40322',
  serviceArea: 'Menifee, Montgomery, Bath, Rowan, Clark and surrounding counties',
  facebook: 'https://www.facebook.com/p/Rigid-Contracting-61576563761197/',
  tagline: 'Built for today. Built to last.',
} as const;
