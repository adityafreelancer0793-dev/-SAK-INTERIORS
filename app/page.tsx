'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MessageSquare, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Award, 
  Home, 
  Layout, 
  Briefcase, 
  Settings, 
  Sparkles,
  Search,
  Menu,
  X,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { cn } from '@/lib/utils';

// --- Types ---
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
}

interface Testimonial {
  name: string;
  review: string;
  stars: number;
  location: string;
}

interface Package {
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    title: 'Bedroom Interior Design',
    description: 'Personalized sanctuaries designed for ultimate comfort and elegance.',
    icon: <Home className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/bedroom1/800/600'
  },
  {
    title: 'Commercial Interior Design',
    description: 'Transforming workspaces into productive and inspiring environments.',
    icon: <Briefcase className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/office1/800/600'
  },
  {
    title: 'Complete Home Design',
    description: 'Unified and sophisticated interiors for your entire residence.',
    icon: <Layout className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/home1/800/600'
  },
  {
    title: 'Modular Kitchen Design',
    description: 'Efficient, modern, and aesthetically pleasing kitchen solutions.',
    icon: <Settings className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/kitchen1/800/600'
  },
  {
    title: 'Living Room Interiors',
    description: 'Central living spaces crafted for social elegance and relaxation.',
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/living1/800/600'
  },
  {
    title: 'False Ceiling & Lighting',
    description: 'Creative lighting and ceiling patterns to set the perfect mood.',
    icon: <Award className="w-6 h-6" />,
    image: 'https://picsum.photos/seed/ceiling1/800/600'
  }
];

const PROJECTS: Project[] = [
  { title: 'Modern Minimalist Villa', category: 'Residential', image: 'https://picsum.photos/seed/p1/600/800' },
  { title: 'Executive Tech Office', category: 'Commercial', image: 'https://picsum.photos/seed/p2/600/800' },
  { title: 'Contemporary Penthouse', category: 'Residential', image: 'https://picsum.photos/seed/p3/600/800' },
  { title: 'Chic Boutique Studio', category: 'Commercial', image: 'https://picsum.photos/seed/p4/600/800' },
];

const PACKAGES: Package[] = [
  {
    name: 'Basic Interior',
    price: 'Starting ₹3.5L',
    features: ['Essential Woodwork', 'Quality Lifts & Hinges', 'Standard False Ceiling', 'Basic Lighting Plan', '10-Year Warranty'],
  },
  {
    name: 'Premium Edition',
    price: 'Starting ₹6.5L',
    recommended: true,
    features: ['Custom Modular Kitchen', 'Premium Laminate Finishes', 'Design Designer False Ceiling', 'Full Electrical & Lighting', 'Wall Decor & Painting', '12-Year Warranty'],
  },
  {
    name: 'Luxury Absolute',
    price: 'Starting ₹12L+',
    features: ['Full Home Customization', 'High-Gloss Venner Finishes', 'Smart Home Integration', 'Imported Fixtures', 'Luxury Curtains & Rugs', 'Concierge Service Care'],
  },
];

const FAQS = [
  { q: 'What is the cost of complete home interiors?', a: 'The cost varies depending on the materials and scope. Typically, for a 2BHK, it starts from ₹4.5L.' },
  { q: 'Do you handle commercial office interiors?', a: 'Yes, we specialize in modern office designs that enhance productivity and brand identity.' },
  { q: 'How long does project completion take?', a: 'Standard residential projects take roughly 45-60 days from design approval to handover.' },
  { q: 'Is consultation free?', a: 'Yes, our initial expert consultation and design walkthrough are completely free.' },
];

// --- Components ---

