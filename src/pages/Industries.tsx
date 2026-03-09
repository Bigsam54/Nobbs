import { Rocket, Briefcase, Home, Truck, Sprout, Building2, GraduationCap, Landmark } from 'lucide-react';

const industries = [
  {
    name: 'Startups',
    icon: <Rocket size={40} />,
    desc: 'Helping new ventures build a strong digital foundation and scale rapidly with structured systems.'
  },
  {
    name: 'SMEs',
    icon: <Briefcase size={40} />,
    desc: 'Empowering small and medium enterprises to compete with larger players through professional digital solutions.'
  },
  {
    name: 'Real Estate Companies',
    icon: <Home size={40} />,
    desc: 'Providing high-end property listing platforms, virtual tours, and lead generation systems for real estate leaders.'
  },
  {
    name: 'Logistics Companies',
    icon: <Truck size={40} />,
    desc: 'Building custom tracking, inventory management, and fleet coordination software for efficient operations.'
  },
  {
    name: 'Agriculture Platforms',
    icon: <Sprout size={40} />,
    desc: 'Bridging the gap between farmers and markets with data-driven platforms and supply chain solutions.'
  },
  {
    name: 'Corporate Institutions',
    icon: <Building2 size={40} />,
    desc: 'Delivering robust, secure, and scalable digital ecosystems for large-scale corporate operations.'
  },
  {
    name: 'Educational Institutions',
    icon: <GraduationCap size={40} />,
    desc: 'Modernizing education with learning management systems, student portals, and digital branding.'
  },
  {
    name: 'Government Projects',
    icon: <Landmark size={40} />,
    desc: 'Supporting public sector digital transformation with citizen-centric portals and transparent data systems.'
  }
];

export default function Industries() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-6 md:mb-8 leading-tight">
              Industries <span className="text-brand-blue">We Serve.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed">
              Our expertise spans across multiple sectors, providing tailored digital solutions that address the unique challenges of each industry.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-brand-grey p-8 md:p-10 rounded-3xl border border-brand-charcoal/5 card-hover flex flex-col items-center text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center text-brand-blue mb-6 md:mb-8 shadow-sm">
                  <div className="scale-75 md:scale-100">{industry.icon}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold text-brand-navy mb-3 md:mb-4">{industry.name}</h3>
                <p className="text-brand-charcoal/60 text-xs md:text-sm leading-relaxed">{industry.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Don't See Your Industry?</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Our structured approach is adaptable to any business model. Let's discuss how we can help your specific industry grow.
          </p>
          <a href="/contact" className="btn-primary inline-block">Book a Consultation</a>
        </div>
      </section>
    </div>
  );
}
