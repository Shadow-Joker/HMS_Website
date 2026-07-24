import React, { useState } from 'react';
import { Activity, Zap, CheckCircle2, AlertTriangle } from 'lucide-react';

export function LiveSimulator() {
  const [patientSurge, setPatientSurge] = useState<number>(45); // 0 - 100
  const [surgeLevel, setSurgeLevel] = useState<'normal' | 'elevated' | 'critical'>('elevated');
  const [autoOptimizing, setAutoOptimizing] = useState<boolean>(true);

  // Derived telemetry metrics
  const icuCapacity = Math.min(98, Math.round(50 + patientSurge * 0.45));
  const triageSpeed = (0.2 + (patientSurge / 100) * 0.3).toFixed(2);
  const otEfficiency = Math.round(96 - (patientSurge > 70 ? (patientSurge - 70) * 0.4 : 0));

  const handleSurgeChange = (val: number) => {
    setPatientSurge(val);
    if (val < 40) setSurgeLevel('normal');
    else if (val < 75) setSurgeLevel('elevated');
    else setSurgeLevel('critical');
  };

  return (
    <section id="simulator" className="py-20 bg-[#e3e1db] border-y border-[#406768]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-[#406768]/15 border border-[#406768]/30 px-3.5 py-1 rounded-full text-xs font-nebula text-[#19350C] font-bold mb-4 tracking-wider">
            <Activity className="w-3.5 h-3.5 text-[#687D31]" />
            <span>INTERACTIVE TELEMETRY SIMULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-nebula font-bold text-[#19350C] tracking-wide">
            Simulate Tantriks AI Under High Patient Load
          </h2>
          <p className="text-sm sm:text-base text-[#19350C]/75 mt-3">
            Adjust the simulated ER arrival volume to watch the Tantriks Neural Engine auto-rebalance ICU beds, triage priority, and surgical suites.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel */}
          <div className="lg:col-span-5 glass-card p-6 sm:p-8 rounded-2xl border border-[#406768]/30 shadow-md">
            <h3 className="text-base font-nebula font-bold text-[#19350C] flex items-center justify-between mb-6 tracking-wide">
              <span>Surge Parameter Controls</span>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#687D31]/20 text-[#19350C] font-bold border border-[#687D31]/40">
                ACTIVE
              </span>
            </h3>

            {/* Slider Control */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-xs font-nebula">
                <span className="text-[#19350C]/80 font-bold tracking-wider">ER Patient Influx Rate</span>
                <span className="font-mono font-bold text-[#19350C]">{patientSurge} Admissions / hr</span>
              </div>

              <input
                type="range"
                min="10"
                max="100"
                value={patientSurge}
                onChange={(e) => handleSurgeChange(Number(e.target.value))}
                className="w-full h-2 bg-[#406768]/30 rounded-lg appearance-none cursor-pointer accent-[#19350C]"
              />

              <div className="flex justify-between text-[10px] font-mono text-[#19350C]/60">
                <span>10 (Normal Flow)</span>
                <span>50 (Shift Peak)</span>
                <span>100 (Mass Influx)</span>
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div className="space-y-2 mb-8">
              <label className="text-[11px] font-nebula text-[#19350C]/70 block font-bold tracking-wider">Scenario Presets:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handleSurgeChange(25)}
                  className={`px-3 py-2 rounded-lg text-[10px] font-nebula border transition-all cursor-pointer tracking-wider ${
                    patientSurge === 25
                      ? 'bg-[#687D31] text-[#19350C] font-bold border-[#687D31]'
                      : 'bg-white text-[#19350C] border-[#406768]/40 shadow-sm'
                  }`}
                >
                  Standard Shift
                </button>
                <button
                  onClick={() => handleSurgeChange(60)}
                  className={`px-3 py-2 rounded-lg text-[10px] font-nebula border transition-all cursor-pointer tracking-wider ${
                    patientSurge === 60
                      ? 'bg-[#19350C] text-[#D5D3CC] font-bold border-[#19350C]'
                      : 'bg-white text-[#19350C] border-[#406768]/40 shadow-sm'
                  }`}
                >
                  Severe Weather
                </button>
                <button
                  onClick={() => handleSurgeChange(95)}
                  className={`px-3 py-2 rounded-lg text-[10px] font-nebula border transition-all cursor-pointer tracking-wider ${
                    patientSurge === 95
                      ? 'bg-red-600 text-white font-bold border-red-500'
                      : 'bg-white text-[#19350C] border-[#406768]/40 shadow-sm'
                  }`}
                >
                  Trauma Surge
                </button>
              </div>
            </div>

            {/* Autonomous Rebalancing Toggle */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/90 border border-[#406768]/30 shadow-sm">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-[#687D31]" />
                <div>
                  <span className="text-xs font-nebula font-bold text-[#19350C] block tracking-wider">AI Auto-Rebalance</span>
                  <span className="text-[11px] text-[#19350C]/60 block">Dynamic bed & OT allocation</span>
                </div>
              </div>
              <button
                onClick={() => setAutoOptimizing(!autoOptimizing)}
                className={`w-12 h-6 rounded-full p-1 transition-colors cursor-pointer ${
                  autoOptimizing ? 'bg-[#687D31]' : 'bg-[#406768]'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    autoOptimizing ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Telemetry Output Dashboard */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-[#406768]/30 shadow-md">
              
              <div className="flex items-center justify-between pb-6 border-b border-[#406768]/20 mb-6">
                <div>
                  <span className="text-[10px] font-nebula text-[#406768] font-bold uppercase tracking-widest">Live AI Telemetry Feed</span>
                  <h4 className="text-lg sm:text-xl font-nebula font-bold text-[#19350C] tracking-wide">Hospital Core Status</h4>
                </div>

                <div className="flex items-center space-x-2">
                  {surgeLevel === 'critical' ? (
                    <span className="px-3 py-1 rounded-full text-[10px] font-nebula bg-red-500/15 text-red-700 border border-red-500/40 flex items-center space-x-1.5 font-bold tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      <span>SURGE DETECTED</span>
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[10px] font-nebula bg-[#687D31]/20 text-[#19350C] border border-[#687D31]/40 flex items-center space-x-1.5 font-bold tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#687D31]" />
                      <span>STABLE AI OPTIMIZED</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                
                <div className="bg-white p-4 rounded-xl border border-[#406768]/30 shadow-sm">
                  <span className="text-xs text-[#19350C]/70 font-mono block mb-1 font-semibold">ICU Bed Occupancy</span>
                  <div className="text-2xl font-bold text-[#19350C] font-nebula mb-2">{icuCapacity}%</div>
                  <div className="w-full bg-[#406768]/20 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        icuCapacity > 85 ? 'bg-red-500' : 'bg-[#19350C]'
                      }`}
                      style={{ width: `${icuCapacity}%` }}
                    />
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#406768]/30 shadow-sm">
                  <span className="text-xs text-[#19350C]/70 font-mono block mb-1 font-semibold">AI Triage Latency</span>
                  <div className="text-2xl font-bold text-[#687D31] font-nebula mb-1">{triageSpeed}s</div>
                  <span className="text-[11px] text-[#687D31] font-mono font-bold">⚡ 99.4% Faster than Manual</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#406768]/30 shadow-sm">
                  <span className="text-xs text-[#19350C]/70 font-mono block mb-1 font-semibold">OT Suite Efficiency</span>
                  <div className="text-2xl font-bold text-[#406768] font-nebula mb-1">{otEfficiency}%</div>
                  <span className="text-[11px] text-[#19350C]/70 font-mono">Zero Scheduling Conflicts</span>
                </div>

              </div>

              {/* Live AI Decision Log Stream */}
              <div className="bg-[#19350C] p-4 rounded-xl border border-[#19350C] font-mono text-xs shadow-inner">
                <div className="flex items-center justify-between text-[#6FA9BB] mb-2 pb-2 border-b border-[#406768]/50 font-nebula text-[10px]">
                  <span>LOG :: TANTRIKS NEURAL DECISION STREAM</span>
                  <span className="animate-pulse text-[#687D31]">● LIVE</span>
                </div>
                <div className="space-y-1.5 text-[#D5D3CC]">
                  <p>
                    <span className="text-[#687D31]">[+0.04s]</span> Re-routing 3 Step-Down ICU patients to Ward 4-B.
                  </p>
                  <p>
                    <span className="text-[#687D31]">[+0.12s]</span> OT Room 3 scrub team auto-notified for emergency vascular procedure.
                  </p>
                  <p>
                    <span className="text-[#6FA9BB]">[+0.28s]</span> EHR AI summaries generated for 12 incoming ambulance telemetry packets.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
