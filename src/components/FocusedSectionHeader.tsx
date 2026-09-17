import React from 'react';
import { NavTabType } from './Navbar';
import { 
  ArrowLeft, 
  Flame, 
  IndianRupee, 
  ShieldAlert, 
  FolderOpen, 
  Scale, 
  Clock,
  Sparkles
} from 'lucide-react';

interface FocusedSectionHeaderProps {
  activeTab: NavTabType;
  onSelectTab: (tab: NavTabType) => void;
  onBackToOverview: () => void;
  evidenceCount: number;
}

export const FocusedSectionHeader: React.FC<FocusedSectionHeaderProps> = ({
  activeTab,
  onSelectTab,
  onBackToOverview,
  evidenceCount,
}) => {
  const getTabDetails = (tab: NavTabType) => {
    switch (tab) {
      case 'financial':
        return {
          title: 'Financial Claim & Tax Fraud Ledger',
          subtitle: 'Detailed forensic breakdown of ₹57,26,855 civil suit claim, unpaid salary arrears, and unremitted TDS.',
          icon: <IndianRupee className="w-5 h-5" />,
          badge: 'CIVIL SUIT OS 8868/2025',
          colorClass: 'from-red-600 to-rose-700',
        };
      case 'battle':
        return {
          title: 'The Battle & Struggle Chronicle',
          subtitle: 'A 14-month whistleblower timeline documenting resistance against founder evasion and exploitation.',
          icon: <Flame className="w-5 h-5 text-amber-400" />,
          badge: 'WHISTLEBLOWER RESISTANCE',
          colorClass: 'from-indigo-600 to-violet-700',
        };
      case 'advisory':
        return {
          title: 'Client & Candidate Caution Advisory',
          subtitle: 'Formal warning regarding abandoned registered offices, ghost corporate premises, and operational risks.',
          icon: <ShieldAlert className="w-5 h-5 text-[#FF3366]" />,
          badge: 'HIGH OPERATIONAL RISK',
          colorClass: 'from-rose-600 to-amber-700',
        };
      case 'drive':
        return {
          title: `Primary Evidence Vault (${evidenceCount} Exhibits)`,
          subtitle: 'Authentic employment contracts, payslips, WhatsApp admissions, zero-salary bank records, and IT notices.',
          icon: <FolderOpen className="w-5 h-5 text-emerald-400" />,
          badge: 'PRIMARY COURT EXHIBITS',
          colorClass: 'from-emerald-600 to-teal-700',
        };
      case 'scam_anatomy':
        return {
          title: 'Anatomy of Startup Wage Theft & Legal Loopholes',
          subtitle: 'Exposing how rogue founders exploit civil delays, Form INC-22 non-compliance, and TDS deductions.',
          icon: <Scale className="w-5 h-5 text-indigo-400" />,
          badge: 'SYSTEM EXPLOITATION EXPOSED',
          colorClass: 'from-amber-600 to-orange-700',
        };
      case 'timeline':
        return {
          title: 'Chronological Dispute & Violation Timeline',
          subtitle: 'Date-by-date verified milestones covering pre-joining consultancies, salary halts, and legal summons.',
          icon: <Clock className="w-5 h-5 text-sky-400" />,
          badge: 'CHRONOLOGICAL RECORD',
          colorClass: 'from-slate-700 to-slate-900',
        };
      default:
        return {
          title: 'Dossier Overview',
          subtitle: 'Public Interest Whistleblower Dossier',
          icon: <Sparkles className="w-5 h-5" />,
          badge: 'OVERVIEW',
          colorClass: 'from-slate-700 to-slate-900',
        };
    }
  };

  const current = getTabDetails(activeTab);

  const tabs: { id: NavTabType; label: string; icon: React.ReactNode }[] = [
    { id: 'financial', label: 'Financials (₹57.26L)', icon: <IndianRupee className="w-3.5 h-3.5" /> },
    { id: 'battle', label: 'The Fight', icon: <Flame className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'advisory', label: 'Client Caution', icon: <ShieldAlert className="w-3.5 h-3.5" /> },
    { id: 'drive', label: 'Evidence Vault', icon: <FolderOpen className="w-3.5 h-3.5 text-emerald-400" /> },
    { id: 'scam_anatomy', label: 'Legal Loopholes', icon: <Scale className="w-3.5 h-3.5 text-indigo-400" /> },
    { id: 'timeline', label: 'Timeline', icon: <Clock className="w-3.5 h-3.5 text-sky-400" /> },
  ];

  return (
    <div className="bg-white dark:bg-[#141414] border-b border-slate-200 dark:border-[#262626] py-5 px-4 sm:px-6 lg:px-8 mb-6 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Breadcrumb & Return to Overview Action */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-[#262626] pb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <button
              onClick={onBackToOverview}
              className="hover:text-[#FF3366] transition-colors flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300 font-bold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Full Dossier Overview</span>
            </button>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="text-slate-900 dark:text-white font-bold">{current.title.split('(')[0].trim()}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 dark:bg-[#1C1C1C] border border-slate-200 dark:border-[#262626] px-2.5 py-1 rounded-md text-amber-700 dark:text-amber-400">
              {current.badge}
            </span>
            <button
              onClick={onBackToOverview}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#222222] hover:bg-slate-200 dark:hover:bg-[#2A2A2A] text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-[#333] transition-all cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#FF3366]" />
              <span>Back to Overview</span>
            </button>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${current.colorClass} text-white flex items-center justify-center shrink-0 shadow-md`}>
              {current.icon}
            </div>
            <div className="min-w-0">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {current.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5 leading-relaxed max-w-3xl">
                {current.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Inline Quick Tab Bar (Fast switching without losing context) */}
        <div className="pt-2 border-t border-slate-200 dark:border-[#262626] flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
          <button
            onClick={onBackToOverview}
            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-[#1C1C1C] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#262626] border border-slate-200 dark:border-[#262626] transition-all shrink-0 cursor-pointer"
          >
            ← Overview
          </button>
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg transition-all shrink-0 cursor-pointer border ${
                  isActive
                    ? 'bg-[#FF3366] text-white font-bold border-[#FF3366] shadow-xs'
                    : 'bg-white dark:bg-[#181818] text-slate-600 dark:text-slate-400 border-slate-200 dark:border-[#262626] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#222222]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
