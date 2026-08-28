import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    beds: '500+',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6 border-t border-[#4BA7C4]/20 bg-white">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column Text */}
        <div className="lg:col-span-5 space-y-5">
          <span className="text-sm font-mono text-[#4BA7C4] font-bold uppercase tracking-wider block">
            GET STARTED
          </span>
          
          <h2 className="text-4xl sm:text-5xl font-display font-semibold text-[#19382B] tracking-tight">
            Deploy Neev AI <br />
            <span className="font-serif-italic text-[#2B7891] font-normal">in Your Hospital Network</span>
          </h2>

          <p className="text-base sm:text-lg text-[#19382B]/85 leading-relaxed">
            Schedule an enterprise demonstration tailored to your hospital network's bed capacity, surgical OT suites, and EHR infrastructure.
          </p>

          <div className="pt-4 space-y-3 text-sm font-mono text-[#19382B] font-semibold">
            <p className="flex items-center space-x-2.5">
              <span className="text-[#4BA7C4] text-base">✓</span>
              <span>48-Hour Turnkey Deployment</span>
            </p>
            <p className="flex items-center space-x-2.5">
              <span className="text-[#4BA7C4] text-base">✓</span>
              <span>Complete BAA & ABDM Compliance</span>
            </p>
            <p className="flex items-center space-x-2.5">
              <span className="text-[#4BA7C4] text-base">✓</span>
              <span>Dedicated Medical AI Integration Specialist</span>
            </p>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7 bg-[#F0F8F9]/70 p-9 rounded-3xl border border-[#4BA7C4]/30 shadow-lg">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-white border border-[#4BA7C4]/30 flex items-center justify-center mx-auto text-[#4BA7C4]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#19382B]">Inquiry Received</h3>
              <p className="text-sm text-[#19382B]/80">Our enterprise integration specialist will contact your medical leadership team within 2 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-[#19382B] font-semibold mb-1.5 uppercase">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#4BA7C4]/30 rounded-xl px-4 py-3 text-sm text-[#19382B] focus:outline-none focus:border-[#4BA7C4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#19382B] font-semibold mb-1.5 uppercase">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@stjudehealth.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#4BA7C4]/30 rounded-xl px-4 py-3 text-sm text-[#19382B] focus:outline-none focus:border-[#4BA7C4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-[#19382B] font-semibold mb-1.5 uppercase">Hospital / Network Name</label>
                  <input
                    type="text"
                    placeholder="Metro Memorial Health"
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    className="w-full bg-white border border-[#4BA7C4]/30 rounded-xl px-4 py-3 text-sm text-[#19382B] focus:outline-none focus:border-[#4BA7C4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#19382B] font-semibold mb-1.5 uppercase">Bed Scale</label>
                  <select
                    value={formData.beds}
                    onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                    className="w-full bg-white border border-[#4BA7C4]/30 rounded-xl px-4 py-3 text-sm text-[#19382B] focus:outline-none focus:border-[#4BA7C4] font-semibold"
                  >
                    <option value="<100">&lt; 100 Beds (Clinic / Community)</option>
                    <option value="100-500">100 - 500 Beds (Regional)</option>
                    <option value="500+">500+ Beds (Enterprise System)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-[#19382B] font-semibold mb-1.5 uppercase">Operational Priorities / Notes</label>
                <textarea
                  rows={3}
                  placeholder="Describe your triage, voice scribe, bed management, or EHR integration needs..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-white border border-[#4BA7C4]/30 rounded-xl px-4 py-3 text-sm text-[#19382B] focus:outline-none focus:border-[#4BA7C4]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#2F6A43] hover:bg-[#19382B] text-white font-semibold text-sm py-4 rounded-full transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer active:scale-98"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </form>
          )}
        </div>

      </div>

    </section>
  );
}
