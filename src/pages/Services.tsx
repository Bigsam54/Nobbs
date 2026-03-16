import { Zap, TrendingUp, Shield, Globe, Smartphone, Code, Database, BarChart3, Megaphone, PenTool, Camera } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Branding & Creative Solutions',
    icon: <PenTool className="text-brand-blue" size={40} />,
    description: 'We build visual identities that command attention and communicate authority.',
    services: [
      {
        name: 'Brand Identity Development',
        items: ['Logo design', 'Brand color palette', 'Typography', 'Brand guidelines']
      },
      {
        name: 'Corporate Branding',
        items: ['Company profiles', 'Pitch decks', 'Business proposals', 'Business cards & letterheads']
      },
      {
        name: 'Marketing Collateral',
        items: ['Flyers & Brochures', 'Roll-up banners', 'Billboards', 'Social media graphics', 'Packaging design']
      },
      {
        name: 'Brand Strategy',
        items: ['Brand messaging', 'Market positioning', 'Target audience research']
      }
    ]
  },
  {
    title: 'Photography & Videography',
    icon: <Camera className="text-brand-blue" size={40} />,
    description: 'High-end visual storytelling that captures the essence of your brand and products.',
    services: [
      {
        name: 'Commercial Photography',
        items: ['Product photography', 'Corporate portraits', 'Architectural photography', 'Event coverage']
      },
      {
        name: 'Video Production',
        items: ['Brand story videos', 'Social media reels', 'Commercial ads', 'Documentary style videos']
      },
      {
        name: 'Post-Production',
        items: ['Professional editing', 'Color grading', 'Motion graphics', 'Sound design']
      }
    ]
  },
  {
    title: 'Digital Marketing & Media',
    icon: <Megaphone className="text-brand-blue" size={40} />,
    description: 'Strategic campaigns designed to reach your audience and drive measurable growth.',
    services: [
      {
        name: 'Social Media Management',
        items: ['Instagram', 'Facebook', 'TikTok', 'LinkedIn']
      },
      {
        name: 'Paid Advertising',
        items: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'Retargeting campaigns']
      },
      {
        name: 'Content Production',
        items: ['Short-form video content', 'Commercial ad scripts', 'Product launch campaigns', 'Event coverage']
      },
      {
        name: 'Media & PR',
        items: ['Press releases', 'Influencer marketing', 'Brand awareness campaigns']
      }
    ]
  },
  {
    title: 'IT & Technology Solutions',
    icon: <Code className="text-brand-blue" size={40} />,
    description: 'Custom software and web ecosystems built for scalability and performance.',
    services: [
      {
        name: 'Website Design & Development',
        items: ['Corporate websites', 'E-commerce platforms', 'Landing pages', 'Booking systems']
      },
      {
        name: 'Web Application Development',
        items: ['Custom portals', 'Business dashboards', 'Admin systems']
      },
      {
        name: 'Mobile App Development',
        items: ['Android apps', 'iOS apps', 'Hybrid applications']
      },
      {
        name: 'Custom Software Development',
        items: ['CRM systems', 'Inventory systems', 'Payroll systems', 'Business management systems']
      },
      {
        name: 'Data & AI Solutions',
        items: ['Analytics dashboards', 'Predictive analytics', 'Automation systems']
      }
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-display font-bold mb-6 md:mb-8 leading-tight">
              Structured <span className="text-brand-blue">Solutions</span> <br />
              for Modern Brands.
            </h1>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed">
              We divide our expertise into three core departments to ensure specialized attention and professional delivery standards across every project.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-20 md:space-y-32">
            {serviceCategories.map((category, catIndex) => (
              <div key={catIndex} className="grid lg:grid-cols-3 gap-10 md:gap-16">
                <div className="lg:col-span-1">
                  <div className="lg:sticky lg:top-32">
                    <div className="mb-6 md:mb-8">{category.icon}</div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4 md:mb-6">{category.title}</h2>
                    <p className="text-base md:text-lg text-brand-charcoal/60 mb-6 md:mb-8">{category.description}</p>
                    <div className="h-1 w-20 bg-brand-blue"></div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-6 md:gap-12">
                  {category.services.map((service, sIndex) => (
                    <div key={sIndex} className="bg-brand-grey p-8 md:p-10 rounded-3xl border border-brand-charcoal/5">
                      <h3 className="text-xl md:text-2xl font-display font-bold text-brand-navy mb-4 md:mb-6">{service.name}</h3>
                      <ul className="space-y-2 md:space-y-3">
                        {service.items.map((item, iIndex) => (
                          <li key={iIndex} className="flex items-center gap-3 text-sm md:text-base text-brand-charcoal/70">
                            <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-grey">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8">Need a Custom Solution?</h2>
          <p className="text-xl text-brand-charcoal/60 max-w-2xl mx-auto mb-12">
            We build tailored digital systems designed specifically for your business growth needs.
          </p>
          <a href="/contact" className="btn-primary inline-block">Book a Consultation</a>
        </div>
      </section>
    </div>
  );
}
