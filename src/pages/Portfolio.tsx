import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ExternalLink, Tag, Calendar, User, TrendingUp } from 'lucide-react';

const categories = [
  {
    id: 'Branding',
    name: 'Branding & Identity',
    image: 'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230242/Square_h7fanm.png',
  },
  {
    id: 'Photography',
    name: 'Photography & Film',
    image: 'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670559/IMG_8747_qpj8fx.jpg',
  },
  {
    id: 'Websites',
    name: 'Websites & Digital Platforms',
    image: 'https://res.cloudinary.com/dopscbnty/image/upload/v1770386745/pennn_dupvjq.png',
  }
];

const projects = [
  {
    id: 'mypennypal',
    name: 'My Penny Pal',
    category: 'Websites',
    image: 'https://res.cloudinary.com/dopscbnty/image/upload/v1770386745/pennn_dupvjq.png',
    link: 'https://mypennypal.com',
    gallery: ['https://res.cloudinary.com/dopscbnty/image/upload/v1770386745/pennn_dupvjq.png']
  },
  {
    id: 'swirl-matcha',
    name: 'swirl-matcha',
    category: 'Websites',
    image: 'https://res.cloudinary.com/dopscbnty/image/upload/v1768879693/aeecb815de59bdff0d88d1b2cd6e2ea8_xvbahv.jpg',
    link: 'https://swirl-matcha.vercel.app/',
    gallery: ['https://res.cloudinary.com/dopscbnty/image/upload/v1768879693/aeecb815de59bdff0d88d1b2cd6e2ea8_xvbahv.jpg']
  },
  {
    id: 'okara-clothings',
    name: 'okara-clothings',
    category: 'Websites',
    image: 'https://res.cloudinary.com/dopscbnty/image/upload/v1773740942/Image_fx_-_2026-03-17T094831.987_yikhzf.jpg',
    link: 'https://okara-clothings.vercel.app/',
    gallery: ['https://res.cloudinary.com/dopscbnty/image/upload/v1773740942/Image_fx_-_2026-03-17T094831.987_yikhzf.jpg']
  },
  {
    id: 'santamoga',
    name: 'Santamoga Campus-to-Industry Summit',
    category: 'Websites',
    image: 'https://res.cloudinary.com/dopscbnty/image/upload/v1772981759/WhatsApp_Image_2026-02-22_at_6.05.15_PM_ni8t3n.jpg',
    link: 'https://santamoga.vercel.app/',
    gallery: ['https://res.cloudinary.com/dopscbnty/image/upload/v1772981759/WhatsApp_Image_2026-02-22_at_6.05.15_PM_ni8t3n.jpg']
  },
  {
    id: 'alejo-branding',
    name: 'Alejo',
    category: 'Branding',
    image: 'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230242/Square_h7fanm.png',
    gallery: [
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773229970/Banner_jr3ljo.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230004/Hoodie_bezivo.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230002/Cap_vpahpm.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230445/Billboard_1_m5jr1v.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230341/Alejo_Stationery_Mockup1_bgrq1w.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230242/Square_h7fanm.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773230004/Free_Key_Tag_Mockup_xlgl2i.png'
    ]
  },
  {
    id: 'sankofa-coffee',
    name: 'Sankofa Coffee',
    category: 'Branding',
    image: 'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721303/Artboard_3_xiwomn.png',
    gallery: [
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721301/Artboard_4_xranwv.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721303/Artboard_2_vzozyw.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721293/Artboard_1_gldn7x.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721303/Artboard_3_xiwomn.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721287/Artboard_8_p9a8vr.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721296/Artboard_13_ptfmkj.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721296/Artboard_14_an2zcx.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721287/Artboard_11_hny68p.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721286/Artboard_12_d81ixw.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721288/Artboard_7_ejrzpt.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721293/Artboard_2_copy_2_f3kvfe.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721296/Artboard_9_rkftyq.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721303/Artboard_6_kr9oik.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721394/Artboard_5_x1f8xu.png',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773721297/Artboard_2_copy_rndwyz.png'

    ]
  },
  {
    id: 'recovery-saturday',
    name: 'Recovery Saturday (Feb, 2026)',
    category: 'Photography',
    image: 'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670559/IMG_8747_qpj8fx.jpg',
    gallery: [
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670559/IMG_8747_qpj8fx.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670530/IMG_8704_p5pfnv.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670532/IMG_8738_k6pvh4.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670530/IMG_8692_lcgtjb.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670563/IMG_8795_j2cbrh.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670559/IMG_8773_lfkfvf.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670559/IMG_8756_dskmti.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670530/IMG_8681_jy5uxn.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670530/IMG_8672_g0wrzj.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670524/IMG_8643_wjagx3.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670523/IMG_8638_mnuyar.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670524/IMG_8641_vzampj.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670512/IMG_8627_sv7akg.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670514/IMG_8631_njq7xh.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670523/IMG_8640_f5f7xf.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670511/IMG_8628_rqsooe.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670510/IMG_8847_yfqlxh.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670510/IMG_8619_ewvhx8.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670524/IMG_8646_artm20.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670509/IMG_8850_hupfro.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670512/IMG_8630_wse0mc.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670560/IMG_8776_rwzo1l.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670510/IMG_8618_cngetj.jpg',
      'https://res.cloudinary.com/dnybcnysf/image/upload/v1773670568/IMG_8799_of42el.jpg'
    ]
  }
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const filteredProjects = activeCategory 
    ? projects.filter(p => p.category === activeCategory)
    : [];

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-6 md:mb-8 leading-tight">
              Our <span className="text-brand-blue">Portfolio</span> of Impact.
            </h1>
            <p className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed">
              {activeProject 
                ? `Viewing ${activeProject.name} project.`
                : activeCategory 
                  ? `Exploring our work in ${activeCategory}.`
                  : 'A curated selection of our work across branding, photography, and technology.'}
            </p>
          </div>
        </div>
      </section>

      {/* Level 1: Category Grid */}
      {!activeCategory && !activeProject && (
        <section className="section-padding bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer relative aspect-[16/9] rounded-3xl overflow-hidden shadow-xl"
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-navy/60 group-hover:bg-brand-navy/40 transition-colors flex flex-col justify-end p-8 md:p-12">
                    <h3 className="text-white text-3xl md:text-5xl font-display font-bold mb-4">{cat.name}</h3>
                    <div className="flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest">
                      View Projects <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Level 2: Project List within Category */}
      {activeCategory && !activeProject && (
        <section className="section-padding bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-20">
              <button 
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-2 text-brand-charcoal/40 hover:text-brand-blue font-bold uppercase tracking-widest transition-colors w-fit"
              >
                <ArrowRight size={20} className="rotate-180" /> Back to Portfolio
              </button>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-navy">{currentCategory?.name}</h2>
            </div>

            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div 
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group cursor-pointer"
                    onClick={() => {
                      if (activeCategory === 'Websites' && project.link) {
                        window.open(project.link, '_blank');
                      } else {
                        setActiveProject(project);
                      }
                    }}
                  >
                    <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                        <h3 className="text-white text-xl md:text-2xl font-display font-bold mb-2">{project.name}</h3>
                        <div className="flex items-center gap-2 text-brand-cyan font-bold uppercase tracking-widest text-xs">
                          {activeCategory === 'Websites' ? 'Visit Website' : 'View Project'} <ArrowRight size={14} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      )}

      {/* Level 3: Project Gallery */}
      {activeProject && (
        <section className="section-padding bg-white min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-20">
              <button 
                onClick={() => setActiveProject(null)}
                className="flex items-center gap-2 text-brand-charcoal/40 hover:text-brand-blue font-bold uppercase tracking-widest transition-colors w-fit"
              >
                <ArrowRight size={20} className="rotate-180" /> Back to {activeCategory}
              </button>
              <div className="md:text-right">
                <span className="text-brand-blue font-bold uppercase tracking-widest text-xs block mb-2">{activeCategory}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-brand-navy mb-4">{activeProject.name}</h2>
                {activeProject.link && (
                  <a 
                    href={activeProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-blue transition-colors text-sm"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {activeProject.gallery.map((img: string, idx: number) => {
                const isFullWidth = (idx + 1) % 5 === 0;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`cursor-zoom-in rounded-xl md:rounded-2xl overflow-hidden shadow-lg group ${
                      isFullWidth ? 'col-span-2 md:col-span-4 aspect-video' : 'aspect-square'
                    }`}
                    onClick={() => setFullscreenImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${activeProject.name} work ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenImage(null)}
              className="absolute inset-0 bg-brand-navy/95 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl bg-transparent rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex items-center justify-center"
            >
              <button 
                onClick={() => setFullscreenImage(null)}
                className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X size={24} />
              </button>

              <img 
                src={fullscreenImage} 
                alt="Fullscreen work" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
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

