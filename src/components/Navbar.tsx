import React from 'react';
import { 
  FolderOpen, 
  Scale, 
  Clock, 
  ShieldAlert, 
  Flame, 
  IndianRupee,
  ShieldCheck
} from 'lucide-react';

export type NavTabType = 'overview' | 'financial' | 'battle' | 'advisory' | 'drive' | 'timeline' | 'scam_anatomy';

interface NavbarProps {
  activeTab: NavTabType;
  setActiveTab: (tab: NavTabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs: { id: NavTabType; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: null },
    { id: 'battle', label: 'The Fight', icon: <Flame className="w-3.5 h-3.5" /> },
    { id: 'financial', label: 'Financials (₹57.26L Claim)', icon: <IndianRupee className="w-3.5 h-3.5" /> },
    { id: 'advisory', label: 'Client Caution', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: 'drive', label: 'Evidence Vault', icon: <FolderOpen className="w-3.5 h-3.5" /> },
    { id: 'scam_anatomy', label: 'Legal Loopholes', icon: <Scale className="w-3.5 h-3.5" /> },
    { id: 'timeline', label: 'Timeline', icon: <Clock className="w-3.5 h-3.5" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md transition-all border-b border-[#262626] shadow-lg shadow-black/50">
      {/* Top Tier (Header Bar) */}
      <div className="border-b border-[#1F1F1F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 py-2">
            {/* Left Side: Brand, Title, Badges, and Subtitle */}
            <div 
              className="flex items-center gap-3 cursor-pointer group select-none min-w-0"
              onClick={() => setActiveTab('overview')}
              id="brand-header-link"
            >
              {/* Brand Icon BF */}
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-[#FF3366] via-red-600 to-amber-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform border border-red-500/30">
                BF
              </div>

              {/* Text & Meta */}
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#F8FAFC] group-hover:text-[#FF3366] transition-colors font-mono">
                    BETAFLUX<span className="text-[#FF3366]">.WATCH</span>
                  </span>
                  <span className="text-[10px] tracking-wider font-bold uppercase bg-red-950/80 text-red-400 border border-red-800/60 px-2 py-0.5 rounded-full inline-block">
                    WHISTLEBLOWER DOSSIER
                  </span>
                  <span className="text-[10px] font-mono font-bold bg-amber-950/70 text-amber-300 border border-amber-800/50 px-2 py-0.5 rounded-md hidden sm:inline-block">
                    betaflux.watch
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-400 truncate mt-0.5">
                  Betaflux Consulting Pvt Ltd (CIN: <span className="font-mono text-slate-300">U72900KA2018PTC115926</span>) • Civil Suit <span className="font-mono text-red-400 font-semibold">OS 8868/2025</span>
                </p>
              </div>
            </div>

            {/* Right Side: Static Badge */}
            <div className="shrink-0 pl-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60 text-xs font-semibold text-emerald-300 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="hidden sm:inline">🛡️ Verified Public Record</span>
                <span className="sm:hidden text-[11px]">🛡️ Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tier (Horizontal Pill Tab Bar) */}
      <div className="bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav 
            className="flex items-center gap-1.5 py-2 overflow-x-auto scrollbar-none whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`nav-pill-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 cursor-pointer border ${
                    isActive
                      ? 'bg-[#FF3366] text-white font-bold border-[#FF3366] shadow-md shadow-red-950/40'
                      : 'bg-[#181818] text-slate-400 border-[#262626] hover:text-[#F8FAFC] hover:bg-[#222222] hover:border-slate-700'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

