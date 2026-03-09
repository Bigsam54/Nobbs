import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ExternalLink, Tag, Calendar, User, TrendingUp } from 'lucide-react';

const categories = ['All', 'Branding', 'Digital Marketing', 'IT & Technology'];

const projects = [
  {
    name: 'AgriScale Platform',
    category: 'IT & Technology',
    industry: 'Agriculture',
    services: 'Web Application, Brand Identity',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2070',
    desc: 'A structured digital ecosystem for farmers to manage inventory and connect with buyers.',
    caseStudy: {
      challenge: 'Farmers in rural areas struggled to track inventory and find reliable buyers, leading to significant post-harvest losses.',
      solution: 'We built a robust web application with offline capabilities, real-time inventory tracking, and a direct-to-market marketplace.',
      results: '30% reduction in post-harvest waste and a 25% increase in average farmer income within the first 6 months.'
    }
  },
  {
    name: 'Luxe Estates',
    category: 'Digital Marketing',
    industry: 'Real Estate',
    services: 'Corporate Website, Digital Marketing',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2073',
    desc: 'A premium property listing platform with integrated booking and virtual tour systems.',
    caseStudy: {
      challenge: 'Luxe Estates needed a way to showcase high-end properties to international investors with a seamless viewing experience.',
      solution: 'Developed a high-performance website with 360-degree virtual tours and an automated lead qualification system.',
      results: '40% increase in international inquiries and a significantly shorter sales cycle for premium listings.'
    }
  },
  {
    name: 'SwiftLogistics',
    category: 'IT & Technology',
    industry: 'Logistics',
    services: 'Custom Software, Mobile App',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070',
    desc: 'End-to-end tracking and management system for a pan-African logistics company.',
    caseStudy: {
      challenge: 'Manual tracking of shipments across borders was causing delays and lack of transparency for clients.',
      solution: 'Implemented a custom ERP system with real-time GPS tracking, automated customs documentation, and a client portal.',
      results: 'Real-time visibility for 100% of shipments and a 15% improvement in cross-border transit times.'
    }
  },
  {
    name: 'EduFlow Portal',
    category: 'Branding',
    industry: 'Education',
    services: 'Web Portal, Brand Strategy',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2074',
    desc: 'A comprehensive learning management system for a leading educational institution.',
    caseStudy: {
      challenge: 'The institution lacked a unified digital identity and an efficient way to manage student records and learning materials.',
      solution: 'Created a new brand identity and a custom-built LMS that integrated student management, grading, and content delivery.',
      results: 'Streamlined operations for 5,000+ students and staff, and a 20% increase in student engagement scores.'
    }
  },
  {
    name: 'FinGrow App',
    category: 'IT & Technology',
    industry: 'Fintech',
    services: 'Mobile App, UI/UX Design',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2070',
    desc: 'A modern investment app designed for the next generation of African investors.',
    caseStudy: {
      challenge: 'Young investors found existing financial tools too complex and intimidating for small-scale investments.',
      solution: 'Designed and developed a mobile-first investment platform with a focus on simplicity, education, and micro-investing.',
      results: 'Acquired 50,000 active users in the first quarter with an average app rating of 4.8 stars.'
    }
  },
  {
    name: 'CityGov Portal',
    category: 'Digital Marketing',
    industry: 'Government',
    services: 'Web Development, Data Solutions',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070',
    desc: 'A citizen-centric digital portal for streamlined government services and transparency.',
    caseStudy: {
      challenge: 'Citizens faced long wait times and complex paperwork for basic government services.',
      solution: 'Digitized 20+ core services through a secure, user-friendly portal with real-time status tracking.',
      results: '60% reduction in service processing times and significantly improved citizen satisfaction ratings.'
    }
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-6 md:mb-8 leading-tight">
              Our <span className="text-brand-blue">Portfolio</span> <br />
              of Impact.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed">
              Explore our work across various industries. Each project represents a structured solution built to solve specific business challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pt-12 md:pt-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-brand-charcoal/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm md:text-base font-bold uppercase tracking-widest transition-all relative pb-6 ${activeCategory === cat ? 'text-brand-blue' : 'text-brand-charcoal/40 hover:text-brand-charcoal/70'}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8 md:gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8 relative">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white text-brand-navy px-6 md:px-8 py-2 md:py-3 rounded-full font-bold text-sm md:text-base">View Case Study</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div>
                      <span className="text-brand-blue font-bold text-[10px] md:text-xs uppercase tracking-widest mb-1 md:mb-2 block">{project.industry}</span>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-navy">{project.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-brand-charcoal/60 mb-4 md:mb-6">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.split(', ').map((service, sIndex) => (
                      <span key={sIndex} className="px-3 py-1 bg-brand-grey text-brand-charcoal/60 text-[10px] md:text-xs font-medium rounded-full border border-brand-charcoal/5">
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 md:top-10 md:right-10 z-10 w-12 h-12 bg-brand-grey rounded-full flex items-center justify-center text-brand-navy hover:bg-brand-blue hover:text-white transition-all"
              >
                <X size={24} />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-16">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold tracking-widest uppercase">
                      Case Study
                    </span>
                    <span className="text-brand-charcoal/40 text-xs font-bold uppercase tracking-widest">
                      {selectedProject.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8">
                    {selectedProject.name}
                  </h2>

                  <div className="space-y-10">
                    <div>
                      <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                        <Tag size={16} /> The Challenge
                      </h4>
                      <p className="text-brand-charcoal/70 leading-relaxed">
                        {selectedProject.caseStudy.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                        <ExternalLink size={16} /> Our Solution
                      </h4>
                      <p className="text-brand-charcoal/70 leading-relaxed">
                        {selectedProject.caseStudy.solution}
                      </p>
                    </div>

                    <div className="p-8 bg-brand-grey rounded-3xl border border-brand-charcoal/5">
                      <h4 className="text-sm font-bold text-brand-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                        <TrendingUp size={16} className="text-brand-blue" /> The Results
                      </h4>
                      <p className="text-brand-navy font-medium leading-relaxed">
                        {selectedProject.caseStudy.results}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 pt-10 border-t border-brand-charcoal/10 flex flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-grey rounded-xl flex items-center justify-center text-brand-blue">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">Timeline</p>
                        <p className="text-sm font-bold text-brand-navy">4 Months</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-brand-grey rounded-xl flex items-center justify-center text-brand-blue">
                        <User size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-brand-charcoal/40 font-bold">Client</p>
                        <p className="text-sm font-bold text-brand-navy">{selectedProject.industry} Leader</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="mt-12 btn-primary w-full flex items-center justify-center gap-2"
                  >
                    Close Case Study <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding bg-brand-grey">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8">Have a Project in Mind?</h2>
          <p className="text-xl text-brand-charcoal/60 max-w-2xl mx-auto mb-12">
            Let's build your next success story together. Our team is ready to deliver high-impact results.
          </p>
          <a href="/contact" className="btn-primary inline-block">Start a Project</a>
        </div>
      </section>
    </div>
  );
}

