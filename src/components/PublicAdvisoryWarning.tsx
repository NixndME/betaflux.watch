import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Users, 
  Briefcase, 
  Building2, 
  CheckSquare, 
  Download, 
  Lock, 
  ExternalLink, 
  Scale, 
  FileText, 
  CheckCircle2, 
  UserX, 
  AlertOctagon,
  Flame,
  FileCheck2,
  BadgeAlert,
  ArrowRight
} from 'lucide-react';
import { CASE_EVIDENCE_DOCS, TIMELINE_MILESTONES, CASE_FINANCIAL_SUMMARY } from '../data/caseData';

interface PublicAdvisoryWarningProps {
  onExploreTimeline: () => void;
  onExploreEvidence: () => void;
  onExploreBattle: () => void;
}

export const PublicAdvisoryWarning: React.FC<PublicAdvisoryWarningProps> = ({
  onExploreTimeline,
  onExploreEvidence,
  onExploreBattle,
}) => {
  const [activeAudience, setActiveAudience] = useState<'customers' | 'candidates' | 'vendors'>('customers');

  const handleDownloadSanitizedDossier = () => {
    const sanitizedDossier = {
      dossierTitle: 'Betaflux Exposed: Corporate Due Diligence & Public Risk Dossier (Sanitized)',
      entityTarget: {
        entityName: CASE_FINANCIAL_SUMMARY.entityName,
        cin: CASE_FINANCIAL_SUMMARY.cin,
        directors: CASE_FINANCIAL_SUMMARY.directors,
        unregisteredSubsidiary: CASE_FINANCIAL_SUMMARY.unregisteredSubsidiary,
        activeCivilSuit: CASE_FINANCIAL_SUMMARY.civilSuitRef,
        incomeTaxWarningNotice: CASE_FINANCIAL_SUMMARY.incomeTaxNoticeRef,
        totalClaimAmount: CASE_FINANCIAL_SUMMARY.totalCivilClaimOS8868,
        unpaidSalaryArrears: CASE_FINANCIAL_SUMMARY.totalUnpaidSalaryDues,
      },
      generatedDate: new Date().toISOString().split('T')[0],
      disclaimer: 'Strictly sanitized public record. All personal identifiable information (PAN numbers, residential addresses, personal bank accounts, phone numbers) have been redacted to protect privacy and uphold statutory defense standards under Exception 1 to Section 499 IPC (Section 356 BNS 2023) and Article 19(1)(a) of the Constitution of India.',
      coreFindings: {
        summary: 'Betaflux leadership induced employment through promises of fixed salary (₹80L base + ₹10L bonus at ₹90 LPA CTC) and consulting compensation, extracted 12-16 hr workdays to build DevOps infrastructure and deliver mission-critical technical milestones across enterprise accounts, then systematically withheld salary for 6 consecutive months and pocketed employee TDS.',
        scamTactics: [
          'Fabricated Loss of Pay (LOP): Marked 28 days fake LOP on November 2023 payslips to slash pay despite 100% active attendance.',
          'The Document Signing Trap: Pressuring employees to sign declarations under false promises of salary release while management deliberately refuses to countersign.',
          'The Civil Dispute Shield: Exploiting 5-8 year civil court backlogs while knowing police categorize salary theft as contractual breach.',
          'Statutory TDS Misappropriation (Section 276B): Deducting ₹14.58L on payslips but depositing only ₹3.89L to the Government, pocketing the shortfall.'
        ]
      },
      candidateChecklist: [
        'Demand 12 months audited bank statements before accepting senior offer',
        'Require rolling 3-month salary escrow or bank guarantee',
        'Check Form 26AS/TRACES on Day 30 to confirm TDS deposit',
        'Ensure mutual termination notice and signed bilateral agreement'
      ],
      clientChecklist: [
        'Verify vendor solvency and active MCA INC-22 registered office status',
        'Conduct IP audit to verify if code was developed under unpaid wage conditions',
        'Require developer wage payment certificates before milestone disbursements'
      ],
      chronologyMilestones: TIMELINE_MILESTONES.map(m => ({
        date: m.date,
        title: m.title,
        status: m.writtenAgreementStatus,
        summary: m.description,
        keyTakeaway: m.keyTakeaway
      })),
      documentaryEvidenceIndex: CASE_EVIDENCE_DOCS.map(d => ({
        id: d.id,
        title: d.title,
        category: d.category,
        date: d.date,
        snippets: d.snippets,
        keyPoints: d.keyPoints
      }))
    };

    const blob = new Blob([JSON.stringify(sanitizedDossier, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Betaflux_Due_Diligence_Risk_Dossier_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <div className="space-y-6" id="public-advisory-section">
      {/* Primary Alert Banner */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-amber-900/60 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-800 text-amber-400 flex items-center justify-center font-bold shadow-sm">
                <ShieldAlert className="w-5 h-5 stroke-[2.5]" />
              </span>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800">
                Commercial &amp; Employment Due Diligence Advisory
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] tracking-tight">
              Risk Caution for Enterprise Software Buyers, Clients &amp; Job Seekers
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Before you award enterprise IT contracts, wire project retainers, or accept employment offers from <strong className="text-white">Betaflux Consulting Private Limited</strong> (CIN: <span className="font-mono text-amber-400">U72900KA2018PTC115926</span>), review the documented record of <strong className="text-red-400">₹57.26L civil claims (OS 8868/2025)</strong>, <strong className="text-red-400">₹39.33L unpaid salary arrears</strong>, unremitted statutory TDS, and vacated corporate offices.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col items-start gap-2.5 shrink-0">
            <button
              onClick={handleDownloadSanitizedDossier}
              className="flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 rounded-xl shadow-sm active:scale-[0.98] transition-all"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Download Due Diligence Dossier (.json)</span>
            </button>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sanitized Evidence • Redacted Privacy Protection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Navigation Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <button
          onClick={() => setActiveAudience('customers')}
          className={`p-5 text-left rounded-2xl border transition-all ${
            activeAudience === 'customers'
              ? 'bg-[#181818] border-[#FF3366] ring-1 ring-[#FF3366]/40 shadow-lg shadow-black/50'
              : 'bg-[#141414] border-[#262626] text-slate-400 hover:bg-[#1A1A1A] hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Building2 className={`w-4 h-4 ${activeAudience === 'customers' ? 'text-[#FF3366]' : 'text-slate-500'}`} />
              <span className={`text-xs font-bold tracking-tight ${activeAudience === 'customers' ? 'text-white font-black' : 'text-slate-300'}`}>
                For Enterprise Clients &amp; Buyers
              </span>
            </div>
            {activeAudience === 'customers' && (
              <span className="w-2 h-2 rounded-full bg-[#FF3366]" />
            )}
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            Severe risk of sudden developer abandonment, IP ownership encumbrance, and unfiled registered office relocations.
          </p>
        </button>

        <button
          onClick={() => setActiveAudience('candidates')}
          className={`p-5 text-left rounded-2xl border transition-all ${
            activeAudience === 'candidates'
              ? 'bg-[#181818] border-[#FF3366] ring-1 ring-[#FF3366]/40 shadow-lg shadow-black/50'
              : 'bg-[#141414] border-[#262626] text-slate-400 hover:bg-[#1A1A1A] hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users className={`w-4 h-4 ${activeAudience === 'candidates' ? 'text-amber-400' : 'text-slate-500'}`} />
              <span className={`text-xs font-bold tracking-tight ${activeAudience === 'candidates' ? 'text-white font-black' : 'text-slate-300'}`}>
                For Job Seekers &amp; Tech Candidates
              </span>
            </div>
            {activeAudience === 'candidates' && (
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            )}
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            Joining bonus baiting, fabricated 28-day LOP deductions, unremitted TDS theft, and unsigned document traps.
          </p>
        </button>

        <button
          onClick={() => setActiveAudience('vendors')}
          className={`p-5 text-left rounded-2xl border transition-all ${
            activeAudience === 'vendors'
              ? 'bg-[#181818] border-[#FF3366] ring-1 ring-[#FF3366]/40 shadow-lg shadow-black/50'
              : 'bg-[#141414] border-[#262626] text-slate-400 hover:bg-[#1A1A1A] hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Briefcase className={`w-4 h-4 ${activeAudience === 'vendors' ? 'text-indigo-400' : 'text-slate-500'}`} />
              <span className={`text-xs font-bold tracking-tight ${activeAudience === 'vendors' ? 'text-white font-black' : 'text-slate-300'}`}>
                For Freelancers &amp; Vendors
              </span>
            </div>
            {activeAudience === 'vendors' && (
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
            )}
          </div>
          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            Invoice default patterns, asset withholding, and exploiting civil arbitration delay to avoid paying contractors.
          </p>
        </button>
      </div>

      {/* Advisory Content Cards */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl space-y-6">
        {activeAudience === 'customers' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3.5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF3366]" />
                Critical Commercial Risks When Contracting Software Development
              </h3>
              <span className="text-xs font-bold text-[#FF3366] bg-red-950 px-2.5 py-1 rounded-md border border-red-800">
                Enterprise Caution Alert
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366]">
                  <AlertOctagon className="w-4 h-4 text-[#FF3366]" />
                  <span>1. Core Developers Forced Out Due to Wage Theft</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Betaflux withholds monthly compensation for months (issued ₹0 salary credits for 6 consecutive months to key engineering leadership). When unpaid engineers inevitably resign, client production codebases are left abandoned without handover.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366]">
                  <AlertOctagon className="w-4 h-4 text-[#FF3366]" />
                  <span>2. Intellectual Property &amp; Copyright Clouds</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Under Indian and international copyright jurisprudence, intellectual property created under conditions of fundamental material breach (non-payment of wages) can trigger legal encumbrance and contested ownership over software delivered to clients.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366]">
                  <AlertOctagon className="w-4 h-4 text-[#FF3366]" />
                  <span>3. Statutory Tax &amp; Bank Freeze Jeopardy</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  With active Section 276B criminal warning notices from Income Tax Ward 1(1) (#16942293) and ₹57.26L civil claims, the company risks statutory asset attachments, placing client advances and project escrow in legal peril.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366]">
                  <AlertOctagon className="w-4 h-4 text-[#FF3366]" />
                  <span>4. Unregistered Entities &amp; Vacated Offices</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Betaflux operates unregistered brand fronts (e.g. Haven App at havenapp.co) and vacated its physical HSR Layout corporate office without mandatory MCA Form INC-22 filings, complicating legal service and warranty fulfillment.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeAudience === 'candidates' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3.5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400" />
                Job Seeker Due Diligence: Red Flags &amp; Protection Checklist
              </h3>
              <span className="text-xs font-bold text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-800">
                Candidate Warning
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                  <span>1. Promised Joining Bonus &amp; CTC Manipulation</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Betaflux commits high CTC (₹90 LPA CTC / ₹80L base + ₹10L bonus) on formal letters to induce candidate resignation from stable jobs. Once onboarded, bonus payouts are withheld and monthly salaries abruptly defaulted.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                  <span>2. Fabricated Loss of Pay (LOP) Deductions</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Watch your monthly payslips. Betaflux marked 28 days fake "Loss of Pay" on November 2023 payslips to slash compensation from ₹6.66L to ₹1.8L despite 100% active attendance.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                  <span>3. Check Form 26AS for Unremitted TDS</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  They deduct statutory TDS on monthly payslips to make payroll look compliant, but pocket the funds rather than remitting them to the Income Tax Department (violating Section 276B).
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <CheckSquare className="w-4 h-4 text-amber-400" />
                  <span>4. Beware One-Sided Unsigned Document Traps</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  If management pressures you to sign any settlement waiver or NDA with the promise of clearing pending salary arrears, note that they keep your signed copy, refuse to sign it themselves, and withhold payment.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeAudience === 'vendors' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-[#262626] pb-3.5">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                Vendor &amp; Contractor Risk Mitigation Protocol
              </h3>
              <span className="text-xs font-bold text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded-md border border-indigo-800">
                Payment Caution
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                  <CheckSquare className="w-4 h-4 text-indigo-400" />
                  <span>1. Mandate 100% Upfront or Escrow Disbursements</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Never provide cloud architecture, design assets, or custom coding on Net-30/Net-60 terms. Invoices are routinely ignored once deliverables are merged.
                </p>
              </div>

              <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400">
                  <CheckSquare className="w-4 h-4 text-indigo-400" />
                  <span>2. Retain Source Code &amp; Infrastructure Keys</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Do not hand over root AWS/GCP administrative credentials, DNS records, or production repositories until all milestone invoices clear into your bank account.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Action Navigation Buttons */}
        <div className="pt-4 border-t border-[#262626] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Review the verified chronicle of events and primary exhibits:</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onExploreBattle}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-gradient-to-r from-red-600 to-[#FF3366] hover:from-red-500 hover:to-pink-500 text-white shadow-sm transition-colors"
            >
              Read Scam Narrative →
            </button>
            <button
              onClick={onExploreEvidence}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#1C1C1C] hover:bg-[#262626] text-slate-200 border border-[#333] transition-colors"
            >
              Inspect Evidence Vault ({CASE_EVIDENCE_DOCS.length} Exhibits) →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
