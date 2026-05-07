/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  Globe, 
  Layers, 
  MessageCircle, 
  Smartphone, 
  TrendingUp, 
  FileText,
  Mail,
  Send,
  Zap,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { useState, useRef } from "react";

const SERVICES = [
  {
    id: "brand",
    title: "BRAND BUILDING",
    description: "We create a strong brand identity, including logos and design elements, to help startups stand out and gain trust.",
    icon: <Layers className="w-6 h-6" />,
    color: "from-blue-500/20 to-blue-400/5"
  },
  {
    id: "digital",
    title: "DIGITAL MARKETING",
    description: "We develop effective online marketing strategies using channels like social media, email, and ads to reach potential customers.",
    icon: <Globe className="w-6 h-6" />,
    color: "from-yellow-500/20 to-yellow-400/5"
  },
  {
    id: "analytics",
    title: "MARKETING ANALYTICS",
    description: "We provide insights and reports on marketing performance to help startups make informed decisions.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "from-blue-500/20 to-blue-400/5"
  },
  {
    id: "finance",
    title: "FINANCIAL REPORT",
    description: "We take care of our partnership financial report. It's important for sustainable growth.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-yellow-500/20 to-yellow-400/5"
  }
];

const PRICING = [
  {
    title: "Digital Marketing",
    price: "1,300",
    features: [
      "Strategy & Planning",
      "Social Media Management",
      "Content Marketing",
      "Ad Campaign Setup",
      "Engagement Tracking"
    ],
    highlight: false
  },
  {
    title: "The Visionary (Both)",
    price: "2,500",
    features: [
      "Everything in Marketing",
      "Everything in Accounting",
      "Strategic Consultation",
      "Priority Support",
      "Interconnected Insights"
    ],
    highlight: true
  },
  {
    title: "Accounting",
    price: "1,400",
    features: [
      "Financial Reporting",
      "Daily Transaction Recording",
      "Financial Advice",
      "Tax Readiness",
      "Cash Flow Analysis"
    ],
    highlight: false
  }
];

