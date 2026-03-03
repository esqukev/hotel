// =============================================================================
// Arenal Vista Mountain Hotel - Configuration
// =============================================================================
// Mountain Hotel in La Fortuna, Costa Rica
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Arenal Vista Mountain Hotel | La Fortuna Costa Rica",
  description: "Experience luxury mountain hospitality with breathtaking views of Arenal Volcano. Boutique rooms, adventure tours, and pure Costa Rican paradise.",
  language: "en",
  keywords: "mountain hotel, La Fortuna, Costa Rica, Arenal Volcano, boutique hotel, eco lodge, adventure tours",
  ogImage: "/images/og-image.jpg",
  canonical: "https://arenalvista.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Arenal Vista",
  brandSubname: "Mountain Hotel",
  tagline: "La Fortuna, Costa Rica",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { name: "Rooms", href: "#rooms", icon: "Wine" },
    { name: "Experiences", href: "#experiences", icon: "Users" },
    { name: "Adventures", href: "#adventures", icon: "Newspaper" },
    { name: "Our Story", href: "#story", icon: "BookOpen" },
    { name: "Contact", href: "#contact", icon: "Mail" },
  ],
  ctaButtonText: "Book Your Stay",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "Arenal Vista",
  brandSubname: "Mountain Hotel",
  yearText: "Est. 2005",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Welcome to Paradise",
  mainTitle: "Where the Jungle\nMeets the Sky",
  ctaButtonText: "Explore Rooms",
  ctaTarget: "#rooms",
  stats: [
    { value: 25, suffix: "+", label: "Luxury Rooms" },
    { value: 100, suffix: "%", label: "Volcano Views" },
    { value: 50, suffix: "+", label: "Adventure Tours" },
  ],
  decorativeText: "PURA VIDA",
  backgroundImage: "/images/hero-volcano.jpg",
};

// -----------------------------------------------------------------------------
// Room Showcase Config (adapted from Wine Showcase)
// -----------------------------------------------------------------------------
export interface Wine {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface WineFeature {
  icon: string;
  title: string;
  description: string;
}

export interface WineQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface WineShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Wine[];
  features: WineFeature[];
  quote: WineQuote;
}

export const wineShowcaseConfig: WineShowcaseConfig = {
  scriptText: "Our Accommodations",
  subtitle: "LUXURY IN THE CLOUDS",
  mainTitle: "Rooms & Suites",
  wines: [
    {
      id: "volcano-suite",
      name: "Volcano Suite",
      subtitle: "Panoramic Views",
      year: "Premium",
      image: "/images/room-volcano.jpg",
      filter: "",
      glowColor: "bg-emerald-600/20",
      description: "Our signature suite offers uninterrupted views of Arenal Volcano from your private balcony. Wake up to misty mornings and fall asleep to the sounds of the rainforest.",
      tastingNotes: "King bed, Jacuzzi tub, private terrace",
      alcohol: "65 m²",
      temperature: "2 guests",
      aging: "Ocean & Volcano",
    },
    {
      id: "jungle-bungalow",
      name: "Jungle Bungalow",
      subtitle: "Immersed in Nature",
      year: "Popular",
      image: "/images/room-jungle.jpg",
      filter: "brightness(0.95) saturate(1.1)",
      glowColor: "bg-amber-600/20",
      description: "Surrounded by lush tropical gardens, this standalone bungalow offers the ultimate privacy and connection with nature while maintaining modern luxury comforts.",
      tastingNotes: "Queen bed, outdoor shower, garden patio",
      alcohol: "45 m²",
      temperature: "2 guests",
      aging: "Garden View",
    },
    {
      id: "family-villa",
      name: "Family Villa",
      subtitle: "Space for Everyone",
      year: "Spacious",
      image: "/images/room-family.jpg",
      filter: "brightness(1.05) saturate(0.95)",
      glowColor: "bg-blue-600/20",
      description: "Perfect for families or groups, this two-bedroom villa features a full kitchen, living area, and enough space for everyone to relax after a day of adventure.",
      tastingNotes: "2 bedrooms, kitchen, living room",
      alcohol: "95 m²",
      temperature: "6 guests",
      aging: "Valley View",
    },
  ],
  features: [
    {
      icon: "Wine",
      title: "Organic Toiletries",
      description: "Locally sourced, eco-friendly bath products",
    },
    {
      icon: "Thermometer",
      title: "Climate Control",
      description: "Individual AC and ceiling fans in every room",
    },
    {
      icon: "Clock",
      title: "24/7 Service",
      description: "Round-the-clock concierge and room service",
    },
    {
      icon: "Sparkles",
      title: "Daily Housekeeping",
      description: "Impeccable service with attention to detail",
    },
  ],
  quote: {
    text: "Waking up to the sight of Arenal Volcano from our bed was a dream come true. Pure magic.",
    attribution: "Sarah & Michael, California",
    prefix: "Guest Experience",
  },
};

