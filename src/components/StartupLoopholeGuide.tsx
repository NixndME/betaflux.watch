import React, { useState } from 'react';
import { 
  Scale, 
  AlertOctagon, 
  CheckCircle, 
  FileCheck, 
  HelpCircle, 
  ShieldAlert, 
  Building, 
  ArrowRight,
  ExternalLink,
  BookOpen,
  FileText,
  Share2,
  FileWarning,
  EyeOff,
  Flame,
  ShieldCheck,
  Lock,
  Landmark,
  Gavel
} from 'lucide-react';

interface StartupLoopholeGuideProps {
  onExploreSocial: () => void;
  onExploreBattle: () => void;
  onExploreEvidence: () => void;
}

export const StartupLoopholeGuide: React.FC<StartupLoopholeGuideProps> = ({
  onExploreSocial,
  onExploreBattle,
  onExploreEvidence,
}) => {
  const [selectedModule, setSelectedModule] = useState<'loophole' | 'legal_blindspot' | 'myths' | 'accountability'>('loophole');

  return (
    <div className="space-y-6" id="startup-loophole-guide-section">
      {/* Section Header */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/80 text-amber-400 flex items-center justify-center font-bold">
              <Scale className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
                The Scam Anatomy: Loopholes, Legal Help &amp; Broken Systems
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                How corporate startups plan wage theft with legal assistance, exploit civil court delays, and why the legal system fails to see the full picture.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onExploreBattle}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-red-600 to-[#FF3366] hover:from-red-500 hover:to-pink-500 text-white shadow-sm transition-all"
          >
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>Read Scam Narrative</span>
          </button>
        </div>
      </div>

      {/* Module Selector Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { id: 'loophole', title: 'The 4-Stage Scam Playbook', icon: AlertOctagon },
          { id: 'legal_blindspot', title: 'The Legal System Blindspot', icon: EyeOff },
          { id: 'myths', title: 'Promoter Myths vs Law', icon: HelpCircle },
          { id: 'accountability', title: 'Public Truth & Accountability', icon: ShieldCheck },
        ].map((mod) => {
          const Icon = mod.icon;
          const isActive = selectedModule === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => setSelectedModule(mod.id as any)}
              className={`p-4 rounded-xl border text-left transition-all ${
                isActive
                  ? 'bg-[#181818] border-[#FF3366] ring-1 ring-[#FF3366]/40 shadow-lg'
                  : 'bg-[#141414] border-[#262626] text-slate-400 hover:bg-[#1A1A1A] hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FF3366]' : 'text-slate-500'}`} />
                <span className={`text-xs font-bold ${isActive ? 'text-white font-black' : 'text-slate-300'}`}>
                  {mod.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Module Content */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl space-y-6">
        {/* Module 1: The Loophole Exploit */}
        {selectedModule === 'loophole' && (
          <div className="space-y-6">
            <div className="border-b border-[#262626] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF3366] bg-red-950/80 px-2.5 py-1 rounded-md border border-red-800">
                Pattern Analysis
              </span>
              <h3 className="text-xl font-black text-white mt-2">
                The 4-Stage Corporate Scam Playbook
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                How certified corporate scammers plan with legal guidance to extract talent, time, and money without paying what was contractually promised:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Stage 1: The Hiring Bait &amp; ₹90L CTC Promise</span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">Onboarding</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  They commit competitive salaries (₹80L base + ₹10L bonus at ₹90 LPA CTC) and upfront joining bonuses in formal offer contracts to induce resignation from stable companies. Once the employee joins, bonus payouts are indefinitely delayed and salary payments stopped.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Stage 2: 12-16 Hr Workdays &amp; Unpaid Architecture Delivery</span>
                  <span className="text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">Month 2 - 4</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Monthly salaries are frozen while leadership extracts mission-critical cloud architectures, DevOps automation verticals, and key client milestones under constant verbal reassurances that <em>"all pending dues will be cleared next week."</em>
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Stage 3: The Deceptive Document Trap &amp; 28-Day LOP</span>
                  <span className="text-[10px] font-bold text-[#FF3366] bg-red-950 px-2 py-0.5 rounded border border-red-800">Crisis Point</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Management fabricates 28 days fake "Loss of Pay" on November 2023 payslips to slash salary, then pressures the employee to sign settlement declarations under false promises of salary release while management deliberately refuses to countersign.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Stage 4: The "Civil Dispute" Shield &amp; 5-8 Year Delay</span>
                  <span className="text-[10px] font-bold text-[#FF3366] bg-red-950 px-2 py-0.5 rounded border border-red-800">Exit &amp; Retaliation</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Promoters weaponize background verification and tell unpaid staff: <em>"Go file a civil suit; police won't touch employment matters."</em> They exploit 5-8 year civil court backlogs while knowing the employee faces immediate financial ruin.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Module 2: The Legal System Blindspot */}
        {selectedModule === 'legal_blindspot' && (
          <div className="space-y-6">
            <div className="border-b border-[#262626] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800">
                Systemic Flaws
              </span>
              <h3 className="text-xl font-black text-white mt-2">
                Why the Legal System Fails to See the Full Picture
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                How corporate entities use legal loopholes to fragment premeditated fraud into isolated contractual technicalities:
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Gavel className="w-4 h-4 text-amber-400" />
                  1. The "Civil Dispute" Dismissal Loophole
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When a victimized professional approaches police after months of unpaid labor, authorities routinely categorize it as: <em>"This is a contractual employer-employee civil dispute, go to civil court."</em> This ignores the criminal mens rea (premeditated fraudulent inducement under Sec 406/420 IPC) and allows serial wage thieves to operate unchecked.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-amber-400" />
                  2. Asymmetry of Resources &amp; 5-8 Year Court Timelines
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A multi-year commercial civil suit costs lakhs in legal counsel and court fees. Corporate founders use enterprise revenues to hire lawyers who file repeated adjournment applications, knowing the unpaid engineer faces personal loan defaults, EMIs, and severe financial distress.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#FF3366]" />
                  3. Ignored Tax Non-Compliance (TDS Section 276B)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  While civil courts move at glacial speed, companies deduct ₹14.58L on salary slips but remit only ₹3.89L to the Income Tax Department, pocketing the difference. Although Section 276B provides 3 months to 7 years rigorous imprisonment, formal enforcement requires relentless whistleblower action.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#FF3366]" />
                  4. Ghost Corporate Addresses &amp; Vacated Offices (Section 12 Companies Act)
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Betaflux Consulting Private Limited (CIN: <span className="font-mono text-amber-400">U72900KA2018PTC115926</span>) vacated its physical registered office (Suite 204, 27th Main, HSR Layout, Sector 1, Bengaluru) in early 2024 without filing mandatory MCA Form INC-22. When legal notices or police summons arrive, postal envelopes return marked <em>"Left / Vacated"</em>, severely frustrating court service of process.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Module 3: Promoter Myths vs Law */}
        {selectedModule === 'myths' && (
          <div className="space-y-6">
            <div className="border-b border-[#262626] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800">
                Deceptions Debunked
              </span>
              <h3 className="text-xl font-black text-white mt-2">
                Corporate Scammer Excuses vs. Legal Reality
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="text-xs font-bold text-[#FF3366] uppercase tracking-wider">
                  ❌ Promoter Falsehood:
                </div>
                <p className="text-xs font-semibold text-white italic">
                  "We promised to clear dues verbally, but we can't pay joining bonuses now."
                </p>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider pt-2 border-t border-[#262626]">
                  ✓ Legal Reality:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Offer letters and signed appointment contracts are legally binding instruments under the Indian Contract Act. Unilateral repudiation of promised joining bonuses constitutes a fundamental breach of contract and actionable fraud.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="text-xs font-bold text-[#FF3366] uppercase tracking-wider">
                  ❌ Promoter Falsehood:
                </div>
                <p className="text-xs font-semibold text-white italic">
                  "You signed a paper, so your salary and bonus are settled even if we didn't sign."
                </p>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider pt-2 border-t border-[#262626]">
                  ✓ Legal Reality:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A one-sided document where management extracted an employee's signature under false representations of immediate payment, and deliberately withheld their own signature while keeping the funds, is void for lack of consideration and tainted by fraudulent inducement.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF3366] uppercase tracking-wider">
                  ❌ Promoter Falsehood:
                </div>
                <p className="text-xs font-semibold text-white italic">
                  "If you talk to our clients or post online, we will sue you for defamation."
                </p>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider pt-2 border-t border-[#262626]">
                  ✓ Legal Reality:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Truthful publication supported by documentary proof (contracts, bank statements showing ₹0 pay, Form 26AS mismatch) for public due diligence is protected under Exception 1 to Section 499 IPC / Section 356 BNS and Article 19(1)(a).
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF3366] uppercase tracking-wider">
                  ❌ Promoter Falsehood:
                </div>
                <p className="text-xs font-semibold text-white italic">
                  "No Relieving Letter unless you waive all your pending salary and bonus."
                </p>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider pt-2 border-t border-[#262626]">
                  ✓ Legal Reality:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High Courts have established that experience credentials cannot be used as bargaining chips to extort employees into waiving earned compensation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Module 4: Public Truth & Accountability */}
        {selectedModule === 'accountability' && (
          <div className="space-y-6">
            <div className="border-b border-[#262626] pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-800">
                The Public Cause
              </span>
              <h3 className="text-xl font-black text-white mt-2">
                Why Public Exposure is the Only Real Shield Against Certified Scammers
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                When legal loopholes allow bad actors to hide, public truth and community awareness ensure they cannot easily prey on new victims:
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">
                  1. Protecting Prospective Clients from Project Disasters
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  When clients see how Betaflux treats their core engineering team and misappropriates funds, they think twice before handing over critical software roadmaps and advance retainers.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">
                  2. Warning Developers Before They Sign Offer Letters
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Engineers will know the truth behind the fake joining bonus promises and salary stoppage patterns, saving them from debt, stress, and career disruption.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <h4 className="text-sm font-bold text-white">
                  3. Creating Irreversible Reputational Accountability
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  They may hide behind the slow civil courts, but they cannot hide from verified, factual public records that document their exact conduct.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreSocial}
                className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-red-600 to-[#FF3366] hover:from-red-500 hover:to-pink-500 text-white shadow-sm transition-colors"
              >
                View Client &amp; Candidate Warning Toolkit →
              </button>
              <button
                onClick={onExploreEvidence}
                className="px-5 py-2.5 text-xs font-semibold rounded-xl bg-[#1C1C1C] hover:bg-[#262626] text-slate-200 border border-[#333] transition-colors"
              >
                Inspect Primary Evidence Records →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