const PARTNERS = [
  { name: "SYBO", logo: "SYBO" },
  { name: "Subway Surfers", logo: "Subway Surfers" },
  { name: "KFC", logo: "KFC" }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen iridescent-mesh overflow-x-hidden">
      {/* Background Atmosphere Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[-5%] w-[30%] h-[50%] bg-yellow-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-yellow-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
             <Zap className="text-black w-6 h-6 fill-current" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase tracking-widest">Ethernal</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
          <a href="#traction" className="hover:text-blue-400 transition-colors">Traction</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
        <button className="glass px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-colors">
          Start Project
        </button>
      </nav>

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[10px] uppercase font-bold tracking-[0.2em] text-blue-400 mb-8">
            Strategic Growth Partners
          </span>
          <h1 className="font-display text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            ELEVATING STARTUPS <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-yellow-400">
              WITH STRATEGY
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Your growth journey deserves a partner who understands both the art of the brand and the science of the balance sheet.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Explore Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="glass px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              Our Services
            </button>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500/50 to-transparent" />
        </motion.div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-32 px-4 bg-black/40 backdrop-blur-sm border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              A Catalyst For <br />
              <span className="text-blue-400 italic">Sustainable Growth</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
              <p>
                Ethernal Agency was founded over two years ago with a single mission: to help startups thrive in a competitive landscape. 
              </p>
              <p>
                By integrating professional digital marketing with meticulous accounting, we provide a holistic support system that has helped numerous startups evolve from ambitious ideas into thriving businesses.
              </p>
            </div>
            <div className="flex gap-12 pt-4">
              <div>
                <div className="text-4xl font-bold text-white mb-1">2+</div>
                <div className="text-xs uppercase tracking-widest text-blue-400 font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-xs uppercase tracking-widest text-yellow-400 font-bold">Startups Scaled</div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative"
            >
               {/* Founder image placeholder */}
               <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-t from-black via-transparent to-transparent text-center">
                  <div className="mt-auto">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-500 mb-2 block">Cofounder</span>
                    <h3 className="text-2xl font-bold uppercase tracking-wider">Strategic Excellence</h3>
                  </div>
               </div>
               <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-blue-400 mb-4 block">Our Expertise</span>
              <h2 className="font-display text-5xl md:text-6xl font-black uppercase leading-none tracking-tighter">
                Discover Our <br /> <span className="opacity-50">Services.</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-sm font-light">
              Tailored solutions designed to provide the financial foundation and marketing engine your startup needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.color} border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide uppercase">{service.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-blue-400 group-hover:gap-4 transition-all">
                  Learn More <ChevronRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction Section */}
      <section id="traction" className="py-32 px-4 bg-black relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="glass p-10 rounded-[3rem] border border-white/5">
                <div className="flex justify-between items-end h-64 gap-4">
                  {[40, 65, 45, 90, 75, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className={`w-full rounded-t-xl bg-gradient-to-t ${i % 2 === 0 ? 'from-blue-600 to-blue-400' : 'from-yellow-600 to-yellow-400'}`}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-8 px-2 opacity-50 font-mono text-[10px] uppercase">
                  <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span><span>Q5</span><span>Q6</span>
                </div>
             </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-yellow-500 mb-4 block">Proven Success</span>
            <h2 className="font-display text-5xl font-black uppercase mb-8 leading-tight tracking-tighter">
              Traction & Metrics
            </h2>
            <p className="text-lg text-gray-400 font-light mb-12">
              This matrix provides a snapshot of various success metrics for our company, including revenue growth, customer satisfaction, and brand reputation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 glass rounded-2xl">
                <span className="uppercase text-xs font-bold tracking-widest">Profit Growth</span>
                <TrendingUp className="text-blue-500 w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 glass rounded-2xl bg-yellow-500/10 border-yellow-500/20">
                <span className="uppercase text-xs font-bold tracking-widest">Social Media Reach</span>
                <MessageCircle className="text-yellow-500 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="font-display text-5xl font-black uppercase mb-6 tracking-tighter">
              Investment <span className="text-blue-500">Value</span>
            </h2>
            <p className="text-gray-500 font-light">Choose the partnership level that matches your current growth stage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING.map((plan, idx) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${
                  plan.highlight 
                    ? 'glass border-blue-500/40 shadow-[0_0_50px_rgba(59,130,246,0.15)] scale-105 z-10' 
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Best Value
                  </div>
                )}
                <h3 className="text-sm uppercase font-black tracking-widest mb-2 opacity-50">{plan.title}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black tracking-tight">${plan.price}</span>
                  <span className="text-xs font-bold uppercase opacity-40">USDT / Month</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-light text-gray-300">
                      <CheckCircle2 className={`w-4 h-4 ${plan.highlight ? 'text-blue-400' : 'text-gray-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all ${
                  plan.highlight 
                    ? 'bg-blue-500 text-black hover:bg-blue-400' 
                    : 'glass hover:bg-white/10'
                }`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 px-4 bg-white/5 border-y border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xs text-center md:text-left">
            <h3 className="text-xl font-bold uppercase tracking-tighter mb-2">Our Partnerships</h3>
            <p className="text-sm text-gray-500 font-light">Trusted by global industry leaders to drive digital impact.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-16 items-center opacity-30 grayscale hover:grayscale-0 transition-all">
             {PARTNERS.map(p => (
               <div key={p.name} className="text-3xl font-black tracking-tighter flex items-center gap-3 italic">
                  {p.logo === "KFC" ? <span className="bg-red-600 p-1 rounded-md text-white text-lg NOT-italic">KFC</span> : p.name}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative z-10">
        <div className="max-w-3xl mx-auto glass p-12 md:p-20 rounded-[4rem] text-center border border-white/10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 blur-[100px] -z-10" />
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter">
            Ready to <br /> <span className="text-blue-400">Collaborate?</span>
          </h2>
          <p className="text-gray-400 mb-12 font-light text-lg">
            Whether you need a marketing engine or a financial foundation, we're here to help you scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:rendyyunata05@gmail.com"
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform"
            >
              <Mail className="w-4 h-4" /> Email Us
            </a>
            <a 
              href="https://wa.me/6285748935844"
              className="flex items-center justify-center gap-3 glass px-8 py-4 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-white/10 transition-transform"
            >
              <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
             <div className="text-[10px] uppercase font-bold tracking-widest">© 2026 Ethernal Agency</div>
             <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors"><Smartphone className="w-4 h-4" /></a>
                <a href="#" className="hover:text-white transition-colors"><Send className="w-4 h-4" /></a>
             </div>
          </div>
        </div>
      </section>

      {/* Custom Cursor / Floating Element */}
      <div className="fixed bottom-10 left-10 z-40 hidden lg:block">
        <div className="glass p-4 rounded-2xl flex items-center gap-4 text-xs font-bold uppercase tracking-widest animate-pulse">
           <div className="w-2 h-2 rounded-full bg-green-500" />
           Open for new projects
        </div>
      </div>
    </div>
  );
}
