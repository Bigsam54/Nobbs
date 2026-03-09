const posts = [
  {
    title: 'Branding Strategy for Startups in Ghana',
    category: 'Branding',
    date: 'March 15, 2024',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'How to build a visual identity that commands attention in the competitive Ghanaian market.'
  },
  {
    title: 'How Digital Marketing Drives Business Growth',
    category: 'Marketing',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426',
    excerpt: 'Strategic campaigns designed to reach your audience and drive measurable ROI.'
  },
  {
    title: 'Why Businesses Need Structured Digital Systems',
    category: 'Technology',
    date: 'March 5, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
    excerpt: 'The importance of building scalable ecosystems rather than random digital services.'
  },
  {
    title: 'AI and the Future of African Businesses',
    category: 'Innovation',
    date: 'February 28, 2024',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
    excerpt: 'Exploring how artificial intelligence is transforming the landscape for African entrepreneurs.'
  },
  {
    title: 'Website Optimization for Higher Conversions',
    category: 'Development',
    date: 'February 20, 2024',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=2064',
    excerpt: 'Practical tips to turn your website visitors into loyal customers through better UX.'
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-grey py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy mb-8 leading-tight">
              Insights & <span className="text-brand-blue">Innovation.</span>
            </h1>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">
              Explore our latest thoughts on branding, technology, and digital growth in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-8 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="text-brand-charcoal/40 text-sm font-bold uppercase tracking-widest mb-4">{post.date}</div>
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-4 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-brand-charcoal/60 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-brand-blue font-bold group-hover:gap-3 transition-all">
                  Read Article <span className="text-xl">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-brand-grey">
        <div className="container mx-auto px-6">
          <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">Subscribe to Our Insights</h2>
              <p className="text-xl text-white/60 mb-12">
                Get the latest digital growth strategies and technology trends delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white focus:outline-none focus:border-brand-blue transition-colors"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
