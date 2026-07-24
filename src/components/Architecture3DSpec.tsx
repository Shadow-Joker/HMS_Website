import React from 'react';
import { Server, Network, Database, Lock } from 'lucide-react';

export function Architecture3DSpec() {
  return (
    <section id="architecture" className="py-24 bg-[#e3e1db] border-t border-[#406768]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Specs & Diagram */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#406768]/15 border border-[#406768]/30 px-3.5 py-1.5 rounded-full text-xs font-nebula text-[#19350C] font-bold tracking-wider">
              <Network className="w-3.5 h-3.5 text-[#406768]" />
              <span>SPATIAL OS ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#19350C] tracking-wide">
              Plug-and-Play Integration with Legacy Hospital EHRs
            </h2>

            <p className="text-sm sm:text-base text-[#19350C]/80 leading-relaxed">
              Tantriks AI connects into your hospital's existing HL7, FHIR, and PACS data streams within 48 hours without disrupting ongoing operations or requiring database migrations.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/90 border border-[#406768]/30 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#687D31]/15 flex items-center justify-center text-[#687D31] shrink-0 mt-0.5 font-bold">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-nebula font-bold text-[#19350C] tracking-wide">Zero-Downtime Edge Deployment</h4>
                  <p className="text-xs text-[#19350C]/75 mt-0.5">Runs on lightweight local Kubernetes nodes directly inside hospital data centers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/90 border border-[#406768]/30 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#406768]/15 flex items-center justify-center text-[#406768] shrink-0 mt-0.5 font-bold">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-nebula font-bold text-[#19350C] tracking-wide">Bidirectional EHR Synchronization</h4>
                  <p className="text-xs text-[#19350C]/75 mt-0.5">Real-time sync with Epic Systems, Cerner Millennium, MEDITECH Expanse, and Allscripts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/90 border border-[#406768]/30 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#19350C]/10 flex items-center justify-center text-[#19350C] shrink-0 mt-0.5 font-bold">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-nebula font-bold text-[#19350C] tracking-wide">Zero-Trust Anonymized Neural Pipeline</h4>
                  <p className="text-xs text-[#19350C]/75 mt-0.5">PHI data is auto-anonymized before neural inference, fulfilling strict global privacy mandates.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Architecture Topology Card */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#406768]/30 shadow-lg space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#406768]/20 font-nebula text-[11px]">
                <span className="text-[#19350C] font-bold tracking-wider">TANTRIKS AI TOPOLOGY STACK</span>
                <span className="text-[#687D31] font-bold tracking-wider">V2.4 READY</span>
              </div>

              {/* Topology Layers Visual */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Layer 1 */}
                <div className="p-4 rounded-xl bg-white border border-[#406768]/40 flex justify-between items-center shadow-sm">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-[#6FA9BB]" />
                    <div>
                      <span className="font-nebula font-bold text-[#19350C] block tracking-wide">3D Spatial Intelligence Layer</span>
                      <span className="text-[10px] text-[#19350C]/70">Real-time 3D Floorplan & ICU Node Renderer</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#6FA9BB]/20 text-[#19350C] font-bold">0.2ms</span>
                </div>

                {/* Arrow */}
                <div className="text-center text-[#406768] font-bold text-[11px]">↓ Sub-millisecond gRPC Bus ↓</div>

                {/* Layer 2 */}
                <div className="p-4 rounded-xl bg-white border border-[#687D31]/40 flex justify-between items-center shadow-sm">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-[#687D31]" />
                    <div>
                      <span className="font-nebula font-bold text-[#19350C] block tracking-wide">Tantriks Neural Inference Core</span>
                      <span className="text-[10px] text-[#19350C]/70">Triage Predictor & Surgical Scheduler</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#687D31]/20 text-[#19350C] font-bold">0.4ms</span>
                </div>

                {/* Arrow */}
                <div className="text-center text-[#406768] font-bold text-[11px]">↓ Encrypted FHIR v4 API Gateway ↓</div>

                {/* Layer 3 */}
                <div className="p-4 rounded-xl bg-white border border-[#406768]/30 flex justify-between items-center shadow-sm">
                  <div className="flex items-center space-x-3">
                    <span className="w-3 h-3 rounded-full bg-[#19350C]" />
                    <div>
                      <span className="font-nebula font-bold text-[#19350C] block tracking-wide">Legacy Hospital EHR Infrastructure</span>
                      <span className="text-[10px] text-[#19350C]/70">Epic / Cerner / PACS / HL7 Streams</span>
                    </div>
                  </div>
                  <span className="px-2 py-1 rounded bg-[#406768]/15 text-[#19350C] font-bold">Native</span>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-[#687D31]/15 border border-[#687D31]/30 flex items-center justify-between text-xs font-mono">
                <span className="text-[#19350C] font-semibold">Deployment Timeframe:</span>
                <span className="text-[#19350C] font-nebula font-bold tracking-wider">48 Hours Full Turnkey</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