const SectionTitle = ({ subtitle, title, centered = true }: { subtitle: string; title: string, centered?: boolean }) => (
  <div className={cn("mb-12", centered && "text-center")}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-brand-wood font-medium tracking-widest uppercase text-sm mb-3 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl font-serif text-brand-charcoal leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* --- Sticky CTAs --- */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/919032766612"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:09032766612"
          className="bg-brand-charcoal text-white p-4 rounded-full shadow-xl flex items-center justify-center"
        >
          <Phone className="w-6 h-6" />
        </motion.a>
      </div>

      {/* --- Navbar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tighter text-brand-charcoal">
            S A K <span className="font-sans text-brand-wood font-light ml-1">INTERIORS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Portfolio', 'Packages', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-brand-charcoal/80 hover:text-brand-wood transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-charcoal text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-brand-wood transition-colors">
              Book Consultation
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-xl glass text-brand-charcoal z-50 relative" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 md:hidden bg-white flex flex-col p-8 pt-28 h-screen"
            >
              <div className="flex flex-col gap-6">
                {['Services', 'Portfolio', 'Packages', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-serif text-brand-charcoal hover:text-brand-wood transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <div className="mt-auto space-y-8">
                <button className="w-full bg-brand-wood text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm">
                  Book Consultation
                </button>
                <div className="flex gap-6 justify-center border-t border-brand-charcoal/5 pt-8">
                  {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-charcoal" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Interior" 
            fill 
            className="object-cover brightness-[0.7]"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-brand-beige/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-white py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-wood/30 backdrop-blur-md border border-white/20 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-6">
              12 Years of Crafting Excellence
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6 md:mb-8">
              Designing Spaces <br />
              <span className="italic font-light">That Inspire Living</span>
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed font-sans max-w-2xl">
              From contemporary villas to visionary commercial hubs, we bring Hyderabad&apos;s most sophisticated interior dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-wood text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-brand-wood/90 transition-all flex items-center justify-center gap-2">
                Get Free Consultation <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full text-base md:text-lg font-medium hover:bg-white/20 transition-all">
                View Our Portfolio
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-[1px] h-12 bg-linear-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* --- Stats / Trust Bar --- */}
      <section className="bg-brand-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Successful Projects', value: '850+' },
            { label: 'Years Experience', value: '12' },
            { label: 'Google Rating', value: '4.8★' },
            { label: 'Client Reviews', value: '291+' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-4xl font-serif text-brand-wood mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- About Section --- */}
      <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="https://picsum.photos/seed/about-int/1000/1200" 
                alt="Craftsmanship" 
                fill 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-wood text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-[280px]">
              <p className="font-serif italic text-xl mb-2">&quot;Design is not just what it looks like, it&apos;s how it feels.&quot;</p>
              <p className="text-sm font-medium opacity-80">— S A K Founder</p>
            </div>
          </motion.div>
          
          <div>
            <SectionTitle 
              centered={false} 
              subtitle="The S A K Legacy" 
              title="A Decade of Transforming Hyderabad's Lifestyles" 
            />
            <p className="text-lg text-brand-charcoal/70 mb-8 leading-relaxed">
              For over 12 years, S A K INTERIORS has been at the forefront of luxury design in Miyapur, Gachibowli, and beyond. We believe that every space has a soul, and our mission is to bring it to light through expert craftsmanship and personalized execution.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Expert craftsmanship with premium finishes',
                'Transparent pricing with zero hidden costs',
                'On-time delivery within 60 days',
                'Personalized design consultation'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-brand-wood/10 text-brand-wood">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-brand-charcoal font-medium">{item}</span>
                </div>
              ))}
            </div>
            <button className="group text-brand-wood font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm border-b-2 border-brand-wood pb-1">
              Read Our Full Story <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-16 md:py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            subtitle="Our Specializations" 
            title="Comprehensive Design Solutions" 
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-brand-charcoal/5"
              >
                <div className="relative h-64">
                  <Image src={service.image} alt={service.title} fill className="object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl text-brand-wood shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3 text-brand-charcoal">{service.title}</h3>
                  <p className="text-brand-charcoal/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="text-brand-wood font-semibold text-sm flex items-center gap-1 group">
                    Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-16 md:py-24 bg-brand-charcoal text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-wood/10 rounded-full blur-3xl opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <SectionTitle 
                centered={false} 
                subtitle="Why Choose Us" 
                title="The Gold Standard of Interior Excellence" 
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {[
                  { icon: <Award className="text-brand-wood"/>, t: '12 Years Exp', d: 'Proven track record of excellence.' },
                  { icon: <Star className="text-brand-wood"/>, t: '4.8 Rating', d: 'Over 291 verified client reviews.' },
                  { icon: <Clock className="text-brand-wood"/>, t: 'On-Time', d: 'Strict commitment to deadlines.' },
                  { icon: <CheckCircle2 className="text-brand-wood"/>, t: 'Premium Materials', d: 'Only the finest quality brands.' },
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-xl">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-xl">{item.t}</h4>
                    <p className="text-white/60 text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative pt-12">
              <div className="bg-brand-wood rounded-[40px] p-10 md:p-16 rotate-3 relative z-10">
                <div className="-rotate-3 space-y-6">
                  <div className="text-4xl font-serif italic mb-4">&quot;Exactly the luxury home we dreamed of. S A K made it effortless.&quot;</div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20" />
                    <div>
                      <div className="font-bold">Rahul & Sneha</div>
                      <div className="text-white/60 text-sm">Gachibowli Residents</div>
                    </div>
                  </div>
                  <div className="flex text-brand-gold py-4 border-t border-white/10">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 rounded-[40px] -rotate-3 -translate-y-4" />
            </div>
          </div>
        </div>
      </section>

      {/* --- Portfolio Section --- */}
      <section id="portfolio" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionTitle 
              centered={false} 
              subtitle="Our Work" 
              title="Recent Masterpieces" 
            />
            <div className="flex gap-2 md:gap-4 mb-4 md:mb-6 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
              {['All', 'Residential', 'Commercial'].map((filter) => (
                <button 
                  key={filter}
                  className={cn(
                    "px-4 md:px-6 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap",
                    filter === 'All' ? "bg-brand-charcoal text-white font-bold" : "border-brand-charcoal/10 hover:border-brand-charcoal"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative aspect-3/4 rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image src={project.image} alt={project.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-x-4 bottom-4 p-6 bg-white/90 backdrop-blur-md rounded-2xl translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100 duration-300">
                  <div className="text-xs text-brand-wood font-medium mb-1 uppercase tracking-widest">{project.category}</div>
                  <div className="text-lg font-serif text-brand-charcoal">{project.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-brand-charcoal text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand-wood transition-colors">
              Explore All Projects
            </button>
          </div>
        </div>
      </section>

      {/* --- Packages Section --- */}
      <section id="packages" className="py-16 md:py-24 bg-brand-beige">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            subtitle="Transparent Pricing" 
            title="Curated Design Packages" 
          />
          
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {PACKAGES.map((pkg, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-8 md:p-10 rounded-[32px] md:rounded-[40px] flex flex-col h-full transition-all duration-500",
                  pkg.recommended ? "bg-brand-charcoal text-white md:scale-105 shadow-2xl relative z-10" : "bg-white text-brand-charcoal shadow-sm hover:shadow-xl"
                )}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-wood text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                  <div className={cn("text-4xl font-bold", pkg.recommended ? "text-brand-wood" : "text-brand-charcoal")}>
                    {pkg.price}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-12 flex-grow">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium opacity-80">
                      <CheckCircle2 className="w-5 h-5 text-brand-wood flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
                
                <button className={cn(
                  "w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all",
                  pkg.recommended ? "bg-brand-wood text-white hover:bg-brand-wood/90" : "border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white"
                )}>
                  Request Full Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            subtitle="Our Methodology" 
            title="A Seamless Design Journey" 
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-brand-charcoal/10 -translate-y-1/2" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative">
              {[
                { n: '01', t: 'Free Consultation', d: 'Discuss your vision and needs with our expert designers.' },
                { n: '02', t: 'Design Planning', d: 'Visualize your space with detailed 2D & 3D renders.' },
                { n: '03', t: 'Material Selection', d: 'Handpick premium finishes at our curated showroom.' },
                { n: '04', t: 'Execution & Handover', d: 'Sit back as we bring your dream home to life.' },
              ].map((step, i) => (
                <div key={i} className="bg-brand-beige p-8 rounded-3xl relative z-10 lg:bg-transparent lg:p-0">
                  <div className="w-16 h-16 bg-brand-charcoal text-white rounded-2xl flex items-center justify-center text-2xl font-serif mb-6 lg:mx-auto relative z-20">
                    {step.n}
                  </div>
                  <div className="lg:text-center">
                    <h4 className="text-xl font-serif mb-3 text-brand-charcoal">{step.t}</h4>
                    <p className="text-brand-charcoal/60 text-sm leading-relaxed">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section --- */}
      <section className="py-16 md:py-24 bg-brand-beige">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle 
            subtitle="Common Doubts" 
            title="Frequently Asked Questions" 
          />
          
          <div className="space-y-3 md:space-y-4">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-brand-charcoal/5 transition-all"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left group gap-4"
                >
                  <span className="font-serif text-base md:text-lg text-brand-charcoal leading-tight">{faq.q}</span>
                  <div className={cn("p-1 rounded-full transition-transform", activeFaq === i ? "bg-brand-wood text-white rotate-45" : "bg-brand-charcoal/5 group-hover:bg-brand-wood group-hover:text-white translate-x-1")}>
                    <Plus className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-brand-charcoal/60 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Service Areas & Contact --- */}
      <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionTitle 
                centered={false} 
                subtitle="Get In Touch" 
                title="Let's Build Your Dream Space" 
              />
              
              <div className="space-y-6 md:space-y-8 mb-12">
                <div className="flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-wood/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-brand-wood" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Call for Consultation</h4>
                    <p className="text-base md:text-lg font-serif">090327 66612</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-charcoal/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-brand-charcoal" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Visit our Studio</h4>
                    <p className="text-sm md:text-base text-brand-charcoal/60 leading-relaxed">
                      Pragathi Residency, Plot no 161, Pragathi Enclave Rd, Janapriya Nagar, Miyapur, Hyderabad, Telangana 500049
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-wood/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-brand-wood" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1 text-sm md:text-base">Business Hours</h4>
                    <p className="text-sm md:text-base text-brand-charcoal/60">Mon - Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-widest text-[10px] mb-6 text-brand-charcoal/40">Serving Hyderabad Localities</h4>
                <div className="flex flex-wrap gap-2">
                  {['Miyapur', 'Gachibowli', 'Hitech City', 'Kondapur', 'Kukatpally', 'Madhapur', 'Manikonda'].map((area) => (
                    <span key={area} className="px-3 md:px-4 py-2 bg-brand-beige text-brand-charcoal text-[10px] md:text-xs font-semibold rounded-full border border-brand-charcoal/5">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass p-8 md:p-12 rounded-[32px] md:rounded-[40px] shadow-2xl relative">
              <form className="space-y-4 md:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-brand-charcoal/60">Full Name</label>
                    <input type="text" className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-wood outline-hidden transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wide text-brand-charcoal/60">Phone Number</label>
                    <input type="tel" className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-wood outline-hidden transition-all" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-brand-charcoal/60">Select Interest</label>
                  <select className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-wood outline-hidden transition-all appearance-none">
                    <option>Complete Home Interior</option>
                    <option>Kitchen Modular Design</option>
                    <option>Commercial Office</option>
                    <option>Bedroom Renovation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wide text-brand-charcoal/60">Message</label>
                  <textarea rows={4} className="w-full bg-brand-beige/50 border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-wood outline-hidden transition-all" placeholder="Tell us about your space..." />
                </div>
                <button className="w-full bg-brand-charcoal text-white py-5 rounded-full font-bold uppercase tracking-widest hover:bg-brand-wood transition-all shadow-xl">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-brand-charcoal text-white pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 space-y-8">
              <div className="text-3xl font-serif font-bold tracking-tighter">
                S A K <span className="font-sans text-brand-wood font-light ml-1">INTERIORS</span>
              </div>
              <p className="max-w-md text-white/50 leading-relaxed">
                Elevating living standards in Hyderabad for over 12 years. We combine global design trends with local craftsmanship to create timeless spaces.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-brand-wood transition-all">
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-wood">Quick Links</h4>
              <ul className="space-y-4">
                {['Home', 'Services', 'Portfolio', 'Packages', 'About', 'Contact'].map((item) => (
                  <li key={item}><a href="#" className="text-white/60 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-brand-wood">Newsletter</h4>
              <p className="text-sm text-white/50 mb-6">Join 2000+ homeowners receiving our monthly design tips.</p>
              <div className="relative">
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-brand-wood" placeholder="Your Email" />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-wood px-4 rounded-full">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-center text-white/40 text-sm">
            <p>© {new Date().getFullYear()} S A K INTERIORS. All Rights Reserved. Crafted with passion in Hyderabad.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
