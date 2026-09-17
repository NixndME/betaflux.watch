import React, { useState } from 'react';
import { StruggleChapter, EvidenceDocument } from '../types';
import { 
  AlertTriangle, 
  Flame, 
  FileText, 
  ShieldAlert, 
  Building2, 
  Users, 
  ChevronRight, 
  Lock, 
  Scale, 
  FileWarning, 
  IndianRupee, 
  ArrowRight,
  HeartCrack,
  CheckCircle2,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

interface BattleStruggleChronicleProps {
  chapters: StruggleChapter[];
  evidenceDocs: EvidenceDocument[];
  onSelectEvidence: (docId: string) => void;
  onExploreAdvisory: () => void;
  onExploreEvidence: () => void;
}

export const BattleStruggleChronicle: React.FC<BattleStruggleChronicleProps> = ({
  chapters,
  evidenceDocs,
  onSelectEvidence,
  onExploreAdvisory,
  onExploreEvidence,
}) => {
  const [selectedChapterId, setSelectedChapterId] = useState<string>(chapters[0]?.id || 'chapter-1');

  const currentChapter = chapters.find((c) => c.id === selectedChapterId) || chapters[0];

  return (
    <div className="space-y-8" id="battle-struggle-section">
      {/* Section Master Header */}
      <div className="p-6 sm:p-8 bg-white dark:bg-[#141414] border border-red-200 dark:border-red-900/60 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 dark:bg-red-900/10 rounded-full blur-3xl pointer-events-none -z-0" />
        
        <div className="relative z-10 space-y-4 max-w-5xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-950 text-[#FF3366] flex items-center justify-center font-bold text-sm border border-red-300 dark:border-red-800/60 shadow-sm">
              <Flame className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold text-[#FF3366] uppercase tracking-wider bg-red-100 dark:bg-red-950/80 px-3 py-1 rounded-full border border-red-300 dark:border-red-800/60">
              The Whistleblower Chronicle &amp; Narrative Truth
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-tight">
            How Betaflux Exploited My Labor, Stole My Salary, and Hid Behind Civil Delay
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            This is not an ordinary startup shutdown or innocent cash flow bump. This was a <strong>calculated, ego-driven corporate default</strong>. I put in 12–16 hour workdays, built their DevOps vertical from the ground up, and delivered mission-critical cloud infrastructure and technical milestones for enterprise client accounts. In return, Betaflux directors fabricated 28 days of Loss of Pay (LOP), pocketed my deducted Income Tax (TDS), and retreated behind the 5–8 year delays of the Indian civil court system.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-[#1E1E1E] text-amber-800 dark:text-amber-300 px-3 py-1.5 rounded-lg border border-amber-200 dark:border-amber-900/60">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Public Purpose: Client Due Diligence &amp; Candidate Protection
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-[#1E1E1E] text-red-700 dark:text-red-300 px-3 py-1.5 rounded-lg border border-red-200 dark:border-red-900/60">
              <FileWarning className="w-3.5 h-3.5 text-[#FF3366]" />
              ₹57.26L Recovery Claim in Civil Suit OS 8868/2025
            </span>
          </div>
        </div>
      </div>

      {/* Chapter Selection Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {chapters.map((ch) => {
          const isSelected = ch.id === selectedChapterId;
          return (
            <button
              key={ch.id}
              onClick={() => setSelectedChapterId(ch.id)}
              className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-3 cursor-pointer ${
                isSelected
                  ? 'bg-red-50/40 dark:bg-[#181818] border-[#FF3366] ring-1 ring-[#FF3366]/40 shadow-lg shadow-black/10 dark:shadow-black/60'
                  : 'bg-white dark:bg-[#141414] border-slate-200 dark:border-[#262626] text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-[#1C1C1C] hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#FF3366] text-white' : 'bg-slate-100 dark:bg-[#262626] text-slate-600 dark:text-slate-400'
                  }`}>
                    Chapter {ch.chapterNumber}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{ch.period}</span>
                </div>
                <h3 className={`text-sm font-bold leading-snug line-clamp-2 ${
                  isSelected ? 'text-slate-900 dark:text-white font-extrabold' : 'text-slate-800 dark:text-slate-200'
                }`}>
                  {ch.title}
                </h3>
              </div>

              <div className="flex items-center text-xs font-semibold text-[#FF3366]">
                <span>{isSelected ? 'Reading Chapter' : 'Read Chapter'}</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Chapter Full Display */}
      {currentChapter && (
        <div className="p-6 sm:p-9 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl shadow-xl space-y-8 animate-in fade-in duration-200">
          {/* Chapter Top Title Banner */}
          <div className="border-b border-slate-200 dark:border-[#262626] pb-6 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#FF3366] bg-red-100 dark:bg-red-950/80 px-3 py-1 rounded-md border border-red-300 dark:border-red-800/60 uppercase tracking-wider">
                Chapter {currentChapter.chapterNumber} of 4 • {currentChapter.period}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Verified Documentary Record
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-[#F8FAFC] tracking-tight">
              {currentChapter.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {currentChapter.subtitle}
            </p>
          </div>

          {/* Key Callout Boxes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* The Scam Mechanism */}
            <div className="p-5 bg-red-50/40 dark:bg-[#181818] border border-red-200 dark:border-red-900/60 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366] uppercase tracking-wider">
                <FileWarning className="w-4 h-4 text-[#FF3366]" />
                <span>The Calculated Corporate Scam Mechanism</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentChapter.theScamMechanism}
              </p>
            </div>

            {/* The Personal & Financial Toll */}
            <div className="p-5 bg-amber-50/40 dark:bg-[#181818] border border-amber-200 dark:border-amber-900/60 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                <HeartCrack className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>The Real Human &amp; Financial Toll</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentChapter.emotionalAndFinancialToll}
              </p>
            </div>
          </div>

          {/* Key Deceptions Checklist */}
          <div className="space-y-3 p-5 bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-[#262626] rounded-xl">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              Documented Acts of Deceit &amp; Manipulation:
            </h4>
            <div className="space-y-2">
              {currentChapter.keyDeceptions.map((dec, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-red-100 dark:bg-red-950 text-[#FF3366] border border-red-300 dark:border-red-800/60 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    ✗
                  </span>
                  <span className="leading-relaxed">{dec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Narrative Text */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              The Full Chronicle &amp; Experience:
            </h4>
            <div className="prose max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 bg-slate-50 dark:bg-[#0F0F0F] p-6 rounded-xl border border-slate-200 dark:border-[#262626]">
              {currentChapter.fullNarrative.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Public Warning for Clients */}
          <div className="p-5 sm:p-6 bg-gradient-to-r from-red-50 via-slate-50 to-amber-50 dark:from-red-950 dark:via-slate-900 dark:to-amber-950 border border-amber-200 dark:border-amber-900/60 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <Building2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Public Due Diligence Warning for Prospective Clients</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {currentChapter.clientWarningMessage}
            </p>
          </div>

          {/* Linked Evidence Documents */}
          {currentChapter.evidenceRefIds.length > 0 && (
            <div className="pt-4 border-t border-slate-200 dark:border-[#262626] space-y-3">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                Primary Supporting Evidence Records (Drive Vault):
              </span>
              <div className="flex flex-wrap gap-2.5">
                {currentChapter.evidenceRefIds.map((docId) => {
                  const doc = evidenceDocs.find((d) => d.id === docId);
                  if (!doc) return null;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => onSelectEvidence(doc.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 dark:bg-[#1C1C1C] hover:bg-slate-200 dark:hover:bg-[#262626] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#333333] transition-all shadow-sm cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      <span>{doc.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="pt-6 border-t border-slate-200 dark:border-[#262626] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onExploreAdvisory}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-colors cursor-pointer"
            >
              Inspect Client &amp; Candidate Risk Portal →
            </button>

            <button
              onClick={onExploreEvidence}
              className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-[#1C1C1C] hover:bg-slate-200 dark:hover:bg-[#262626] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#333] transition-colors cursor-pointer"
            >
              Browse Complete Evidence Vault (/betaflux) →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
