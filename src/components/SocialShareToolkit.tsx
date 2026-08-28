import React, { useState } from 'react';
import { Share2, Copy, Check, ExternalLink, ShieldCheck, MessageCircle, Linkedin, AlertCircle, Building2, Users, Flame } from 'lucide-react';

export const SocialShareToolkit: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const templates = [
    {
      id: 'linkedin-client-warning',
      platform: 'LinkedIn',
      title: 'Due Diligence Alert for Prospective Betaflux Clients & Enterprise Customers',
      target: 'Warning businesses considering outsourcing to Betaflux Consulting Pvt Ltd',
      icon: Building2,
      text: `⚠️ PUBLIC DUE DILIGENCE ADVISORY: For Companies & Founders Evaluating Betaflux Consulting Private Limited (CIN: U72900KA2018PTC115926)

If your organization is currently evaluating software contracts or outsourcing cloud architectures to Betaflux, please review these documented operational and legal risks:

1. Active Civil Litigation (OS 8868/2025): ₹57.26 Lakhs claim pending before Bangalore City Civil Court for systemic wage theft and withheld compensation.
2. Unpaid Salary Arrears (₹39.33L): Key engineering leadership who built their core systems received ₹0 pay for 6 consecutive months after delivering mission-critical enterprise cloud infrastructure.
3. TDS Misappropriation (Income Tax Notice #16942293): Deducted ₹14.58 Lakhs on salary slips but deposited only ₹3.89 Lakhs, triggering Section 276B criminal prosecution proceedings.
4. Severe Project Disruption & IP Encumbrance: Code developed under unpaid wage conditions creates disputed ownership and copyright clouds under Indian jurisprudence.

Protect your enterprise software roadmap and vendor due diligence before issuing retainers.

🔗 Full Factual Dossier & Court Exhibits:
https://betaflux.watch

#Betaflux #SoftwareOutsourcing #TechStartup #ClientAdvisory #DueDiligence #CorporateGovernance #TechIndia #SoftwareDevelopment`,
      hashtags: '#Betaflux #SoftwareOutsourcing #TechStartup #ClientAdvisory',
    },
    {
      id: 'linkedin-candidate-warning',
      platform: 'LinkedIn',
      title: 'Job Seeker Warning: The Betaflux ₹90L CTC & Joining Bonus Bait',
      target: 'Alerting developers, engineers and managers before signing offer letters',
      icon: Users,
      text: `🚨 CANDIDATE CAUTION NOTICE: Did Betaflux Offer You an Engineering Leadership Role with a Guaranteed Joining Bonus?

Before you resign from your stable job or turn down other verified offers to join Betaflux Consulting Private Limited, review the documented pattern:

• The Joining Bonus Bait: Attractive joining bonuses (e.g. ₹10L bonus on ₹90 LPA CTC) are promised in formal letters to induce onboarding, then immediately withheld on Day 1 claiming "payroll sync delays".
• Fabricated 28-Day LOP: Marked 28 days fake "Loss of Pay" on monthly payslips to slash compensation from ₹6.66L to ₹1.8L despite 100% active attendance and 14-hour workdays.
• Months of ₹0 Salary: Consecutive months of zero salary credits while founders issue verbal assurances ("client money is arriving next week").
• TDS Theft on Form 26AS: Deducted income tax on salary slips but failed to deposit it under company TAN.
• The Unsigned Document Trap: Management pressures staff to sign settlement declarations under promises of payment, then keeps the paper without countersigning and withholds all dues.

Do not allow predatory startup practices to drain your savings.

🔗 Verified Case Timeline & Documentary Exhibits:
https://betaflux.watch

#Betaflux #HiringWarning #TechJobsIndia #SoftwareEngineer #JobSeekers #EmployeeRights #StartupCulture #TechCareers`,
      hashtags: '#Betaflux #HiringWarning #TechJobsIndia #SoftwareEngineer',
    },
    {
      id: 'linkedin-industry-expose',
      platform: 'LinkedIn',
      title: 'The Anatomy of Startup Wage Theft & The "Civil Dispute" Loophole',
      target: 'Exposing how startup employers exploit civil delay and legal blind spots',
      icon: Flame,
      text: `How do unscrupulous startup employers exploit the Indian legal system to steal salaries?

1. Extract maximum labor: Promise ₹90 LPA CTC, extract 14-hour workdays, architect DevOps verticals, and deliver critical enterprise deployments.
2. Withhold compensation: Issue ₹0 pay for 6 consecutive months and pocket employee TDS (Sec 276B violation).
3. Hide behind the "Civil Dispute" Shield: Tell unpaid workers: "Go file a civil suit; police won't intervene in employment matters."
4. Exploit 5-8 Year Civil Court Delays: Use company funds to hire lawyers for repeated adjournments, knowing bankrupt developers face EMIs and personal distress.

This is why public interest awareness portals are protected under Exception 1 to Section 499 IPC (Section 356 Bharatiya Nyaya Sanhita, 2023) and Article 19(1)(a) of the Constitution of India.

🔗 Review the documentary dossier and court filings:
https://betaflux.watch

#StartupScams #WageTheft #Betaflux #LaborRightsIndia #Section276B #TDSFraud #CorporateEthics #FounderAccountability`,
      hashtags: '#StartupScams #WageTheft #Betaflux #FounderAccountability',
    },
    {
      id: 'whatsapp-tech-community',
      platform: 'WhatsApp / Telegram',
      title: 'Quick Warning Message for Tech & Developer Communities',
      target: 'Fast sharing in WhatsApp developer communities & alumni groups',
      icon: MessageCircle,
      text: `⚠️ URGENT ADVISORY: For anyone interviewing with or contracting software projects to BETAFLUX (Betaflux Consulting Private Limited / Haven App):

A public interest investigative dossier has been published documenting systematic wage defaults and tax misappropriation:
👉 https://betaflux.watch

Key documented facts:
1. ₹57.26 Lakhs civil suit (OS 8868/2025) filed before Bangalore City Civil Court.
2. 6 consecutive months of ₹0 salary credits despite building core cloud systems and maintaining 100% uptime.
3. TDS deducted on payslips (₹14.58L) but only ₹3.89L deposited to Income Tax Dept (Section 276B Notice #16942293).
4. Fabricated 28-day Loss of Pay (LOP) deductions and deceptive unsigned document schemes.

Please circulate this among tech groups, candidates, and founders so no one else falls victim.`,
      hashtags: '',
    },
  ];

  return (
    <div className="space-y-6" id="social-toolkit-section">
      {/* Header */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-800/80 text-amber-400 flex items-center justify-center font-bold">
              <Share2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] tracking-tight">
                Client &amp; Candidate Awareness Toolkit
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Pre-formatted, legally vetted warning templates to ensure prospective clients and job seekers are fully informed.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-3.5 py-2 rounded-xl border border-emerald-800">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Protected: Exception 1, Sec 499 IPC (Truth Defense)</span>
        </div>
      </div>

      {/* Templates List */}
      <div className="space-y-5">
        {templates.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="p-6 sm:p-7 bg-[#141414] border border-[#262626] hover:border-slate-600 rounded-2xl shadow-xl transition-all space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-bold rounded-lg bg-[#1F1F1F] text-amber-400 border border-[#333] flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                    {item.platform} Alert
                  </span>
                  <span className="text-xs font-medium text-slate-400">{item.target}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(item.id, item.text)}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                      copiedId === item.id
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#1F1F1F] hover:bg-[#2A2A2A] text-slate-200 border border-[#333]'
                    }`}
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Warning Text</span>
                      </>
                    )}
                  </button>

                  {item.platform === 'LinkedIn' && (
                    <a
                      href={`https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(item.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#0077B5] hover:bg-[#006396] rounded-xl shadow-sm transition-all"
                    >
                      <span>Post on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {item.platform.includes('WhatsApp') && (
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(item.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-sm transition-all"
                    >
                      <span>Share on WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>

              {/* Post Preview Box */}
              <div className="p-5 bg-[#0D0D0D] border border-[#222] rounded-xl text-xs text-slate-300 font-mono whitespace-pre-line leading-relaxed selection:bg-red-600 selection:text-white">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
