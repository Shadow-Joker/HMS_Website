import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    hospital: '',
    beds: '500+',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#EBE3D3]/50 border-t border-[#769382]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Call to Action Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-nebula text-[#769382] font-bold uppercase tracking-widest block">
              GET STARTED WITH TANTRIKS AI
            </span>

            <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#1E2D26] tracking-wide leading-tight">
              Transform Your Hospital Operations
            </h2>

            <p className="text-sm sm:text-base text-[#1E2D26]/80 leading-relaxed">
              Schedule a personalized 3D spatial simulation tailored to your hospital network's bed capacity, surgical room count, and ER volume.
            </p>

            <div className="space-y-4 pt-4 text-xs font-mono text-[#1E2D26]/90 font-semibold">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#769382]/15 flex items-center justify-center text-[#769382]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>48-Hour Rapid On-Premise Integration</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#769382]/15 flex items-center justify-center text-[#769382]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Full BAA & HIPAA Compliance Guarantee</span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E2D26]/10 flex items-center justify-center text-[#1E2D26]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span>Dedicated Medical AI Solutions Engineer</span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-3xl border border-[#769382]/30 shadow-lg bg-white/95">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#769382]/20 border border-[#769382] flex items-center justify-center text-[#769382] mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-[#769382]" />
                  </div>
                  <h3 className="text-2xl font-nebula font-bold text-[#1E2D26] tracking-wide">Demo Request Received</h3>
                  <p className="text-sm text-[#1E2D26]/80 max-w-md mx-auto">
                    A Tantriks AI Clinical Systems Specialist will contact your Chief Medical Officer within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-nebula text-[#769382] font-bold hover:underline pt-4 block mx-auto cursor-pointer tracking-wider"
                  >
                    ← Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-nebula font-bold text-[#1E2D26] mb-2 tracking-wide">Request Enterprise Demo</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-nebula text-[#1E2D26]/80 font-bold mb-1.5 tracking-wider">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Dr. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#F3EFE3] border border-[#769382]/30 rounded-xl px-4 py-2.5 text-sm text-[#1E2D26] focus:border-[#1E2D26] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-nebula text-[#1E2D26]/80 font-bold mb-1.5 tracking-wider">
                        Hospital / Health System Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="s.jenkins@stjudehealth.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F3EFE3] border border-[#769382]/30 rounded-xl px-4 py-2.5 text-sm text-[#1E2D26] focus:border-[#1E2D26] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-nebula text-[#1E2D26]/80 font-bold mb-1.5 tracking-wider">
                        Hospital / Health Network Name
                      </label>
                      <input
                        type="text"
                        placeholder="Metro Memorial Health"
                        value={formData.hospital}
                        onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                        className="w-full bg-[#F3EFE3] border border-[#769382]/30 rounded-xl px-4 py-2.5 text-sm text-[#1E2D26] focus:border-[#1E2D26] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-nebula text-[#1E2D26]/80 font-bold mb-1.5 tracking-wider">
                        Active Bed Capacity
                      </label>
                      <select
                        value={formData.beds}
                        onChange={(e) => setFormData({ ...formData, beds: e.target.value })}
                        className="w-full bg-[#F3EFE3] border border-[#769382]/30 rounded-xl px-4 py-2.5 text-sm text-[#1E2D26] focus:border-[#1E2D26] focus:outline-none font-mono font-semibold"
                      >
                        <option value="<100">&lt; 100 Beds (Community)</option>
                        <option value="100-500">100 - 500 Beds (Regional)</option>
                        <option value="500+">500+ Beds (Enterprise System)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-nebula text-[#1E2D26]/80 font-bold mb-1.5 tracking-wider">
                      Clinical Operational Priorities / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe your current ER triage, ICU occupancy, or surgical scheduling bottlenecks..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F3EFE3] border border-[#769382]/30 rounded-xl px-4 py-2.5 text-sm text-[#1E2D26] focus:border-[#1E2D26] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula font-bold text-xs py-3.5 rounded-xl transition-all shadow-lg glow-sage-dark cursor-pointer active:scale-98 flex items-center justify-center space-x-2 tracking-widest"
                  >
                    <span>Schedule Enterprise Simulation</span>
                    <Send className="w-4 h-4 text-[#769382]" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
