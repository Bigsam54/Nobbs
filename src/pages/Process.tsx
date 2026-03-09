import { Search, Layout, Play, BarChart, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Search size={40} />,
    title: 'Discovery & Strategy',
    desc: 'We start by understanding your business, goals, and market landscape. This phase involves deep research to identify opportunities and define a clear roadmap for success.',
    details: ['Market Research', 'Competitor Analysis', 'Goal Setting', 'Strategic Roadmap']
  },
  {
    icon: <Layout size={40} />,
    title: 'Planning & Structure',
    desc: 'We design a structured system tailored to your growth. This is where we define the architecture, user experience, and visual direction of your digital assets.',
    details: ['Information Architecture', 'UX Design', 'Visual Direction', 'System Mapping']
  },
  {
    icon: <Play size={40} />,
    title: 'Execution',
    desc: 'Our team of experts designs, builds, and implements high-end solutions. We combine creativity and technology to bring the strategy to life with precision.',
    details: ['UI Design', 'Development', 'Content Creation', 'Quality Assurance']
  },
  {
    icon: <BarChart size={40} />,
    title: 'Optimization',
    desc: 'We don’t just launch and leave. We measure results, analyze user behavior, and improve performance continuously to ensure your systems are working at their peak.',
    details: ['Performance Tracking', 'A/B Testing', 'User Feedback', 'Continuous Improvement']
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Growth & Scaling',
    desc: 'We help your business expand and scale sustainably. Our long-term partnership approach ensures that your digital ecosystem evolves as your business grows.',
    details: ['Scalability Planning', 'Ongoing Support', 'Market Expansion', 'Future-Proofing']
  }
];

export default function Process() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-6 md:mb-8 leading-tight">
              Our <span className="text-brand-blue">Structured</span> <br />
              Approach to Growth.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed">
              We follow a rigorous 5-step process to ensure every project is delivered with excellence and built for long-term success.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="text-8xl md:text-[12rem] font-display font-bold text-brand-grey leading-none select-none">
                      0{index + 1}
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-brand-blue text-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl">
                      <div className="scale-75 md:scale-100">{step.icon}</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl font-display font-bold text-brand-navy mb-4 md:mb-6">{step.title}</h2>
                  <p className="text-base md:text-lg text-brand-charcoal/60 mb-6 md:mb-8 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-left">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                        <span className="font-medium text-brand-navy text-sm md:text-base">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Ready to Start the Journey?</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            Let's apply our structured process to your business and drive real growth.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Project <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
