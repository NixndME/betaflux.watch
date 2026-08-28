import React from 'react';
import { 
  FolderOpen, 
  Share2, 
  Scale, 
  Clock, 
  ShieldAlert, 
  RefreshCw, 
  Flame, 
  Scissors, 
  IndianRupee,
  ShieldCheck
} from 'lucide-react';

export type NavTabType = 'overview' | 'financial' | 'battle' | 'advisory' | 'drive' | 'timeline' | 'scam_anatomy' | 'social';

interface NavbarProps {
  activeTab: NavTabType;
  setActiveTab: (tab: NavTabType) => void;
  onOpenRedactModal: () => void;
  isDriveConnected: boolean;
  onConnectDrive: () => void;
  isSyncingDrive: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenRedactModal,
  isDriveConnected,
  onConnectDrive,
  isSyncingDrive,
}) => {
  return (
    <header className="sticky top-0 z-40 border-b border-[#262626] bg-[#0A0A0A]/95 backdrop-blur-md transition-all shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('overview')}
            id="brand-header-link"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF3366] via-red-600 to-amber-600 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-red-900/30 group-hover:scale-105 transition-transform border border-red-500/30">
              BF
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#F8FAFC] group-hover:text-[#FF3366] transition-colors font-mono">
                  BETAFLUX<span className="text-[#FF3366]">.WATCH</span>
                </span>
                <span className="text-[10px] tracking-wider font-bold uppercase bg-red-950/80 text-red-400 border border-red-800/60 px-2 py-0.5 rounded-full hidden sm:inline-block">
                  Whistleblower Dossier
                </span>
                <span className="text-[10px] font-mono font-bold bg-amber-950/70 text-amber-300 border border-amber-800/50 px-2 py-0.5 rounded-md hidden lg:inline-block">
                  betaflux.watch
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 hidden md:block mt-0.5">
                Betaflux Consulting Pvt Ltd (CIN: <span className="font-mono text-slate-300">U72900KA2018PTC115926</span>) • Civil Suit <span className="font-mono text-red-400 font-semibold">OS 8868/2025</span>
              </p>
            </div>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#141414] p-1.5 rounded-xl border border-[#262626]">
            <button
              id="nav-tab-overview"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-gradient-to-r from-red-600 to-[#FF3366] text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#1E1E1E]'
              }`}
            >
              Overview
            </button>
            <button
              id="nav-tab-battle"
              onClick={() => setActiveTab('battle')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'battle'
                  ? 'bg-[#FF3366] text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#1E1E1E]'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              The Fight &amp; Narrative
            </button>
            <button
              id="nav-tab-financial"
              onClick={() => setActiveTab('financial')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'financial'
                  ? 'bg-red-600 text-white shadow-sm font-bold'
                  : 'text-red-400 hover:text-red-300 hover:bg-red-950/40'
              }`}
            >
              <IndianRupee className="w-3.5 h-3.5" />
              Financials (₹57.26L Claim)
            </button>
            <button
              id="nav-tab-advisory"
              onClick={() => setActiveTab('advisory')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'advisory'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-bold'
                  : 'text-amber-400 hover:text-amber-300 hover:bg-amber-950/40'
              }`}
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              Client &amp; Candidate Risk
            </button>
            <button
              id="nav-tab-drive"
              onClick={() => setActiveTab('drive')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'drive'
                  ? 'bg-gradient-to-r from-red-600 to-[#FF3366] text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#1E1E1E]'
              }`}
            >
              <FolderOpen className="w-3.5 h-3.5 text-amber-400" />
              Evidence Vault
            </button>
            <button
              id="nav-tab-scam-anatomy"
              onClick={() => setActiveTab('scam_anatomy')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'scam_anatomy'
                  ? 'bg-gradient-to-r from-red-600 to-[#FF3366] text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#1E1E1E]'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              Legal Loopholes
            </button>
            <button
              id="nav-tab-timeline"
              onClick={() => setActiveTab('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'timeline'
                  ? 'bg-gradient-to-r from-red-600 to-[#FF3366] text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#1E1E1E]'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              Timeline
            </button>
            <button
              id="nav-tab-social"
              onClick={() => setActiveTab('social')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'social'
                  ? 'bg-gradient-to-r from-red-600 to-[#FF3366] text-white shadow-sm font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-[#1E1E1E]'
              }`}
            >
              <Share2 className="w-3.5 h-3.5" />
              Share Alert
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenRedactModal}
              title="Redact screenshots tool"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-[#141414] hover:bg-[#1E1E1E] text-slate-200 border border-[#262626] transition-all"
            >
              <Scissors className="w-3.5 h-3.5 text-[#FF3366]" />
              <span>Redact Tool</span>
            </button>

            <button
              id="btn-sync-google-drive"
              onClick={onConnectDrive}
              disabled={isSyncingDrive}
              title="Sync with Google Drive folder: betaflux"
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-xl border transition-all ${
                isDriveConnected
                  ? 'bg-emerald-950/60 border-emerald-700 text-emerald-300 hover:bg-emerald-900/60'
                  : 'bg-[#141414] border-[#262626] text-slate-300 hover:bg-[#1E1E1E] hover:border-slate-700 shadow-sm'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncingDrive ? 'animate-spin text-[#FF3366]' : isDriveConnected ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span className="hidden sm:inline font-semibold">
                {isSyncingDrive ? 'Syncing...' : isDriveConnected ? 'Drive (/betaflux)' : 'Link Drive'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Sub-Navigation */}
        <div className="xl:hidden flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none border-t border-[#262626] text-xs">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'overview' ? 'bg-[#FF3366] text-white font-bold' : 'text-slate-300 bg-[#141414]'}`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('battle')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'battle' ? 'bg-[#FF3366] text-white font-bold' : 'text-slate-300 bg-[#141414]'}`}
          >
            The Fight
          </button>
          <button
            onClick={() => setActiveTab('financial')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'financial' ? 'bg-red-600 text-white font-bold' : 'text-red-400 bg-red-950/50 font-semibold'}`}
          >
            Financials (₹57.26L Claim)
          </button>
          <button
            onClick={() => setActiveTab('advisory')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'advisory' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-amber-400 bg-amber-950/40'}`}
          >
            Client Caution
          </button>
          <button
            onClick={() => setActiveTab('drive')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'drive' ? 'bg-[#FF3366] text-white font-bold' : 'text-slate-300 bg-[#141414]'}`}
          >
            Evidence Vault
          </button>
          <button
            onClick={() => setActiveTab('scam_anatomy')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'scam_anatomy' ? 'bg-[#FF3366] text-white font-bold' : 'text-slate-300 bg-[#141414]'}`}
          >
            Legal Loopholes
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'timeline' ? 'bg-[#FF3366] text-white font-bold' : 'text-slate-300 bg-[#141414]'}`}
          >
            Timeline
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors ${activeTab === 'social' ? 'bg-[#FF3366] text-white font-bold' : 'text-slate-300 bg-[#141414]'}`}
          >
            Share Alert
          </button>
        </div>
      </div>
    </header>
  );
};
