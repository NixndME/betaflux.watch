import React from 'react';
import { 
  ShieldCheck, 
  FolderOpen, 
  Flame, 
  ShieldAlert, 
  AlertTriangle, 
  IndianRupee, 
  Scale, 
  FileSpreadsheet, 
  ArrowRight, 
  ExternalLink, 
  Lock, 
  Building2, 
  FileCheck2, 
  BadgeAlert, 
  Award 
} from 'lucide-react';
import { CASE_FINANCIAL_SUMMARY } from '../data/caseData';

interface HeroBannerProps {
  onExploreBattle: () => void;
  onExploreFinancial: () => void;
  onExploreAdvisory: () => void;
  onExploreVault: () => void;
  onExploreLegal: () => void;
  totalEvidenceCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreBattle,
  onExploreFinancial,
  onExploreAdvisory,
  onExploreVault,
  onExploreLegal,
  totalEvidenceCount,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 bg-slate-50 dark:bg-[#0A0A0A] border-b border-slate-200 dark:border-[#262626]">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-900/15 rounded-full blur-[120px] pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-amber-500/5 dark:bg-amber-900/10 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Top Status Indicators */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-[#262626] pb-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-950/80 text-[#FF3366] border border-red-200 dark:border-red-800/60 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-[#FF3366] animate-pulse" />
              Public Interest Whistleblower Dossier
            </span>
            <span className="text-xs font-mono font-bold bg-amber-50 dark:bg-[#141414] text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/60 px-2.5 py-1 rounded-md">
              betaflux.watch
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Target: <strong className="text-slate-900 dark:text-white">Betaflux Consulting Pvt Ltd</strong> (CIN: <span className="font-mono text-amber-600 dark:text-amber-400">U72900KA2018PTC115926</span>)
            </span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
            <span className="font-mono text-[11px] bg-red-50 dark:bg-[#141414] text-red-700 dark:text-red-400 px-2.5 py-0.5 rounded-md border border-red-200 dark:border-red-900/60 font-bold">
              ACTIVE SUIT: OS 8868/2025
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              Court &amp; IT Tax Exhibits
            </span>
          </div>
        </div>

        {/* Hero Header & Declarative Impact Typography */}
        <div className="max-w-5xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 shadow-sm">
            <BadgeAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>The Fight For Justice • Corporate Startup Wage Theft &amp; Tax Fraud</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[1.08] font-sans">
            Betaflux Exposed: <span className="bg-gradient-to-r from-[#FF3366] via-red-500 to-amber-500 bg-clip-text text-transparent">The Anatomy of Startup Wage Theft</span> &amp; Legal System Exploitation
          </h1>

          {/* Core Human Truth & Resolute Declaration */}
          <div className="p-5 sm:p-6 bg-white dark:bg-[#141414] border border-red-200 dark:border-red-900/50 rounded-2xl relative overflow-hidden shadow-xl space-y-3">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#FF3366] to-amber-500" />
            <div className="flex items-center gap-2 text-xs font-black tracking-wider uppercase text-[#FF3366]">
              <Flame className="w-4 h-4" />
              <span>Whistleblower Declaration of Resistance</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              "I put in 12–16 hour workdays, built their DevOps vertical from the ground up, and delivered mission-critical cloud architecture across high-stakes enterprise client accounts. Instead of paying my rightful monthly salary, Betaflux founders (<strong className="text-slate-900 dark:text-white">Animesh Kumar</strong> and <strong className="text-slate-900 dark:text-white">Utkarsh Sinha</strong>) engaged in ego-driven evasion, payslip manipulation, and tax fraud. <strong className="text-[#FF3366]">I WILL NOT SHUT UP.</strong> I will fight this to my last breath through civil courts, tax enforcement, and relentless public exposure until every rupee of my rightful money is recovered."
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 border-t border-slate-200 dark:border-[#262626]">
              <span><strong>Claimant:</strong> Saravanan Arumugam (Aswath), <em>Director of Cloud &amp; DevOps</em></span>
              <span><strong>Contract:</strong> ₹90 LPA CTC (₹80L Base + ₹10L Bonus)</span>
              <span><strong>Civil Claim:</strong> ₹57,26,855 (OS 8868/2025)</span>
            </div>
          </div>
        </div>

        {/* Live Top Metric Cards (Exact Documented Numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 bg-white dark:bg-[#141414] border border-red-200 dark:border-red-900/60 rounded-2xl shadow-md space-y-2 hover:border-red-500 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-[#FF3366] uppercase tracking-wider">Civil Claim (OS 8868/2025)</span>
              <Scale className="w-4 h-4 text-red-500" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#FF3366] font-mono tracking-tight">₹57,26,855</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Total recovery claim before Bengaluru City Civil Court</div>
          </div>

          <div className="p-5 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl shadow-md space-y-2 hover:border-slate-400 dark:hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Unpaid Salary Arrears</span>
              <IndianRupee className="w-4 h-4 text-slate-500 dark:text-slate-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tight">₹39,33,328</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Consecutive defaults Nov 2023 – May 2024</div>
          </div>

          <div className="p-5 bg-white dark:bg-[#141414] border border-amber-200 dark:border-amber-900/60 rounded-2xl shadow-md space-y-2 hover:border-amber-500 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">Unremitted TDS (Sec 276B)</span>
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 font-mono tracking-tight">₹5.95L – ₹10.69L</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">IT Ward 1(1) Warning Notice #16942293</div>
          </div>

          <div className="p-5 bg-white dark:bg-[#141414] border border-purple-200 dark:border-purple-900/50 rounded-2xl shadow-md space-y-2 hover:border-purple-500 transition-colors">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider">Contracted Package</span>
              <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-3xl sm:text-4xl font-black text-purple-700 dark:text-purple-400 font-mono tracking-tight">₹90 LPA</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">₹80L Base + ₹10L Bonus (6 Months at ₹0 Pay)</div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            id="hero-btn-read-battle"
            onClick={onExploreBattle}
            className="flex items-center gap-2 px-6 py-3.5 font-bold text-sm text-white bg-gradient-to-r from-red-600 to-[#FF3366] hover:from-red-500 hover:to-pink-500 rounded-xl shadow-lg shadow-red-950/20 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Flame className="w-4 h-4 text-amber-300" />
            <span>Read The Scam Anatomy &amp; Narrative</span>
          </button>

          <button
            id="hero-btn-financial-ledger"
            onClick={onExploreFinancial}
            className="flex items-center gap-2 px-5 py-3.5 font-bold text-sm bg-white dark:bg-[#141414] hover:bg-slate-50 dark:hover:bg-[#1E1E1E] text-slate-800 dark:text-slate-100 border border-red-200 dark:border-red-900/60 hover:border-red-500 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <IndianRupee className="w-4 h-4 text-[#FF3366]" />
            <span>Verified Financial Ledger (₹57.26L Claim)</span>
          </button>

          <button
            id="hero-btn-client-advisory"
            onClick={onExploreAdvisory}
            className="flex items-center gap-2 px-5 py-3.5 font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Client &amp; Candidate Risk Portal</span>
          </button>

          <button
            id="hero-btn-explore-vault"
            onClick={onExploreVault}
            className="flex items-center gap-2 px-5 py-3.5 font-semibold text-sm bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#1E1E1E] hover:border-slate-400 dark:hover:border-slate-600 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <FolderOpen className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span>Evidence Vault ({totalEvidenceCount} Exhibits)</span>
          </button>

          <button
            id="hero-btn-legal-loopholes"
            onClick={onExploreLegal}
            className="flex items-center gap-2 px-5 py-3.5 font-semibold text-sm bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#1E1E1E] hover:border-slate-400 dark:hover:border-slate-600 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Scale className="w-4 h-4 text-[#FF3366]" />
            <span>Legal System Exploitation</span>
          </button>
        </div>

        {/* 3 Core System Exploitation Pillars (The Legal Shield, Tax Trap, Exhaustion Strategy) */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#262626]">
          <div className="mb-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Systemic Exploitation Playbook: How Predatory Founders Manipulate Legal Loopholes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl space-y-2.5 hover:border-red-500/70 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366] uppercase">
                <span className="w-6 h-6 rounded-lg bg-red-100 dark:bg-red-950 text-[#FF3366] flex items-center justify-center font-mono">1</span>
                <span>The "Civil Dispute" Shield</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">5–8 Year Court Delay Exploitation</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Founders exploit the fact that police treat wage theft as a breach of contract rather than criminal theft, forcing unpaid workers into multi-year civil suits while founders continue operations.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl space-y-2.5 hover:border-amber-500/70 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase">
                <span className="w-6 h-6 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono">2</span>
                <span>The Document &amp; Tax Trap</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Fabricated LOP &amp; TDS Withholding</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Fabricating 28 days fake "Loss of Pay" (LOP) despite 0 leaves, and deducting TDS on monthly payslips while withholding deposits from the Income Tax Department to starve employees of liquidity.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl space-y-2.5 hover:border-indigo-500/70 transition-colors">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase">
                <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-mono">3</span>
                <span>The Exhaustion Strategy</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Counting on Surrender by Attrition</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Predatory startups expect unpaid employees to fold under financial distress, legal expenses, and career exhaustion. This whistleblower dossier destroys their cloak of secrecy.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Immunity & Fair Whistleblower Defense Disclaimer */}
        <div className="p-4 bg-white dark:bg-[#141414] border border-amber-200 dark:border-amber-900/40 rounded-xl flex items-start gap-3 text-xs text-slate-700 dark:text-slate-300">
          <AlertTriangle className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-900 dark:text-white font-semibold">Statutory Defamation Immunity &amp; Constitutional Protection:</strong> This portal is published in the public interest and consumer/commercial due diligence pursuant to <strong className="text-amber-700 dark:text-amber-300">Article 19(1)(a) of the Constitution of India</strong> and <strong className="text-amber-700 dark:text-amber-300">Exception 1 to Section 499 of the Indian Penal Code (Section 356 Bharatiya Nyaya Sanhita, 2023)</strong>. All statements are backed by primary documentary records, court filings in Civil Suit <strong className="text-red-600 dark:text-red-400">OS 8868/2025</strong>, and official Income Tax Department Section 276B notices. Personal identifiers (PAN, home addresses, phone numbers) are automatically redacted for privacy.
          </p>
        </div>
      </div>
    </section>
  );
};
