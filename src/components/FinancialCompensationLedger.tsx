import React, { useState } from 'react';
import { CaseFinancialSummary } from '../types';
import { 
  IndianRupee, 
  AlertOctagon, 
  FileText, 
  Download, 
  ShieldCheck, 
  ArrowUpRight, 
  Flame, 
  HelpCircle,
  Building,
  CheckCircle2,
  Calendar,
  CreditCard,
  HeartCrack,
  FileSpreadsheet,
  AlertTriangle,
  Scale,
  BadgeAlert
} from 'lucide-react';

interface FinancialCompensationLedgerProps {
  financialSummary: CaseFinancialSummary;
  onExploreEvidence: () => void;
  onExploreBattle: () => void;
}

export const FinancialCompensationLedger: React.FC<FinancialCompensationLedgerProps> = ({
  financialSummary,
  onExploreEvidence,
  onExploreBattle,
}) => {
  const [activeTab, setActiveTab] = useState<'breakdown' | 'ledger' | 'tax' | 'call_transcript'>('breakdown');

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleExportFinancialData = () => {
    const data = {
      title: 'Betaflux Consulting Pvt Ltd - Verified Financial Claim & Tax Shortfall Dossier',
      entityInfo: {
        entityName: financialSummary.entityName,
        cin: financialSummary.cin,
        directors: financialSummary.directors,
        claimant: `${financialSummary.claimantName} (${financialSummary.claimantRole})`,
        tenure: financialSummary.tenure,
      },
      verifiedCaseSummary: {
        contractedAnnualCTC: financialSummary.offeredAnnualCtc,
        fixedBaseSalaryAnnual: financialSummary.fixedBaseSalary,
        fixedBaseMonthly: Math.round(financialSummary.fixedBaseSalary / 12),
        fixedAnnualBonus: financialSummary.fixedAnnualBonus,
        preJoiningConsultationDues: financialSummary.preJoiningDues,
        totalUnpaidSalaryDues: financialSummary.totalUnpaidSalaryDues,
        totalCivilSuitClaimOS8868: financialSummary.totalCivilClaimOS8868,
        tdsDeductedOnPayslips: financialSummary.tdsDeductedOnPayslips,
        tdsActuallyDepositedForm26AS: financialSummary.tdsActuallyDeposited,
        tdsStatutoryShortfallMin: financialSummary.tdsUnremittedShortfallMin,
        tdsStatutoryShortfallMax: financialSummary.tdsUnremittedShortfallMax,
        incomeTaxNoticeRef: financialSummary.incomeTaxNoticeRef,
        policeFirRef: financialSummary.policeFirRef,
        civilSuitRef: financialSummary.civilSuitRef,
        lossesDisclosedByBetafluxInHighCourt: financialSummary.companyLossesDisclosedInHC,
        revenueGeneratedByEmployee: financialSummary.clientContractRevenueGenerated,
      },
      monthlyDefaultLedger: financialSummary.ledgerRows,
      transparencyNote: 'All financial numbers and contractual defaults are 100% verified against primary employment contracts, certified bank statements, Form 26AS/TRACES tax filings, and Civil Suit OS 8868/2025 records. Personal PAN, residential address, and bank account numbers are redacted for privacy.',
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Betaflux_Civil_Claim_OS8868_Ledger_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <div className="space-y-6" id="financial-ledger-section">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-800 text-[#FF3366] flex items-center justify-center font-bold">
              <IndianRupee className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
                  Verified Compensation Ledger &amp; Tax Audit
                </h2>
                <span className="text-xs font-bold text-[#FF3366] bg-red-950/80 px-2.5 py-0.5 rounded-full border border-red-800">
                  {formatCurrency(financialSummary.totalCivilClaimOS8868)} Claim
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Contracted ₹90 LPA CTC (₹80L Fixed Base + ₹10L Bonus), ₹39,33,328 Unpaid Salary Arrears, and ₹5.95L+ Unremitted Statutory TDS.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleExportFinancialData}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl bg-[#1C1C1C] hover:bg-[#262626] text-slate-200 border border-[#333] transition-all"
            title="Download full audited financial JSON ledger"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Audit JSON</span>
          </button>

          <button
            onClick={onExploreBattle}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-red-600 to-[#FF3366] hover:from-red-500 hover:to-pink-500 text-white shadow-sm transition-all"
          >
            <Flame className="w-3.5 h-3.5 text-amber-300" />
            <span>Case Chronicle</span>
          </button>
        </div>
      </div>

      {/* Trust & Transparency Statement */}
      <div className="p-4 sm:p-5 bg-[#141414] border border-emerald-900/50 rounded-2xl flex items-start gap-3.5 text-xs text-slate-300">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1 leading-relaxed">
          <strong className="font-bold text-white block text-sm">
            Court &amp; Statutory Tax Verified Audit
          </strong>
          <p className="text-slate-300">
            All monetary figures, deductions, and claims below are directly taken from primary legal documents: the official Appointment Contract at ₹90 LPA CTC, Income Tax Ward 1(1) Notice (#16942293), Form 26AS/TRACES records, certified HSBC statements, recorded payroll transcripts, and the formal claim in <strong className="text-white font-semibold">Civil Suit OS 8868/2025</strong>. Personal identifiers (PAN, home address, account numbers) are automatically redacted for privacy.
          </p>
        </div>
      </div>

      {/* Key Financial Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Civil Suit Claim */}
        <div className="p-5 bg-[#141414] border border-red-900/60 rounded-2xl shadow-md space-y-2 relative overflow-hidden">
          <span className="text-[11px] font-bold text-[#FF3366] uppercase tracking-wider bg-red-950 px-2 py-0.5 rounded border border-red-800">
            Total Claim (OS 8868/2025)
          </span>
          <div className="text-2xl sm:text-3xl font-black text-[#FF3366] tracking-tight font-mono">
            {formatCurrency(financialSummary.totalCivilClaimOS8868)}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Unpaid salary arrears + bonus + statutory claims + 18% commercial interest.
          </p>
        </div>

        {/* Metric 2: Total Unpaid Base Salary */}
        <div className="p-5 bg-[#141414] border border-[#262626] rounded-2xl shadow-md space-y-2">
          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider bg-[#262626] px-2 py-0.5 rounded border border-slate-700">
            Unpaid Salary Arrears
          </span>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
            {formatCurrency(financialSummary.totalUnpaidSalaryDues)}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Consecutive unpaid &amp; underpaid months (Nov 2023 – May 2024).
          </p>
        </div>

        {/* Metric 3: Contracted Monthly Base */}
        <div className="p-5 bg-[#141414] border border-[#262626] rounded-2xl shadow-md space-y-2">
          <span className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
            Contracted Monthly Base
          </span>
          <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-mono">
            ₹6,66,667<span className="text-xs font-normal text-slate-400">/mo</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            ₹80,00,000 Fixed Base + ₹10,00,000 Bonus = <strong className="text-slate-200">₹90 LPA CTC</strong>.
          </p>
        </div>

        {/* Metric 4: Statutory TDS Shortfall */}
        <div className="p-5 bg-[#141414] border border-amber-900/60 rounded-2xl shadow-md space-y-2">
          <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-amber-950 px-2 py-0.5 rounded border border-amber-800">
            Unremitted Statutory TDS
          </span>
          <div className="text-2xl sm:text-3xl font-black text-amber-400 tracking-tight font-mono">
            ₹5.95L – ₹10.69L
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Deducted on payslips, pocketed by company (Sec 276B Warning Notice #16942293).
          </p>
        </div>
      </div>

      {/* Tabs Switcher for Financial Details */}
      <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#181818] rounded-xl border border-[#262626] w-fit">
        <button
          onClick={() => setActiveTab('breakdown')}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'breakdown'
              ? 'bg-[#262626] text-white shadow-sm font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Contract vs. Default Audit
        </button>
        <button
          onClick={() => setActiveTab('ledger')}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'ledger'
              ? 'bg-[#262626] text-white shadow-sm font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Month-by-Month Ledger &amp; LOP Audit
        </button>
        <button
          onClick={() => setActiveTab('tax')}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'tax'
              ? 'bg-[#262626] text-white shadow-sm font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          TDS Tax Misappropriation (Sec 276B)
        </button>
        <button
          onClick={() => setActiveTab('call_transcript')}
          className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'call_transcript'
              ? 'bg-[#262626] text-white shadow-sm font-bold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          CA Recorded Call Admission (₹56.67L)
        </button>
      </div>

      {/* Tab 1: Contract vs Default Audit */}
      {activeTab === 'breakdown' && (
        <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl space-y-6">
          <div className="border-b border-[#262626] pb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Contractual Entitlement vs. Actual Default
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Itemized ledger proving how the outstanding claim of {formatCurrency(financialSummary.totalCivilClaimOS8868)} and {formatCurrency(financialSummary.totalUnpaidSalaryDues)} in salary arrears was accumulated.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: What Was Contractually Guaranteed */}
            <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>Contractually Guaranteed on Official Letterhead</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Annual Total CTC:</span>
                  <span className="font-bold text-white font-mono">₹90,00,000 (90 LPA)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Fixed Base Remuneration:</span>
                  <span className="font-bold text-white font-mono">₹80,00,000 / yr (₹6,66,667 / mo)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Fixed Annual Bonus:</span>
                  <span className="font-bold text-white font-mono">₹10,00,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Pre-Joining Advisory Dues (12 hrs @ ₹700/hr):</span>
                  <span className="font-bold text-white font-mono">₹8,400 (Joining Bonus on 1st Slip)</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-400">Technical Delivery & Architecture:</span>
                  <span className="font-bold text-emerald-400 font-mono">100% Core Cloud & DevOps Verticals Built</span>
                </div>
              </div>
            </div>

            {/* Right: What Was Actually Defaulted / Withheld */}
            <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366] uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4 text-[#FF3366]" />
                <span>Actual Withholding &amp; Default Breakdown</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Unpaid Base Salary Dues (Nov 2023 – May 2024):</span>
                  <span className="font-bold text-[#FF3366] font-mono">₹39,33,328</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Pre-Joining Advisory Dues:</span>
                  <span className="font-bold text-[#FF3366] font-mono">₹8,400 (100% Unpaid)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">TDS Deducted on Payslips but Withheld:</span>
                  <span className="font-bold text-amber-400 font-mono">₹5,95,999 to ₹10,69,356</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#262626]">
                  <span className="text-slate-400">Company Losses Declared in High Court:</span>
                  <span className="font-bold text-white font-mono">₹1.72 Crores</span>
                </div>
                <div className="flex justify-between items-center py-2 font-bold text-sm bg-red-950 border border-red-800/80 px-3 rounded-lg text-white">
                  <span>Civil Suit OS 8868/2025 Total Claim:</span>
                  <span className="font-mono text-[#FF3366]">₹57,26,855</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              The Reality Behind the ₹39,33,328 Salary Default:
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              While Saravanan Arumugam was single-handedly managing complete cloud infrastructure, scaling DevOps pipelines, and delivering critical milestones for enterprise client deployments, Betaflux issued ₹0 salary credits for six consecutive months. Management fabricated 28 days of Loss of Pay (LOP) in November 2023, withheld employee tax remittances from the Government of India, and forced the employee into severe financial distress.
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Month-by-Month Default Ledger & LOP Audit */}
      {activeTab === 'ledger' && (
        <div className="bg-[#141414] border border-[#262626] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-[#262626]">
            <h3 className="text-lg font-bold text-white">
              Month-by-Month Default, LOP Fraud &amp; Deliverables Audit
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Verified breakdown showing actual days worked vs. fraudulent LOP entries on payslips and ₹0 bank deposits.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#181818] border-b border-[#262626] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-4">Period</th>
                  <th className="py-3.5 px-4">Contracted Gross</th>
                  <th className="py-3.5 px-4">TDS on Slip</th>
                  <th className="py-3.5 px-4">Actual Bank Credit</th>
                  <th className="py-3.5 px-4">LOP Fraud Audit</th>
                  <th className="py-3.5 px-4">Cumulative Shortfall</th>
                  <th className="py-3.5 px-4">Audit Observations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#262626] font-sans">
                {financialSummary.ledgerRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#1A1A1A] transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-white">{row.month}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{row.period}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-200">
                      {formatCurrency(row.expectedGross)}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-amber-400 font-semibold">
                      {formatCurrency(row.tdsDeductedOnSlip)}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-[#FF3366]">
                      {formatCurrency(row.actualPaid)}
                    </td>
                    <td className="py-3.5 px-4">
                      {row.lopDaysReported > 0 ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-950 text-[#FF3366] border border-red-800 font-bold text-[10px]">
                          <BadgeAlert className="w-3 h-3 text-[#FF3366]" />
                          {row.lopDaysReported}d Fake LOP (Worked {row.actualDaysWorked}d)
                        </span>
                      ) : (
                        <span className="text-slate-400 font-mono text-[11px]">
                          0d LOP ({row.actualDaysWorked}d Worked)
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-black text-red-400">
                      {formatCurrency(row.cumulativeDues)}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 max-w-xs leading-relaxed text-[11px]">
                      {row.auditNote}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: TDS Tax Misappropriation (Sec 276B) */}
      {activeTab === 'tax' && (
        <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl space-y-6">
          <div className="border-b border-[#262626] pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950 px-2.5 py-1 rounded-md border border-amber-800">
              Income Tax Act Section 276B Violation
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
              Statutory TDS Deducted from Payslips but Pocketed by Company
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Income Tax Office Ward 1(1) Bengaluru issued a formal criminal warning notice (Grievance #16942293) for withholding employee taxes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase">TDS Deducted on Payslips</span>
              <div className="text-2xl font-black text-white font-mono">₹14,58,640</div>
              <p className="text-xs text-slate-400">Deducted from gross compensation across April 2023 – April 2024.</p>
            </div>

            <div className="p-5 bg-[#181818] border border-emerald-900/60 rounded-xl space-y-2">
              <span className="text-[11px] font-bold text-emerald-400 uppercase">Actually Deposited to Govt</span>
              <div className="text-2xl font-black text-emerald-400 font-mono">₹3,89,284</div>
              <p className="text-xs text-slate-400">Per TRACES / Form 26AS records; stopped post-August 2023.</p>
            </div>

            <div className="p-5 bg-[#181818] border border-red-900/60 rounded-xl space-y-2">
              <span className="text-[11px] font-bold text-[#FF3366] uppercase">Statutory Shortfall</span>
              <div className="text-2xl font-black text-[#FF3366] font-mono">₹5.95L – ₹10.69L</div>
              <p className="text-xs text-slate-400">Unremitted tax money pocketed by company instead of treasury.</p>
            </div>
          </div>

          <div className="p-5 bg-[#181818] border border-amber-900/60 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Section 276B &amp; 278B Legal Consequences</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Under Section 276B of the Income Tax Act, 1961, failure to pay tax deducted at source to the credit of the Central Government is punishable with <strong className="text-white">rigorous imprisonment for a term of 3 months to 7 years and fine</strong>. The High Court explicitly affirmed that statutory tax authorities retain full jurisdiction to prosecute Betaflux and its directors regardless of civil suit proceedings.
            </p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={onExploreEvidence}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm transition-colors"
            >
              Inspect Income Tax Notice &amp; Form 26AS Exhibits →
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: CA Recorded Call Admission (₹56.67L) */}
      {activeTab === 'call_transcript' && (
        <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl space-y-6">
          <div className="border-b border-[#262626] pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded-md border border-indigo-800">
              Section 18 Limitation Act Admission
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
              Recorded Payroll Call: CA Pawan &amp; Director Animesh Admit ₹56.67L Gross Liability
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Verbatim audio transcript from May 28, 2024 settlement conference call before employee exit.
            </p>
          </div>

          <div className="p-5 bg-[#0F0F0F] border border-[#262626] text-slate-200 rounded-xl space-y-4 font-mono text-xs leading-relaxed">
            <div className="text-slate-400 border-b border-[#262626] pb-2">
              [CONFERENCE CALL RECORDING - MAY 28, 2024 | PARTICIPANTS: SARAVANAN A., CA PAWAN, ANIMESH KUMAR]
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-indigo-400 font-bold">CA PAWAN:</span> "Looking at the ledger from November 2023 to May 2024, the total gross unpaid compensation comes out to approximately ₹56.67 Lakhs including the bonus component and LOP adjustments."
              </div>

              <div>
                <span className="text-amber-400 font-bold">DIRECTOR ANIMESH:</span> "Yes, we acknowledge the calculation. We are waiting on receivables from Haven App and our offshore clients to clear this."
              </div>

              <div>
                <span className="text-emerald-400 font-bold">SARAVANAN (EMPLOYEE):</span> "I worked every single day without leave. Why was November marked 28 days LOP?"
              </div>

              <div>
                <span className="text-indigo-400 font-bold">CA PAWAN:</span> "That was an internal accounting placeholder to manage cash flow reporting."
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#181818] border border-[#262626] rounded-xl text-xs text-slate-300">
            <strong className="text-white font-semibold">Evidentiary Value:</strong> This recorded admission conclusively refutes any subsequent defense claiming lack of debt, satisfying Section 65B of the Indian Evidence Act and Section 18 of the Limitation Act, 1963.
          </div>
        </div>
      )}
    </div>
  );
};
