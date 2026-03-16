import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Users, Globe, Briefcase, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Branding & Creative Solutions',
    description: 'We build visual identities that command attention and communicate authority.',
    icon: <Zap className="text-brand-blue" size={32} />,
    link: '/services'
  },
  {
    title: 'Photography & Videography',
    description: 'High-end visual storytelling that captures the essence of your brand.',
    icon: <Camera className="text-brand-blue" size={32} />,
    link: '/services'
  },
  {
    title: 'Digital Marketing & Media',
    description: 'Strategic campaigns designed to reach your audience and drive growth.',
    icon: <TrendingUp className="text-brand-blue" size={32} />,
    link: '/services'
  }
];

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', desc: 'Understanding your business, goals, and market landscape.' },
  { step: '02', title: 'Planning & Structure', desc: 'Designing a structured system tailored to your growth.' },
  { step: '03', title: 'Execution', desc: 'Designing, building, and implementing high-end solutions.' },
  { step: '04', title: 'Optimization', desc: 'Measuring results and improving performance continuously.' },
  { step: '05', title: 'Growth & Scaling', desc: 'Helping your business expand and scale sustainably.' }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40 bg-brand-grey">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,82,255,0.2),transparent_70%)]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-bold tracking-wider uppercase mb-6">
                Inspired by Creativity.
              </span>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-brand-navy leading-[1.1] mb-6 md:mb-8">
                Building Structured <br />
                <span className="text-brand-blue">Digital Systems</span> <br />
                for Global Growth.
              </h1>
              <p className="text-lg md:text-xl text-brand-charcoal/70 max-w-2xl mb-8 md:mb-10 leading-relaxed">
                We build structured digital systems that help businesses scale, compete globally, and grow sustainably. Nobss Digital is your partner in digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 text-base">
                  Start a Project <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn-secondary flex items-center justify-center text-base">
                  View Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Image / Visual Element - Removed as requested */}
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8">
                A Ghana-based full-service digital growth partner.
              </h2>
              <div className="space-y-6 text-lg text-brand-charcoal/70">
                <p>
                  Nobss Digital is a Ghana-based full-service digital branding, marketing, and technology company helping businesses build structured and scalable digital ecosystems.
                </p>
                <p>
                  We combine creativity, technology, and strategy to help brands grow with clarity and confidence. Our approach is rooted in structure, ensuring that every digital asset we create serves a long-term business goal.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-brand-blue mb-2">100+</div>
                  <div className="text-sm text-brand-charcoal/60 uppercase tracking-widest font-bold">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-blue mb-2">50+</div>
                  <div className="text-sm text-brand-charcoal/60 uppercase tracking-widest font-bold">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                  alt="Team Collaboration" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-brand-grey overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4 md:mb-6">Our Core Expertise</h2>
            <p className="text-base md:text-lg text-brand-charcoal/60">
              We provide end-to-end digital solutions designed to position your brand as a leader in its industry.
            </p>
          </div>
          
          {/* Mobile Horizontal Scroll / Desktop Grid */}
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="min-w-[85vw] md:min-w-0 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-brand-charcoal/5 flex flex-col h-full snap-center"
              >
                <div className="mb-6 md:mb-8">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-brand-navy mb-3 md:mb-4">{service.title}</h3>
                <p className="text-sm md:text-base text-brand-charcoal/60 mb-6 md:mb-8 flex-grow">{service.description}</p>
                <Link to={service.link} className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm md:text-base">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">How We Work</h2>
              <p className="text-white/60 text-lg">
                Our 5-step process ensures that every project is delivered with precision, structure, and a focus on long-term scalability.
              </p>
            </div>
            <Link to="/process" className="btn-primary">Explore Our Process</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="text-6xl font-display font-bold text-white/5 mb-6 group-hover:text-brand-blue/20 transition-colors">
                  {step.step}
                </div>
                <h4 className="text-xl font-display font-bold mb-4">{step.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">Featured Solutions</h2>
            <p className="text-lg text-brand-charcoal/60 max-w-2xl mx-auto">
              High-impact digital products built for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Website Development', icon: <Globe size={24} /> },
              { title: 'Brand Identity Systems', icon: <Zap size={24} /> },
              { title: 'Commercial Photography', icon: <Camera size={24} /> },
              { title: 'Digital Marketing', icon: <TrendingUp size={24} /> },
              { title: 'Custom Software', icon: <Shield size={24} /> },
              { title: 'Business Dashboards', icon: <Briefcase size={24} /> }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-6 bg-brand-grey rounded-2xl hover:bg-brand-blue hover:text-white transition-all group cursor-default">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-blue group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="font-display font-bold text-lg">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nobss */}
      <section className="section-padding bg-brand-grey">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
                  alt="Modern Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-10">Why Choose Nobss?</h2>
              <div className="space-y-6">
                {[
                  'Structured systems, not random services',
                  'Deep understanding of the Ghanaian market',
                  'Professional delivery standards',
                  'Scalable digital solutions',
                  'Transparent pricing',
                  'Long-term partnership approach'
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-6 h-6 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-lg text-brand-charcoal/80 font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-brand-blue rounded-3xl md:rounded-[3rem] px-6 py-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl md:blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-brand-cyan/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl md:blur-3xl"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-6xl font-display font-bold mb-6 md:mb-8">Ready to Build a Structured Digital Presence?</h2>
              <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12">
                Join forward-thinking businesses scaling with Nobss Digital. Let's build your structured digital ecosystem today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link to="/contact" className="bg-white text-brand-blue px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-brand-grey transition-all shadow-xl">
                  Start a Project
                </Link>
                <Link to="/contact" className="border-2 border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
