export const NAV_LINKS = [
  { label: 'About', href: 'about' },
  { label: 'Classes', href: 'classes' },
  { label: 'Trainers', href: 'trainers' },
  { label: 'Pricing', href: 'pricing' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'Contact', href: 'contact' },
]

export const STATS = [
  { num: '12+', label: 'Years of Excellence' },
  { num: '4,200+', label: 'Members Transformed' },
  { num: '28', label: 'Elite Trainers' },
  { num: '3', label: 'Flagship Locations' },
]

export const CLASSES = [
  {
    icon: '⬡',
    title: 'Power & Strength',
    desc: 'Olympic lifting, compound programming, and progressive overload designed to build foundational power without compromise.',
    duration: '60 min',
    level: 'All Levels',
    featured: false,
  },
  {
    icon: '⬡',
    title: 'APEX Performance',
    desc: 'Our signature full-body conditioning protocol. Metabolic, athletic, and relentlessly effective. The APEX method, distilled.',
    duration: '75 min',
    level: 'Intermediate',
    featured: true,
  },
  {
    icon: '⬡',
    title: 'Mobility & Recovery',
    desc: 'Restorative sessions rooted in movement science. Precision stretching, breath work, and active recovery to sustain peak performance.',
    duration: '45 min',
    level: 'All Levels',
    featured: false,
  },
  {
    icon: '⬡',
    title: 'Combat Conditioning',
    desc: 'Boxing fundamentals, kickboxing technique and heavy bag circuits drawn from world-class fight preparation.',
    duration: '60 min',
    level: 'All Levels',
    featured: false,
  },
  {
    icon: '⬡',
    title: 'Mind & Body',
    desc: 'Yoga, Pilates, and breathwork in our serene studio. A counterpoint to intensity — equally essential to the APEX philosophy.',
    duration: '60 min',
    level: 'All Levels',
    featured: false,
  },
  {
    icon: '⬡',
    title: 'Sprint & Endurance',
    desc: 'Treadmill intervals, track programming, and aerobic threshold training calibrated by certified running coaches.',
    duration: '45 min',
    level: 'Intermediate',
    featured: false,
  },
]

export const TRAINERS = [
  {
    initials: 'JR',
    name: 'James Reeves',
    role: 'Head of Strength & Conditioning',
    bio: 'Former Olympic weightlifting coach with 15 years developing elite athletes. CSCS certified.',
    tags: ['Strength', 'Olympic Lifting', 'Rehab'],
  },
  {
    initials: 'SL',
    name: 'Sofia Laurent',
    role: 'Performance & Nutrition Specialist',
    bio: 'Competitive triathlete and registered nutritionist. Merges metabolic science with high-performance training.',
    tags: ['Endurance', 'Nutrition', 'HIIT'],
  },
  {
    initials: 'MK',
    name: 'Marcus Kane',
    role: 'Combat & Functional Movement',
    bio: 'British kickboxing champion. 12 years coaching athletes from beginners to professional fight camps.',
    tags: ['Boxing', 'Kickboxing', 'Mobility'],
  },
  {
    initials: 'NA',
    name: 'Nadia Ashworth',
    role: 'Mind-Body & Recovery Lead',
    bio: 'Certified physiotherapist and 200hr yoga teacher. Specialises in longevity-focused movement and breathwork.',
    tags: ['Yoga', 'Pilates', 'Recovery'],
  },
]

export const PLANS = [
  {
    tier: 'Essential',
    price: '89',
    tagline: 'For the self-directed athlete.',
    features: [
      'Unlimited floor access (all hours)',
      'Access to all group classes',
      'Locker & towel service',
      'APEX app & performance tracking',
      '1 guest pass per month',
    ],
    featured: false,
  },
  {
    tier: 'Performance',
    price: '149',
    tagline: 'For those who want to go further, faster.',
    features: [
      'Everything in Essential',
      '4× personal training sessions/mo',
      'Custom nutrition blueprint',
      'Monthly body composition analysis',
      'Priority class booking',
      'Spa & recovery suite access',
    ],
    featured: true,
    badge: 'Most Chosen',
  },
  {
    tier: 'Elite',
    price: '299',
    tagline: 'Total concierge performance.',
    features: [
      'Everything in Performance',
      'Unlimited 1-on-1 training',
      'Dedicated personal coach',
      'Full nutrition planning & check-ins',
      'Recovery & sleep protocol',
      'Private locker suite',
      'Quarterly performance reviews',
    ],
    featured: false,
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "APEX isn't a gym. It's an experience. The moment you walk in, the standard is palpable. My training has completely transformed in six months — in a way that nothing else managed in six years.",
    name: 'Charlotte E.',
    since: 'Member since 2022',
    initials: 'CE',
    large: false,
  },
  {
    quote:
      "I joined on the Elite plan and it is worth every penny. My coach James doesn't just train me — he understands my physiology, my schedule, my psychology. I've lost 18kg and feel genuinely athletic for the first time in my life.",
    name: 'Daniel M.',
    since: 'Elite Member since 2021',
    initials: 'DM',
    large: true,
  },
  {
    quote:
      "The recovery suite alone justifies the membership. After years of accumulating injuries, Nadia's mobility programme has given me back pain-free movement. Exceptional.",
    name: 'Priya H.',
    since: 'Member since 2023',
    initials: 'PH',
    large: false,
  },
  {
    quote:
      "The staff-to-member ratio means you're never just a number. Every session feels personalised even in a group class. The APEX method is genuinely unlike anything else.",
    name: 'Thomas W.',
    since: 'Performance Member',
    initials: 'TW',
    large: false,
  },
]

export const CONTACT_DETAILS = [
  {
    icon: '◎',
    label: 'Flagship Location',
    detail: '14 King\'s Road, Chelsea\nLondon SW3 4UD',
  },
  {
    icon: '◎',
    label: 'Opening Hours',
    detail: 'Mon–Fri: 5:30am – 11pm\nSat–Sun: 7am – 9pm',
  },
  {
    icon: '◎',
    label: 'Enquiries',
    detail: 'hello@apexfitness.co.uk\n+44 20 7946 0823',
  },
]

export const FOOTER_COLS = [
  {
    heading: 'Club',
    links: ['About APEX', 'Our Team', 'Classes', 'Membership'],
  },
  {
    heading: 'Support',
    links: ['Contact Us', 'FAQ', 'Privacy Policy', 'Terms of Use'],
  },
  {
    heading: 'Locations',
    links: ['Chelsea', 'Mayfair', 'Canary Wharf'],
  },
]
