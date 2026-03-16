import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Layers, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const values = [
  { title: 'Structure Over Chaos', icon: <Layers size={32} />, desc: 'We believe in organized systems that drive predictable results.' },
  { title: 'Excellence in Execution', icon: <ShieldCheck size={32} />, desc: 'High standards are not optional; they are our baseline.' },
  { title: 'Innovation With Purpose', icon: <Zap size={32} />, desc: 'We use technology to solve real business problems, not just for show.' },
  { title: 'Integrity and Transparency', icon: <Heart size={32} />, desc: 'Honest communication and clear pricing in everything we do.' },
  { title: 'Growth Mindset', icon: <TrendingUp size={32} />, desc: 'We are constantly evolving to keep our clients ahead of the curve.' }
];

export default function About() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-brand-blue font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">About Nobss Digital</span>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-6 md:mb-8 leading-tight">
              Building the Future of <span className="text-brand-blue">African Business.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed">
              Nobss Digital is a Ghana-based digital branding, marketing, and technology company dedicated to helping businesses build structured, scalable, and sustainable digital systems.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6 md:mb-8">Our Story</h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-brand-charcoal/70">
                <p>
                  Founded in Accra, Ghana, Nobss Digital emerged from a simple observation: many businesses have great products but lack the structured digital systems needed to scale.
                </p>
                <p>
                  We saw a gap between creative agencies that focus only on aesthetics and technical firms that focus only on code. Nobss Digital was built to bridge that gap—combining high-end creativity with robust technology and strategic thinking.
                </p>
                <p>
                  Today, we serve a diverse range of clients from startups to corporate institutions, helping them navigate the digital landscape with clarity and confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 md:py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-4 md:gap-12">
            <div className="bg-white/5 p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/10">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-brand-blue rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8">
                <Eye className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-display font-bold mb-3 md:mb-6">Our Vision</h3>
              <p className="text-white/60 text-xs md:text-lg leading-relaxed">
                To become the leading digital growth partner building structured African businesses.
              </p>
            </div>
            <div className="bg-white/5 p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/10">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-brand-cyan text-brand-navy rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-8">
                <Target className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-display font-bold mb-3 md:mb-6">Our Mission</h3>
              <ul className="space-y-2 md:space-y-4 text-white/60 text-xs md:text-lg">
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 md:mt-2.5"></div>
                  <span>Build structured digital systems.</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-1.5 h-1.5 bg-brand-cyan rounded-full mt-1.5 md:mt-2.5"></div>
                  <span>Bridge creativity and tech.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-24 bg-brand-grey overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4 md:mb-6">Our Core Values</h2>
            <p className="text-sm md:text-lg text-brand-charcoal/60">
              The principles that guide our work and define our culture.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 scrollbar-hide">
            {values.map((value, index) => (
              <div key={index} className="min-w-[280px] md:min-w-0 snap-center bg-white p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-sm border border-brand-charcoal/5 card-hover">
                <div className="text-brand-blue mb-6 md:mb-8 scale-75 md:scale-100 origin-left">{value.icon}</div>
                <h4 className="text-xl md:text-2xl font-display font-bold text-brand-navy mb-3 md:mb-4">{value.title}</h4>
                <p className="text-brand-charcoal/60 text-xs md:text-base leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
