import React, { useState } from 'react';
import { TimelineMilestone, EvidenceDocument } from '../types';
import { Clock, AlertTriangle, FileText, CheckCircle2, ArrowRight, Shield, ChevronRight, Download, Lock, CheckCircle, HelpCircle, FileWarning, ShieldAlert, Sparkles, Scale } from 'lucide-react';

interface TimelineSectionProps {
  milestones: TimelineMilestone[];
  evidenceDocs: EvidenceDocument[];
  onSelectEvidence: (docId: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  milestones,
  evidenceDocs,
  onSelectEvidence,
}) => {
  const [activeStageFilter, setActiveStageFilter] = useState<string>('all');

  const stages = [
    { id: 'all', label: 'All Milestones' },
    { id: '1. The Offer & Onboarding', label: '1. Offer & ₹90L CTC' },
    { id: '2. Unilateral Pay Cuts & LOP Fraud', label: '2. Pay Cuts & LOP Fraud' },
    { id: '3. Zero Salary & Enterprise Infrastructure Delivery', label: '3. ₹0 Pay & Enterprise Architecture' },
    { id: '4. Resignation & TDS Fraud Discovery', label: '4. Exit & TDS Theft' },
    { id: '5. Formal Legal, IT & Police Escalations', label: '5. IT & FIR Notice' },
    { id: '6. High Court Shift & Civil Suit OS 8868/2025', label: '6. Suit OS 8868/2025' },
  ];

  const filteredMilestones = milestones.filter(
    (m) => activeStageFilter === 'all' || m.stage === activeStageFilter
  );

  const getStageColor = (stage: TimelineMilestone['stage']) => {
    switch (stage) {
      case '1. The Offer & Onboarding':
        return 'border-blue-800 text-blue-400 bg-blue-950/60';
      case '2. Unilateral Pay Cuts & LOP Fraud':
        return 'border-amber-800 text-amber-400 bg-amber-950/60';
      case '3. Zero Salary & Enterprise Infrastructure Delivery':
        return 'border-purple-800 text-purple-400 bg-purple-950/60';
      case '4. Resignation & TDS Fraud Discovery':
        return 'border-red-800 text-red-400 bg-red-950/60';
      case '5. Formal Legal, IT & Police Escalations':
        return 'border-red-700 text-red-300 bg-red-900/60';
      case '6. High Court Shift & Civil Suit OS 8868/2025':
        return 'border-indigo-800 text-indigo-400 bg-indigo-950/60';
      default:
        return 'border-emerald-800 text-emerald-400 bg-emerald-950/60';
    }
  };

  const getAgreementBadge = (status?: TimelineMilestone['writtenAgreementStatus']) => {
    switch (status) {
      case 'Deceptive Unsigned Agreement':
        return (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-purple-950/80 text-purple-300 border border-purple-800/80 flex items-center gap-1.5">
            <FileWarning className="w-3.5 h-3.5 text-purple-400" />
            Signed by Employee • Never Countersigned by Promoters
          </span>
        );
      case 'No Reduction Agreement Exists':
        return (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-red-950/80 text-red-300 border border-red-800/80 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-[#FF3366]" />
            Zero Salary Reduction Agreement Ever Executed
          </span>
        );
      case 'Contractually Binding Full Pay':
        return (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/80 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
            Offer Contract Guaranteed Full Pay &amp; Joining Bonus
          </span>
        );
      case 'Verbal Promises Only':
        return (
          <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-amber-950/80 text-amber-300 border border-amber-800/80 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            Verbal Promises of Full Settlement ("Cleared Next Week")
          </span>
        );
      default:
        return null;
    }
  };

  const handleDownloadTimelineTxt = () => {
    let content = `================================================================================\n`;
    content += `BETAFLUX CASE CHRONOLOGY & TIMELINE OF EVENTS (SANITIZED PUBLIC RECORD)\n`;
    content += `Generated Date: ${new Date().toISOString().split('T')[0]}\n`;
    content += `Confidentiality: All personal identifiable information (PAN, residential address, personal CTC) redacted.\n`;
    content += `================================================================================\n\n`;

    content += `KEY FACTUAL FINDINGS:\n`;
    content += `- Joining Bonus was explicitly guaranteed in the signed offer contract and deliberately withheld from Day 1.\n`;
    content += `- Management coerced the employee to sign agreement/clearance documents under false promises of immediate payout, then kept the document without countersigning and withheld all salary.\n`;
    content += `- At NO point was any written statement or agreement executed consenting to a reduction in salary.\n`;
    content += `- TDS was deducted on payslips but never deposited with the Income Tax Department (Section 276B violation).\n\n`;
    content += `--------------------------------------------------------------------------------\n`;
    content += `CHRONOLOGICAL MILESTONES:\n`;
    content += `--------------------------------------------------------------------------------\n\n`;

    milestones.forEach((m, idx) => {
      content += `[${idx + 1}] ${m.date.toUpperCase()} - ${m.title.toUpperCase()}\n`;
      content += `Stage: ${m.stage}\n`;
      if (m.writtenAgreementStatus) content += `Contract Status: ${m.writtenAgreementStatus}\n`;
      if (m.financialImpact) content += `Financial Impact: ${m.financialImpact}\n`;
      content += `Details: ${m.description}\n`;
      if (m.keyTakeaway) content += `Key Takeaway: ${m.keyTakeaway}\n`;
      if (m.systemicLoopholeNote) content += `Systemic Exploitation Pattern: ${m.systemicLoopholeNote}\n`;
      content += `\n--------------------------------------------------------------------------------\n\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Betaflux_Timeline_Chronology_Sanitized_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
  };

  return (
    <div className="space-y-6" id="timeline-section">
      {/* Section Header */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/80 text-amber-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
                Chronology of Deception &amp; Wage Withholding
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Exact sequence of events: promised joining bonus, salary defaults, one-sided document trap &amp; public exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Download Action */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadTimelineTxt}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-[#1F1F1F] hover:bg-[#2A2A2A] text-slate-200 border border-[#333] transition-all"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Download Timeline (.txt)</span>
          </button>
        </div>
      </div>

      {/* Core Legal & Factual Position Callout Box */}
      <div className="p-5 sm:p-6 bg-[#141414] border-l-4 border-l-[#FF3366] border border-[#262626] rounded-2xl shadow-xl space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-[#FF3366]">
          <Lock className="w-4 h-4 text-[#FF3366]" />
          <span>Factual Truth: No Salary Reduction Was Ever Agreed; Promises Were Made &amp; Broken</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Throughout the entire tenure, Betaflux management repeatedly assured the employee that <strong className="text-white">"all salary dues and the promised joining bonus will be provided in full"</strong>. At no point did they present or obtain any written statement consenting to a salary reduction. When management pressured the employee to sign settlement paperwork, they kept the signed copy without countersigning, continuing to withhold all compensation.
        </p>
      </div>

      {/* Stage Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {stages.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveStageFilter(s.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeStageFilter === s.id
                ? 'bg-gradient-to-r from-red-600 to-[#FF3366] text-white shadow-sm'
                : 'bg-[#141414] text-slate-400 hover:text-slate-200 border border-[#262626] hover:bg-[#1A1A1A]'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#262626] ml-4 sm:ml-6 space-y-8 my-6">
        {filteredMilestones.map((item) => {
          const linkedDocs = evidenceDocs.filter((d) => item.evidenceIds.includes(d.id));

          return (
            <div key={item.id} className="relative group">
              {/* Dot on Timeline line */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-[#141414] border-2 border-amber-500 group-hover:scale-125 group-hover:bg-amber-500 transition-all flex items-center justify-center shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 group-hover:bg-white" />
              </div>

              {/* Milestone Card */}
              <div className="p-6 sm:p-7 bg-[#141414] hover:bg-[#181818] border border-[#262626] hover:border-slate-600 rounded-2xl shadow-xl transition-all space-y-4">
                {/* Milestone Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold text-slate-200 bg-[#222] px-3 py-1 rounded-md border border-[#333]">
                      {item.date}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getStageColor(item.stage)}`}>
                      {item.stage}
                    </span>
                    {getAgreementBadge(item.writtenAgreementStatus)}
                  </div>

                  {item.financialImpact && (
                    <span className="text-xs font-bold text-[#FF3366] bg-red-950/80 px-3 py-1 rounded-md border border-red-800">
                      Impact: {item.financialImpact}
                    </span>
                  )}
                </div>

                {/* Milestone Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Takeaway Highlight */}
                {item.keyTakeaway && (
                  <div className="p-4 bg-[#181818] border border-[#262626] rounded-xl flex items-start gap-2.5 text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <div className="leading-relaxed">
                      <strong className="text-white font-bold">Factual Finding:</strong> {item.keyTakeaway}
                    </div>
                  </div>
                )}

                {/* Systemic Loophole Explainer Box */}
                {item.systemicLoopholeNote && (
                  <div className="p-4 bg-amber-950/30 border border-amber-800/60 rounded-xl text-xs flex items-start gap-3 text-amber-200">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div className="leading-relaxed">
                      <strong className="text-amber-300 font-bold">Systemic Exploitation Pattern:</strong> {item.systemicLoopholeNote}
                    </div>
                  </div>
                )}

                {/* Linked Documentary Evidence Chips */}
                {linkedDocs.length > 0 && (
                  <div className="pt-3 border-t border-[#262626] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-slate-400">Sanitized Proof Records:</span>
                    {linkedDocs.map((doc) => (
                      <button
                        key={doc.id}
                        onClick={() => onSelectEvidence(doc.id)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1F1F1F] hover:bg-[#2A2A2A] text-slate-200 border border-[#333] transition-all"
                      >
                        <FileText className="w-3.5 h-3.5 text-amber-400" />
                        <span className="truncate max-w-[220px]">{doc.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
