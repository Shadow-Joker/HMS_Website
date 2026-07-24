import React, { useState } from 'react';
import { Server, Network, Database, Lock, Cpu, Activity, CheckCircle, ShieldCheck } from 'lucide-react';

export function Architecture3DSpec() {
  const [activeTab, setActiveTab] = useState<'topology' | 'security' | 'latency'>('topology');

  return (
    <section id="architecture" className="py-24 bg-[#EBE3D3]/50 border-t border-[#769382]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Specs & Description */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#769382]/15 border border-[#769382]/30 px-3.5 py-1.5 rounded-full text-xs font-nebula text-[#1E2D26] font-bold tracking-wider">
              <Network className="w-3.5 h-3.5 text-[#769382]" />
              <span>SPATIAL OS ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#1E2D26] tracking-wide leading-tight">
              Plug-and-Play Integration with Legacy Hospital EHRs
            </h2>

            <p className="text-sm sm:text-base text-[#1E2D26]/80 leading-relaxed">
              Tantriks AI connects into your hospital's existing HL7, FHIR, and PACS data streams within 48 hours without disrupting ongoing operations or requiring database migrations.
            </p>

            <div className="space-y-4 pt-2">
              
              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/95 border border-[#769382]/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-[#769382]/15 flex items-center justify-center text-[#769382] shrink-0 font-bold">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-nebula font-bold text-[#1E2D26] tracking-wide">Zero-Downtime Edge Deployment</h4>
                  <p className="text-xs text-[#1E2D26]/75 mt-0.5">Runs on lightweight local Kubernetes nodes directly inside hospital data centers.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/95 border border-[#769382]/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-[#769382]/15 flex items-center justify-center text-[#769382] shrink-0 font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-nebula font-bold text-[#1E2D26] tracking-wide">Bidirectional EHR Synchronization</h4>
                  <p className="text-xs text-[#1E2D26]/75 mt-0.5">Real-time sync with Epic Systems, Cerner Millennium, MEDITECH Expanse, and Allscripts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/95 border border-[#769382]/30 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-9 h-9 rounded-xl bg-[#1E2D26]/10 flex items-center justify-center text-[#1E2D26] shrink-0 font-bold">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-nebula font-bold text-[#1E2D26] tracking-wide">Zero-Trust Anonymized Neural Pipeline</h4>
                  <p className="text-xs text-[#1E2D26]/75 mt-0.5">PHI data is auto-anonymized before neural inference, fulfilling strict global privacy mandates.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Architecture Interactive Topology Card */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-[#769382]/35 shadow-xl space-y-6 bg-white/95">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#769382]/20">
                <span className="text-[11px] font-nebula text-[#1E2D26] font-bold tracking-wider">
                  SYSTEM TOPOLOGY STACK
                </span>
                
                {/* View Switcher Tabs */}
                <div className="flex space-x-1 font-nebula text-[9px]">
                  <button
                    onClick={() => setActiveTab('topology')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'topology'
                        ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                        : 'bg-[#F3EFE3] text-[#1E2D26]/70'
                    }`}
                  >
                    3D Layers
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'security'
                        ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                        : 'bg-[#F3EFE3] text-[#1E2D26]/70'
                    }`}
                  >
                    Security
                  </button>
                  <button
                    onClick={() => setActiveTab('latency')}
                    className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                      activeTab === 'latency'
                        ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow'
                        : 'bg-[#F3EFE3] text-[#1E2D26]/70'
                    }`}
                  >
                    Latency
                  </button>
                </div>
              </div>

              {/* Tab 1: Topology Layers */}
              {activeTab === 'topology' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/40 flex justify-between items-center shadow-sm">
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 rounded-full bg-[#769382] animate-pulse" />
                      <div>
                        <span className="font-nebula font-bold text-[#1E2D26] block tracking-wide">3D Spatial Intelligence Layer</span>
                        <span className="text-[10px] text-[#1E2D26]/70 font-sans">Real-time 3D Floorplan & ICU Node Renderer</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#769382]/20 text-[#1E2D26] font-bold">0.2ms</span>
                  </div>

                  <div className="text-center text-[#769382] font-bold text-[11px]">↓ Sub-millisecond gRPC Bus ↓</div>

                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/40 flex justify-between items-center shadow-sm">
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 rounded-full bg-[#769382]" />
                      <div>
                        <span className="font-nebula font-bold text-[#1E2D26] block tracking-wide">Tantriks Neural Inference Core</span>
                        <span className="text-[10px] text-[#1E2D26]/70 font-sans">Triage Predictor & Surgical Scheduler</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#769382]/20 text-[#1E2D26] font-bold">0.4ms</span>
                  </div>

                  <div className="text-center text-[#769382] font-bold text-[11px]">↓ Encrypted FHIR v4 API Gateway ↓</div>

                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/30 flex justify-between items-center shadow-sm">
                    <div className="flex items-center space-x-3">
                      <span className="w-3 h-3 rounded-full bg-[#1E2D26]" />
                      <div>
                        <span className="font-nebula font-bold text-[#1E2D26] block tracking-wide">Legacy Hospital EHR Infrastructure</span>
                        <span className="text-[10px] text-[#1E2D26]/70 font-sans">Epic / Cerner / PACS / HL7 Streams</span>
                      </div>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#769382]/15 text-[#1E2D26] font-bold">Native</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Security Specifications */}
              {activeTab === 'security' && (
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/30 space-y-1">
                    <div className="flex items-center space-x-2 text-[#1E2D26] font-nebula font-bold">
                      <ShieldCheck className="w-4 h-4 text-[#769382]" />
                      <span>AES-256 Air-Gapped Encryption</span>
                    </div>
                    <p className="text-[#1E2D26]/70 text-[11px]">No patient telemetry leaves on-premise hardware without explicit BAA authorization.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/30 space-y-1">
                    <div className="flex items-center space-x-2 text-[#1E2D26] font-nebula font-bold">
                      <CheckCircle className="w-4 h-4 text-[#769382]" />
                      <span>Automated PHI De-Identification</span>
                    </div>
                    <p className="text-[#1E2D26]/70 text-[11px]">HIPAA Safe-Harbor compliant anonymization prior to neural inference processing.</p>
                  </div>
                </div>
              )}

              {/* Tab 3: Latency Metrics */}
              {activeTab === 'latency' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/30 flex justify-between items-center">
                    <span className="text-[#1E2D26]">ER Ambulance Dispatch Sync</span>
                    <span className="font-bold text-[#769382]">0.12ms</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/30 flex justify-between items-center">
                    <span className="text-[#1E2D26]">ICU Bed Rebalance Calculation</span>
                    <span className="font-bold text-[#769382]">0.38ms</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F3EFE3] border border-[#769382]/30 flex justify-between items-center">
                    <span className="text-[#1E2D26]">Surgical OT Turnover Sync</span>
                    <span className="font-bold text-[#769382]">0.22ms</span>
                  </div>
                </div>
              )}

              <div className="p-4 rounded-xl bg-[#769382]/15 border border-[#769382]/30 flex items-center justify-between text-xs font-mono">
                <span className="text-[#1E2D26] font-semibold">Deployment Timeframe:</span>
                <span className="text-[#1E2D26] font-nebula font-bold tracking-wider">48 Hours Turnkey</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
