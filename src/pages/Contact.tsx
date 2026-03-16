import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32">
      {/* Header */}
      <section className="bg-brand-grey py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy mb-8 leading-tight">
              Let's Build Your <span className="text-brand-blue">Digital Future.</span>
            </h1>
            <p className="text-xl text-brand-charcoal/70 leading-relaxed">
              Ready to build a structured digital presence? Contact us today to discuss your project and discover how we can help you scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="bg-brand-grey p-10 md:p-16 rounded-[3rem] border border-brand-charcoal/5">
              <h2 className="text-3xl font-display font-bold text-brand-navy mb-10">Send a Message</h2>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Business Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Company" 
                      className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Project Type</label>
                    <select className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                      <option>Branding & Creative</option>
                      <option>Digital Marketing</option>
                      <option>IT & Technology</option>
                      <option>Website Development</option>
                      <option>Mobile App Development</option>
                      <option>Custom Software</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Budget Range (GHS)</label>
                  <select className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                    <option>3,500 – 5,000</option>
                    <option>6,000 – 10,000</option>
                    <option>12,000 – 20,000</option>
                    <option>25,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Message</label>
                  <textarea 
                    placeholder="Tell us about your project..." 
                    rows={6}
                    className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold text-brand-navy mb-10">Contact Details</h2>
                <div className="space-y-12">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-grey rounded-2xl flex items-center justify-center text-brand-blue shrink-0">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-brand-navy mb-1">Our Location</h4>
                      <p className="text-brand-charcoal/60">Accra, Ghana</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-grey rounded-2xl flex items-center justify-center text-brand-blue shrink-0">
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-brand-navy mb-1">Email Us</h4>
                      <p className="text-brand-charcoal/60">info@nobssdigital.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-brand-grey rounded-2xl flex items-center justify-center text-brand-blue shrink-0">
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-brand-navy mb-1">Call Us</h4>
                      <div className="text-brand-charcoal/60 flex flex-col">
                        <span>+233 20 942 0544</span>
                        <span>+233 54 023 4691</span>
                        <span>+233 50 612 7325</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20">
                <h3 className="text-2xl font-display font-bold text-brand-navy mb-6">Quick Connect</h3>
                <div className="flex gap-4">
                  <a href="#" className="flex-grow bg-[#25D366] text-white p-6 rounded-3xl flex items-center justify-center gap-3 font-bold hover:scale-[1.02] transition-transform">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg> WhatsApp
                  </a>
                  <a href="#" className="flex-grow bg-brand-blue text-white p-6 rounded-3xl flex items-center justify-center gap-3 font-bold hover:scale-[1.02] transition-transform">
                    <Mail size={24} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
