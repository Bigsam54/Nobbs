import { Check, ArrowRight } from 'lucide-react';

const pricingData = [
  {
    category: 'Website Development',
    plans: [
      {
        name: 'Starter',
        price: '3,500 – 5,000',
        currency: 'GHS',
        desc: 'Perfect for small businesses needing a professional online presence.',
        features: ['Up to 5 Pages', 'Responsive Design', 'SEO Optimization', 'Contact Form', '1 Month Support']
      },
      {
        name: 'Professional',
        price: '6,000 – 10,000',
        currency: 'GHS',
        desc: 'Ideal for growing companies requiring advanced features and custom design.',
        features: ['Up to 10 Pages', 'Custom UI/UX', 'CMS Integration', 'Blog Setup', '3 Months Support'],
        popular: true
      },
      {
        name: 'Premium',
        price: '12,000 – 20,000+',
        currency: 'GHS',
        desc: 'Comprehensive digital ecosystems for corporate institutions and large brands.',
        features: ['Unlimited Pages', 'E-commerce / Custom Apps', 'Advanced SEO', 'API Integrations', '6 Months Support']
      }
    ]
  },
  {
    category: 'Branding Packages',
    plans: [
      {
        name: 'Startup Brand Kit',
        price: '5,000 – 8,000',
        currency: 'GHS',
        desc: 'Essential branding elements to launch your business with clarity.',
        features: ['Logo Design', 'Color Palette', 'Typography', 'Basic Guidelines', 'Business Cards']
      },
      {
        name: 'Growth Brand Kit',
        price: '12,000 – 18,000',
        currency: 'GHS',
        desc: 'Complete brand identity system for businesses ready to scale.',
        features: ['Full Brand Identity', 'Comprehensive Guidelines', 'Marketing Collateral', 'Social Media Kit', 'Brand Strategy'],
        popular: true
      },
      {
        name: 'Premium Brand System',
        price: '25,000 – 40,000',
        currency: 'GHS',
        desc: 'High-end corporate branding for market leaders and global competitors.',
        features: ['Global Brand Strategy', 'Multi-channel Collateral', 'Brand Video / Motion', 'Internal Brand Training', 'Ongoing Brand Management']
      }
    ]
  }
];

export default function Pricing() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-6 md:mb-8 leading-tight">
              Transparent <span className="text-brand-blue">Pricing</span> for Structured Growth.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed">
              We believe in clarity and transparency. Our pricing is designed to provide maximum value at every stage of your business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Sections */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20 md:space-y-32">
            {pricingData.map((section, sIndex) => (
              <div key={sIndex}>
                <h2 className="text-2xl md:text-4xl font-display font-bold text-brand-navy mb-8 md:mb-12 text-center">{section.category}</h2>
                <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
                  {section.plans.map((plan, pIndex) => (
                    <div 
                      key={pIndex} 
                      className={`relative p-8 md:p-10 rounded-3xl border ${plan.popular ? 'border-brand-blue shadow-2xl shadow-brand-blue/10 bg-white' : 'border-brand-charcoal/5 bg-brand-grey'} flex flex-col`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-xl md:text-2xl font-display font-bold text-brand-navy mb-2">{plan.name}</h3>
                      <p className="text-brand-charcoal/60 text-xs md:text-sm mb-6 md:mb-8">{plan.desc}</p>
                      
                      <div className="mb-6 md:mb-8">
                        <span className="text-[10px] md:text-sm font-bold text-brand-charcoal/40 uppercase tracking-widest">{plan.currency}</span>
                        <div className="text-3xl md:text-4xl font-display font-bold text-brand-navy">{plan.price}</div>
                      </div>

                      <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
                        {plan.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-3">
                            <Check size={16} className="text-brand-blue shrink-0" />
                            <span className="text-brand-charcoal/80 text-xs md:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a 
                        href="/contact" 
                        className={`w-full py-3 md:py-4 rounded-full font-bold text-center text-sm md:text-base transition-all ${plan.popular ? 'bg-brand-blue text-white hover:bg-brand-blue/90' : 'bg-white text-brand-navy border border-brand-charcoal/10 hover:bg-brand-charcoal/5'}`}
                      >
                        Get Started
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Need a Custom Quote?</h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            For complex projects or enterprise solutions, we provide tailored quotes based on your specific requirements.
          </p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">
            Request Custom Quote <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
