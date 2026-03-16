import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/nobssdigitalmedia@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
              
              {status === 'success' ? (
                <div className="bg-white p-12 rounded-[2rem] text-center space-y-6 border border-brand-blue/10">
                  <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-navy">Message Sent!</h3>
                  <p className="text-brand-charcoal/60">
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-brand-blue font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Full Name</label>
                      <input 
                        name="name"
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Email Address</label>
                      <input 
                        name="email"
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
                        name="business"
                        type="text" 
                        placeholder="Your Company" 
                        className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Project Type</label>
                      <select name="projectType" className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
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
                    <select name="budget" className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors appearance-none">
                      <option>3,500 – 5,000</option>
                      <option>6,000 – 10,000</option>
                      <option>12,000 – 20,000</option>
                      <option>25,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-charcoal/60 uppercase tracking-widest">Message</label>
                    <textarea 
                      name="message"
                      placeholder="Tell us about your project..." 
                      rows={6}
                      className="w-full bg-white border border-brand-charcoal/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm font-medium">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'} <Send size={20} />
                  </button>
                </form>
              )}
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

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