// -----------------------------------------------------------------------------
// Experience Carousel Config (adapted from Winery Carousel)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
}

export interface WineryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const wineryCarouselConfig: WineryCarouselConfig = {
  scriptText: "Resort Amenities",
  subtitle: "RELAX & REJUVENATE",
  mainTitle: "Hotel Experiences",
  locationTag: "La Fortuna, Costa Rica",
  slides: [
    {
      image: "/images/pool-infinity.jpg",
      title: "Infinity Pool",
      subtitle: "Swim with a View",
      area: "25",
      unit: "meters",
      description: "Our stunning infinity pool appears to merge with the horizon, offering breathtaking volcano views while you swim or lounge with a tropical cocktail.",
    },
    {
      image: "/images/spa-wellness.jpg",
      title: "Jungle Spa",
      subtitle: "Natural Healing",
      area: "8",
      unit: "treatment rooms",
      description: "Indulge in volcanic mud treatments, Costa Rican coffee scrubs, and traditional massages using local botanicals in our open-air spa pavilion.",
    },
    {
      image: "/images/restaurant-view.jpg",
      title: "El Cráter Restaurant",
      subtitle: "Farm-to-Table Dining",
      area: "180°",
      unit: "panorama",
      description: "Savor authentic Costa Rican cuisine crafted from locally sourced ingredients while enjoying panoramic views of the volcano and surrounding rainforest.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Adventures Config (adapted from Museum)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface MuseumTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface MuseumTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: MuseumTabContent;
}

export interface MuseumQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface MuseumConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: MuseumTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: MuseumQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const museumConfig: MuseumConfig = {
  scriptText: "Adventure Awaits",
  subtitle: "EXPLORE LA FORTUNA",
  mainTitle: "Tours & Activities",
  introText: "From the mighty Arenal Volcano to pristine rainforest trails, La Fortuna offers endless adventures. Our concierge team will help you discover the best experiences.",
  timeline: [
    { year: "Morning", event: "Volcano Hike & Hot Springs" },
    { year: "Afternoon", event: "Zip-lining & Canopy Tours" },
    { year: "Evening", event: "Wildlife Night Walks" },
  ],
  tabs: [
    {
      id: "volcano",
      name: "Volcano Tours",
      icon: "History",
      image: "/images/adventure-volcano.jpg",
      content: {
        title: "Conquer the Volcano",
        description: "Guided hikes through Arenal Volcano National Park reveal ancient lava flows, diverse wildlife, and stunning viewpoints. Finish with a relaxing soak in natural hot springs.",
        highlight: "Includes: Guide, transport, hot springs entry",
      },
    },
    {
      id: "wildlife",
      name: "Wildlife",
      icon: "BookOpen",
      image: "/images/adventure-wildlife.jpg",
      content: {
        title: "Meet the Locals",
        description: "Spot sloths, howler monkeys, toucans, and poison dart frogs on guided nature walks. Our expert naturalists know exactly where to find Costa Rica's iconic wildlife.",
        highlight: "Best times: Early morning & dusk",
      },
    },
    {
      id: "adventure",
      name: "Thrill Seekers",
      icon: "Award",
      image: "/images/adventure-zip.jpg",
      content: {
        title: "Adrenaline Rush",
        description: "Zip-line through the canopy, rappel down waterfalls, or white-water raft on the Balsa River. Adventure seekers find their paradise in La Fortuna.",
        highlight: "All levels welcome - beginner to expert",
      },
    },
  ],
  openingHours: "Daily 6:00 AM - 8:00 PM",
  openingHoursLabel: "Tour Desk Hours",
  ctaButtonText: "Book an Adventure",
  yearBadge: "2005",
  yearBadgeLabel: "Founded",
  quote: {
    prefix: "Guest Review",
    text: "The volcano hike was the highlight of our trip. Our guide was knowledgeable and we saw so much wildlife!",
    attribution: "Emma Thompson, UK",
  },
  founderPhotoAlt: "Arenal Volcano at sunrise",
  founderPhoto: "/images/volcano-sunrise.jpg",
};

// -----------------------------------------------------------------------------
// News & Testimonials Config
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface NewsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const newsConfig: NewsConfig = {
  scriptText: "Latest Updates",
  subtitle: "NEWS & EVENTS",
  mainTitle: "From the Blog",
  viewAllText: "View All Posts",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/blog-sustainable.jpg",
      title: "Our Commitment to Sustainable Tourism",
      excerpt: "How Arenal Vista is protecting the rainforest while providing unforgettable experiences.",
      date: "March 1, 2026",
      category: "Sustainability",
    },
    {
      id: 2,
      image: "/images/blog-season.jpg",
      title: "Best Time to Visit La Fortuna",
      excerpt: "Discover the perfect season for your Costa Rican adventure based on weather and wildlife.",
      date: "February 15, 2026",
      category: "Travel Tips",
    },
    {
      id: 3,
      image: "/images/blog-recipe.jpg",
      title: "Recipe: Traditional Gallo Pinto",
      excerpt: "Learn to make Costa Rica's beloved breakfast dish with our chef's secret recipe.",
      date: "January 28, 2026",
      category: "Culinary",
    },
    {
      id: 4,
      image: "/images/blog-wildlife.jpg",
      title: "Sloth Spotting Guide",
      excerpt: "Tips from our naturalists on finding these gentle creatures in their natural habitat.",
      date: "January 10, 2026",
      category: "Wildlife",
    },
  ],
  testimonialsScriptText: "Guest Reviews",
  testimonialsSubtitle: "WHAT THEY SAY",
  testimonialsMainTitle: "Guest Experiences",
  testimonials: [
    {
      name: "Jennifer Martinez",
      role: "New York, USA",
      text: "Absolutely magical! The staff went above and beyond, and waking up to volcano views was unforgettable.",
      rating: 5,
    },
    {
      name: "Thomas Weber",
      role: "Berlin, Germany",
      text: "Perfect blend of luxury and nature. The adventure tours were incredible and the spa was heavenly.",
      rating: 5,
    },
    {
      name: "Maria Santos",
      role: "São Paulo, Brazil",
      text: "Our family had the best vacation ever. Kids loved the pool, we loved the restaurant. Will return!",
      rating: 5,
    },
  ],
  storyScriptText: "Our Heritage",
  storySubtitle: "THE STORY",
  storyTitle: "Two Decades of Pura Vida",
  storyParagraphs: [
    "Arenal Vista Mountain Hotel began as a family dream in 2005 - to create a place where travelers could experience the magic of Costa Rica without sacrificing comfort.",
    "Built on the principles of sustainable tourism and authentic hospitality, we've grown from a small bed and breakfast to a beloved destination for adventurers and nature lovers from around the world.",
    "Today, we continue to honor our roots while providing modern luxury amenities. Every guest becomes part of our extended family, and every stay supports local conservation efforts.",
  ],
  storyTimeline: [
    { value: "20+", label: "Years of Hospitality" },
    { value: "50K+", label: "Happy Guests" },
    { value: "100%", label: "Local Staff" },
  ],
  storyQuote: {
    prefix: "Our Philosophy",
    text: "Pura Vida is more than a greeting - it's a way of life. We invite you to slow down, breathe deep, and embrace the pure life.",
    attribution: "The Arenal Vista Family",
  },
  storyImage: "/images/hotel-aerial.jpg",
  storyImageCaption: "Arenal Vista nestled in the rainforest",
};

// -----------------------------------------------------------------------------
// Contact Form Config
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Get in Touch",
  subtitle: "PLAN YOUR ESCAPE",
  mainTitle: "Book Your Stay",
  introText: "Ready to experience the magic of Arenal Vista? Contact us to check availability, customize your adventure package, or ask any questions.",
  contactInfoTitle: "Contact Information",
  contactInfo: [
    {
      icon: "MapPin",
      label: "Address",
      value: "Road 142, La Fortuna",
      subtext: "Alajuela, Costa Rica",
    },
    {
      icon: "Phone",
      label: "Phone",
      value: "+506 2479 9000",
      subtext: "WhatsApp available",
    },
    {
      icon: "Mail",
      label: "Email",
      value: "hello@arenalvista.com",
      subtext: "We reply within 24 hours",
    },
    {
      icon: "Clock",
      label: "Hours",
      value: "Check-in: 3:00 PM",
      subtext: "Check-out: 11:00 AM",
    },
  ],
  form: {
    nameLabel: "Full Name",
    namePlaceholder: "Your name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone Number",
    phonePlaceholder: "+1 (555) 000-0000",
    visitDateLabel: "Check-in Date",
    visitorsLabel: "Number of Guests",
    visitorsOptions: ["1", "2", "3-4", "5-6", "7+"],
    messageLabel: "Special Requests",
    messagePlaceholder: "Tell us about any special occasions, room preferences, or tours you're interested in...",
    submitText: "Send Inquiry",
    submittingText: "Sending...",
    successMessage: "Thank you! We'll be in touch within 24 hours to confirm your reservation.",
    errorMessage: "Something went wrong. Please try again or email us directly.",
  },
  privacyNotice: "By submitting this form, you agree to our privacy policy. We never share your information.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Arenal Vista",
  tagline: "Mountain Hotel",
  description: "Experience luxury mountain hospitality with breathtaking views of Arenal Volcano. Your gateway to Costa Rican adventure.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "Facebook", label: "Facebook", href: "https://facebook.com" },
    { icon: "Twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "Youtube", label: "YouTube", href: "https://youtube.com" },
  ],
  linkGroups: [
    {
      title: "Explore",
      links: [
        { name: "Rooms & Suites", href: "#rooms" },
        { name: "Experiences", href: "#experiences" },
        { name: "Adventure Tours", href: "#adventures" },
        { name: "Restaurant", href: "#" },
      ],
    },
    {
      title: "Information",
      links: [
        { name: "About Us", href: "#story" },
        { name: "Sustainability", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ],
  contactItems: [
    { icon: "MapPin", text: "La Fortuna, Costa Rica" },
    { icon: "Phone", text: "+506 2479 9000" },
    { icon: "Mail", text: "hello@arenalvista.com" },
  ],
  newsletterLabel: "Subscribe for Special Offers",
  newsletterPlaceholder: "Your email address",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Welcome to the family! Check your inbox for a special offer.",
  newsletterErrorText: "Please enter a valid email address.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_NEWSLETTER_ID",
  copyrightText: "© 2026 Arenal Vista Mountain Hotel. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Service", "Cancellation Policy"],
  icpText: "CST Certified Sustainable Tourism",
  backToTopText: "Back to Top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};
