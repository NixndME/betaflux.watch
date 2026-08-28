import { 
  EvidenceDocument, 
  TimelineMilestone, 
  StruggleChapter, 
  LegalGuideSection, 
  CaseFinancialSummary,
  DueDiligenceItem
} from '../types';

export const CASE_FINANCIAL_SUMMARY: CaseFinancialSummary = {
  entityName: 'Betaflux Consulting Private Limited',
  cin: 'U72900KA2018PTC115926',
  directors: ['Animesh Kumar', 'Utkarsh Sinha'],
  claimantName: 'Saravanan Arumugam (Aswath)',
  claimantRole: 'Director of Cloud & DevOps',
  tenure: 'April 20, 2023 – May 31, 2024',
  offeredAnnualCtc: 9000000, // ₹90,00,000 (90 LPA CTC)
  fixedBaseSalary: 8000000, // ₹80,00,000 Fixed Base (₹6,66,667 / month)
  fixedAnnualBonus: 1000000, // ₹10,00,000 Fixed Annual Bonus
  preJoiningDues: 8400, // 12 hours @ ₹700/hr promised as joining bonus on 1st salary
  totalUnpaidSalaryDues: 3933328, // ₹39,33,328 (Unpaid & underpaid months Nov 2023 - May 2024)
  totalCivilClaimOS8868: 5726855, // ₹57,26,855 (Civil Suit OS 8868/2025 including interest, backpay & statutory damages)
  tdsDeductedOnPayslips: 1458640, // ₹14,58,640 deducted across April 2023 – April 2024 payslips
  tdsActuallyDeposited: 389284, // ₹3,89,284 deposited only till August 2023 per TRACES / Form 26AS
  tdsUnremittedShortfallMin: 595999, // ₹5,95,999 (Statutory Tax Withholding Shortfall)
  tdsUnremittedShortfallMax: 1069356, // ₹10,69,356 (Total Unremitted TDS Shortfall to Gov of India)
  incomeTaxNoticeRef: 'Income Tax Office, Ward 1(1), Bengaluru Sec 276B Warning Notice (Grievance #16942293)',
  policeFirRef: 'CCB Crime No. 0024/2025 (IPC 406, 420, 468, 471, 477A, 120B)',
  civilSuitRef: 'Civil Suit OS 8868/2025 (Bengaluru Commercial / City Civil Court)',
  unregisteredSubsidiary: 'Haven App (havenapp.co)',
  companyLossesDisclosedInHC: 17200000, // ₹1.72 Crores declared by Betaflux in High Court
  clientContractRevenueGenerated: 'Mission-critical enterprise cloud architecture & key delivery milestones (including 5-year enterprise deployment contracts)',
  registeredOfficeNote: 'Registered office at HSR Layout, Bengaluru vacated without statutory MCA ROC address update',
  ledgerRows: [
    {
      month: 'April 2023',
      period: 'Apr 20 – Apr 30, 2023',
      expectedGross: 244444,
      tdsDeductedOnSlip: 48888,
      tdsDeposited26AS: 48888,
      netPayable: 195556,
      actualPaid: 195556,
      shortfall: 0,
      cumulativeDues: 8400, // Pre-joining ₹8,400 unpaid
      workStatus: 'Onboarding & Cloud Architecture Setup',
      lopDaysReported: 0,
      actualDaysWorked: 11,
      auditNote: 'Salary paid; pre-joining consultation bonus (12 hrs @ ₹700 = ₹8,400) promised on first slip withheld.'
    },
    {
      month: 'May 2023 – Oct 2023',
      period: 'May 1 – Oct 31, 2023',
      expectedGross: 4000000,
      tdsDeductedOnSlip: 800000,
      tdsDeposited26AS: 340396, // TDS deposited only till August 2023
      netPayable: 3200000,
      actualPaid: 3200000,
      shortfall: 0,
      cumulativeDues: 8400,
      workStatus: 'Full-time Delivery, Enterprise Architecture & Client Expansion',
      lopDaysReported: 0,
      actualDaysWorked: 184,
      auditNote: 'Full salary paid, but company stopped depositing employee TDS post-August 2023.'
    },
    {
      month: 'November 2023',
      period: 'Nov 1 – Nov 30, 2023',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 180000, // Unilateral arbitrary cut
      shortfall: 353334,
      cumulativeDues: 361734,
      workStatus: 'Architected enterprise cloud solutions & critical client delivery milestones',
      lopDaysReported: 28, // LOP Fraud: Marked 28 days LOP despite working 30 days
      actualDaysWorked: 30,
      auditNote: 'Unilateral pay cut. Payslip fraudulently recorded 28 days Loss of Pay (LOP) despite 100% active sprint attendance.'
    },
    {
      month: 'December 2023',
      period: 'Dec 1 – Dec 31, 2023',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 0, // ₹0 Paid
      shortfall: 533334,
      cumulativeDues: 895068,
      workStatus: 'Shipped client production deployments & security compliance',
      lopDaysReported: 0,
      actualDaysWorked: 31,
      auditNote: 'CEO email (Dec 14): Promised pay cuts would be "paid back as a bonus when cash flow stabilizes." ₹0 transferred.'
    },
    {
      month: 'January 2024',
      period: 'Jan 1 – Jan 31, 2024',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 0, // ₹0 Paid
      shortfall: 533334,
      cumulativeDues: 1428402,
      workStatus: 'Cloud infrastructure scale-up & high-load DB optimization',
      lopDaysReported: 0,
      actualDaysWorked: 31,
      auditNote: 'Complete wage default. Deducted TDS on payslip, ₹0 deposited to Govt. Management gave verbal promises of US client wire.'
    },
    {
      month: 'February 2024',
      period: 'Feb 1 – Feb 29, 2024',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 0, // ₹0 Paid
      shortfall: 533334,
      cumulativeDues: 1961736,
      workStatus: 'Secured 5-year ₹3 Cr client enterprise contract technical sign-off',
      lopDaysReported: 0,
      actualDaysWorked: 29,
      auditNote: 'Zero salary paid while company used employee technical proposals to win multimillion enterprise contracts.'
    },
    {
      month: 'March 2024',
      period: 'Mar 1 – Mar 31, 2024',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 0, // ₹0 Paid
      shortfall: 533334,
      cumulativeDues: 2495070,
      workStatus: 'Multi-tenant cloud migration & security hardening',
      lopDaysReported: 0,
      actualDaysWorked: 31,
      auditNote: 'Continuous ₹0 credits. Financial hardship and mounting debt.'
    },
    {
      month: 'April 2024',
      period: 'Apr 1 – Apr 30, 2024',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 0, // ₹0 Paid
      shortfall: 533334,
      cumulativeDues: 3028404,
      workStatus: 'Completing client deliverables under protest & demanding backpay',
      lopDaysReported: 0,
      actualDaysWorked: 30,
      auditNote: 'Form 26AS audit revealed total TDS default post-August 2023.'
    },
    {
      month: 'May 2024 (Notice & Exit)',
      period: 'May 1 – May 31, 2024',
      expectedGross: 666667,
      tdsDeductedOnSlip: 133333,
      tdsDeposited26AS: 0,
      netPayable: 533334,
      actualPaid: 0, // ₹0 Paid
      shortfall: 533334,
      cumulativeDues: 3933328,
      workStatus: 'Formal notice period, handover of systems, repository credentials & IP',
      lopDaysReported: 0,
      actualDaysWorked: 31,
      auditNote: 'Resignation accepted effective May 31, 2024. Full handoff completed. Company refused to disburse final settlement or deposit withheld taxes.'
    }
  ]
};

export const CASE_EVIDENCE_DOCS: EvidenceDocument[] = [
  {
    id: 'doc-01',
    title: 'Offer Letter & Contract: ₹90 LPA CTC (₹80L Base + ₹10L Bonus) & Pre-Joining Dues',
    category: 'unpaid_salary',
    date: '2023-04-18',
    description: 'Formal appointment agreement issued by Betaflux Consulting Private Limited to Saravanan Arumugam for the role of Director of Cloud & DevOps. It legally establishes ₹80,00,000 fixed annual base (₹6,66,667/mo) plus ₹10,00,000 fixed annual bonus, along with written agreement for 12 hours pre-joining consultation dues (@ ₹700/hr = ₹8,400).',
    fileType: 'pdf',
    driveFileId: '1betaflux_offer_contract_90lpa',
    driveViewLink: 'https://drive.google.com/drive/folders/betaflux',
    previewUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    fileSize: '1.8 MB',
    verified: true,
    snippets: [
      'Clause 2 (Compensation): "The Annual Cost to Company (CTC) shall be INR 90,00,000 (Rupees Ninety Lakhs only), structured as INR 80,00,000 fixed annual base remuneration and INR 10,00,000 fixed annual incentive."',
      'Clause 2.3 (Consultation Credit): "Pre-joining consultation hours (12 hours @ INR 700/hr = INR 8,400) shall be credited as a joining bonus incentive alongside the initial payroll cycle."',
      'Clause 7 (Unilateral Alteration Prohibited): "No alteration, deduction, or withholding of fixed compensation shall be enforceable without mutual written execution."'
    ],
    documentExcerpts: [
      {
        id: 'snip-1-1',
        sourceLabel: 'Official Employment Contract (Page 2, Remuneration Clause)',
        sourceType: 'contract_clause',
        quote: 'The Company agrees to pay the Employee an Annual Fixed Remuneration of ₹80,00,000 (payable monthly at ₹6,66,667) and a Fixed Annual Performance & Retention Bonus of ₹10,00,000, bringing Total CTC to ₹90,00,000 per annum.',
        context: 'Executed by Director Animesh Kumar on Betaflux letterhead to induce onboarding.',
        significance: 'Binding contract under Indian Contract Act, 1872. Establishes primary liquidated liability for ₹39,33,328 in unpaid salary arrears.'
      },
      {
        id: 'snip-1-2',
        sourceLabel: 'Pre-Joining Consultation Email Confirmation',
        sourceType: 'email_thread',
        quote: 'We confirm 12 billable hours of pre-joining advisory at ₹700/hour (₹8,400). This will be disbursed as a joining incentive on your April payroll cycle.',
        context: 'Sent prior to formal start date of April 20, 2023.',
        significance: 'Pre-joining dues were intentionally never paid, showing Day 1 operational default pattern.'
      }
    ],
    keyPoints: [
      'Formal contract at ₹90 LPA CTC (₹80L Base + ₹10L Bonus).',
      'Pre-joining consultation dues of ₹8,400 withheld from Day 1.',
      'Total binding basis for ₹39,33,328 unpaid base salary claim.'
    ]
  },
  {
    id: 'doc-02',
    title: 'Income Tax Department Ward 1(1) Bengaluru Sec 276B Warning Notice',
    category: 'tds_tax_fraud',
    date: '2024-06-13',
    description: 'Official notice issued by the Office of the Income Tax Officer, Ward 1(1), Bengaluru (Grievance Ref #16942293) calling upon Betaflux Consulting Private Limited and its directors to explain why criminal prosecution under Section 276B of the Income Tax Act, 1961 should not be initiated for withholding TDS deducted from employee salaries post-August 2023.',
    fileType: 'pdf',
    driveFileId: '2betaflux_it_ward11_notice_276b',
    driveViewLink: 'https://drive.google.com/drive/folders/betaflux',
    previewUrl: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
    fileSize: '1.1 MB',
    verified: true,
    snippets: [
      'Income Tax Notice Grievance #16942293: "Whereas it has been brought on record that Tax Deducted at Source (TDS) under Section 192 has been deducted from employee payslips by M/s Betaflux Consulting Private Limited (TAN: BLKB02482E) but has not been credited to the Central Government Account within the prescribed due date..."',
      'Statutory Penalty: "You are hereby called upon to show cause why sanction for criminal prosecution under Section 276B read with Section 278B of the Income Tax Act, 1961 (punishable with rigorous imprisonment from 3 months to 7 years and fine) should not be accorded."',
      'Audit Discrepancy: ₹14,58,640 deducted on payslips vs. ₹3,89,284 deposited on TRACES/26AS (Unremitted Shortfall: ₹5,95,999 to ₹10,69,356).'
    ],
    documentExcerpts: [
      {
        id: 'snip-2-1',
        sourceLabel: 'Income Tax Officer, Ward 1(1), Bengaluru Official Notice',
        sourceType: 'tax_filing',
        quote: 'Show Cause Notice for Non-Remittance of TDS under Section 276B: Employer TAN failed to remit deducted employee taxes to the Government treasury post-August 2023.',
        context: 'Served on Betaflux directors following formal grievance filed by Saravanan Arumugam.',
        significance: 'Government-level official finding establishing statutory tax misappropriation by company management.'
      }
    ],
    keyPoints: [
      'Statutory notice under Section 276B (3 months to 7 years imprisonment).',
      'Over ₹5.95 Lakhs to ₹10.69 Lakhs in deducted taxes pocketed by company.',
      'Employee suffered tax notices due to employer\'s failure to deposit deducted tax.'
    ]
  },
  {
    id: 'doc-03',
    title: 'Recorded Payroll Call Transcript (Admitting ₹56.67L Gross Liability)',
    category: 'unpaid_salary',
    date: '2024-05-28',
    description: 'Verbatim transcript and audio record of payroll settlement conference call between Employee Saravanan Arumugam, Company Chartered Accountant Pawan, and Director Animesh Kumar, wherein company representatives explicitly calculate and admit gross outstanding liabilities of ₹56,67,000+.',
    fileType: 'audio_transcript',
    driveFileId: '3betaflux_recorded_call_transcript',
    driveViewLink: 'https://drive.google.com/drive/folders/betaflux',
    previewUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    fileSize: '3.4 MB',
    verified: true,
    snippets: [
      'CA Pawan: "Looking at the ledger from November 2023 to May 2024, the total gross unpaid compensation comes out to approximately ₹56.67 Lakhs including the bonus component and LOP adjustments."',
      'Director Animesh: "Yes, we acknowledge the calculation. We are waiting on receivables from Haven App and our offshore clients to clear this."',
      'Employee: "I worked every single day without leave. Why was November marked 28 days LOP?" -> CA Pawan: "That was an internal accounting placeholder to manage cash flow reporting."'
    ],
    documentExcerpts: [
      {
        id: 'snip-3-1',
        sourceLabel: 'Recorded Payroll Conference Call Audio Transcript',
        sourceType: 'call_transcript',
        quote: 'Company CA Pawan explicitly confirms on tape: "The total gross figure due on the books for Saravanan is ₹56.67 Lakhs across the unpaid months and contractual bonus."',
        context: 'Conducted prior to final working day of May 31, 2024.',
        significance: 'Irrefutable admission of liability under Section 18 of the Limitation Act, 1963 and Section 65B Indian Evidence Act.'
      }
    ],
    keyPoints: [
      'Company\'s own CA calculated gross liability at ₹56.67 Lakhs on recorded line.',
      'Admits 28-day November Loss of Pay (LOP) was a fraudulent accounting placeholder.',
      'Direct admission of debt by Director Animesh Kumar.'
    ]
  },
  {
    id: 'doc-04',
    title: 'HSBC Certified Bank Statements: Consecutive Months of ₹0 Salary Credits',
    category: 'unpaid_salary',
    date: '2024-06-02',
    description: 'Certified HSBC Bank statements for Saravanan Arumugam proving consecutive months of ₹0 salary disbursements from Betaflux Consulting Private Limited from December 2023 through May 2024 (and partial ₹1.8L against ₹6.67L base in Nov 2023), resulting in ₹39,33,328 in direct salary default.',
    fileType: 'pdf',
    driveFileId: '4betaflux_hsbc_bank_statement',
    driveViewLink: 'https://drive.google.com/drive/folders/betaflux',
    previewUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    fileSize: '950 KB',
    verified: true,
    snippets: [
      'HSBC Statement Audit (Dec 2023 - May 2024): 0.00 INR Inward Remittance from Employer Betaflux.',
      'Total Net Salary Shortfall: ₹39,33,328 in unpaid monthly base compensation.',
      'Civil Suit Primary Claim: OS 8868/2025 claiming ₹57,26,855 total outstanding liability with interest.'
    ],
    documentExcerpts: [
      {
        id: 'snip-4-1',
        sourceLabel: 'Certified HSBC Bank Account Statement',
        sourceType: 'bank_ledger',
        quote: 'Statement Summary: Inward Transfers from Betaflux Consulting Pvt Ltd: ₹0.00 across Dec 2023, Jan 2024, Feb 2024, Mar 2024, Apr 2024, May 2024.',
        context: 'Submitted as primary financial exhibit in Civil Suit OS 8868/2025.',
        significance: 'Irrefutable banking record proving non-payment across 6+ active employment months.'
      }
    ],
    keyPoints: [
      'Certified banking record proving ₹0 salary credits across 6+ months.',
      'Corroborates ₹39,33,328 salary default and ₹57,26,855 civil suit claim.',
      'Personal financial devastation while delivering active enterprise client work.'
    ]
  },
  {
    id: 'doc-05',
    title: 'CCB Police FIR (Crime No. 0024/2025) & High Court Order Affirmation',
    category: 'civil_suit_shift',
    date: '2025-02-10',
    description: 'Copy of City Crime Branch (CCB) Police FIR (Crime No. 0024/2025 under IPC Sections 406, 420, 468, 471, 477A, 120B) and the subsequent High Court Order which routed salary recovery to Civil Suit OS 8868/2025, while explicitly preserving all civil recovery rights and Income Tax statutory prosecution.',
    fileType: 'pdf',
    driveFileId: '5betaflux_ccb_fir_high_court_order',
    driveViewLink: 'https://drive.google.com/drive/folders/betaflux',
    previewUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    fileSize: '2.4 MB',
    verified: true,
    snippets: [
      'CCB FIR Crime No. 0024/2025: Registered under IPC 406 (Criminal Breach of Trust), 420 (Cheating), 468 (Forgery), 471 (Using Forged Document), 477A (Falsification of Accounts), 120B (Criminal Conspiracy).',
      'High Court Ruling: High Court observed that employer-employee salary claims must proceed via civil court (Civil Suit OS 8868/2025), affirming that civil claims of ₹57,26,855 remain fully alive and the Income Tax Department retains statutory powers for Section 276B prosecution.',
      'High Court Financial Disclosure: Betaflux admitted company losses of ₹1.72 Crores in its High Court submissions.'
    ],
    documentExcerpts: [
      {
        id: 'snip-5-1',
        sourceLabel: 'High Court Order Excerpt',
        sourceType: 'court_order',
        quote: 'Quashing of the criminal FIR does not preclude or prejudice the claimant from pursuing full recovery of ₹57,26,855 in Civil Suit OS 8868/2025, nor does it restrain statutory authorities under the Income Tax Act from proceeding in accordance with law.',
        context: 'High Court order resolving criminal quash petition filed by Betaflux directors.',
        significance: 'Affirms that salary default is an active, legally recognized civil recovery suit (OS 8868/2025).'
      }
    ],
    keyPoints: [
      'Active Civil Suit OS 8868/2025 claiming ₹57,26,855 before Bengaluru City Civil Court.',
      'Betaflux disclosed ₹1.72 Cr in company losses during High Court proceedings.',
      'Tax authorities retain independent jurisdiction for Section 276B criminal prosecution.'
    ]
  },
  {
    id: 'doc-06',
    title: 'MCA Complaint: Unregistered Subsidiary (Haven App) & Vacated HSR Layout Office',
    category: 'corporate_governance_mca',
    date: '2024-07-22',
    description: 'Ministry of Corporate Affairs (MCA) complaint and ROC filings detailing Betaflux operating an unregistered commercial entity/subsidiary (Haven App / havenapp.co) to siphon funds and vacating its registered HSR Layout, Bengaluru office without mandatory ROC address update filings.',
    fileType: 'doc',
    driveFileId: '6betaflux_mca_roc_complaint',
    driveViewLink: 'https://drive.google.com/drive/folders/betaflux',
    previewUrl: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=800&q=80',
    fileSize: '1.3 MB',
    verified: true,
    snippets: [
      'MCA Grievance Filing: Betaflux (CIN: U72900KA2018PTC115926) operating Haven App (havenapp.co) without statutory corporate disclosures.',
      'Registered Office Abandonment: Physical office at HSR Layout, Bengaluru vacated; legal notices returned with postal endorsement "Left / Vacated without forwarding address."',
      'Companies Act Violation: Failure to file Form INC-22 within 30 days of change of registered office under Section 12 of Companies Act, 2013.'
    ],
    documentExcerpts: [
      {
        id: 'snip-6-1',
        sourceLabel: 'MCA Regulatory Complaint & Postal Return Endorsement',
        sourceType: 'tax_filing',
        quote: 'Legal notices issued to the registered corporate address at HSR Layout, Bengaluru returned undelivered with official postal remarks indicating premises vacated.',
        context: 'Documented following legal notice served on June 7, 2024.',
        significance: 'Demonstrates corporate governance evasion and physical displacement to avoid service of process.'
      }
    ],
    keyPoints: [
      'Operated unregistered entity Haven App (havenapp.co).',
      'Vacated registered HSR Layout office without mandatory MCA Form INC-22.',
      'Pattern of corporate obfuscation to frustrate legal service and creditor claims.'
    ]
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    id: 'tl-1',
    date: 'Feb – Apr 2023',
    title: 'The Offer & Onboarding: ₹90 LPA CTC & ₹8.4K Pre-Joining Dues',
    stage: '1. The Offer & Onboarding',
    description: 'Saravanan Arumugam (Aswath) appointed as Director of Cloud & DevOps on an official contract committing to ₹90,00,000 Annual CTC (₹80L Fixed Base + ₹10L Bonus). Management also committed via email to pay ₹8,400 (12 hours @ ₹700/hr) pre-joining consulting dues as a joining bonus on the first salary slip, which was never credited.',
    financialImpact: 'Contracted: ₹90 LPA CTC (₹6.67L/mo Base) | Unpaid Pre-Joining: ₹8,400',
    evidenceIds: ['doc-01'],
    legalStatus: 'Contractually Binding Agreement (Indian Contract Act)',
    keyTakeaway: 'The contract was signed at ₹90 LPA CTC. Pre-joining dues were withheld on Day 1, demonstrating an early default pattern.',
    systemicLoopholeNote: 'Startups use glamorous offer letters and pre-joining bonus promises as bait, then withhold small initial amounts testing employee compliance.'
  },
  {
    id: 'tl-2',
    date: 'Nov 2023',
    title: 'Unilateral Pay Cut & Fraudulent 28-Day "Loss of Pay" (LOP)',
    stage: '2. Unilateral Pay Cuts & LOP Fraud',
    description: 'Without written consent, management unilaterally slashed monthly pay to ₹1.8L (against ₹6.67L monthly base). To cover this on accounting books, payslips fraudulently recorded 28 days "Loss of Pay" (LOP) despite the employee working all 30 days with zero leaves. CEO Animesh Kumar emailed on Dec 14, 2023 promising that pay cuts would be "paid back as a bonus when cash flow stabilizes."',
    financialImpact: 'Monthly Shortfall: ₹3,53,334 | Fraudulent LOP: 28 Days Recorded',
    evidenceIds: ['doc-01', 'doc-03'],
    legalStatus: 'Unlawful Unilateral Wage Deduction & Accounting Falsification (Sec 477A IPC)',
    keyTakeaway: 'Management falsified payslip attendance records with 28 days LOP to mask unpaid salaries while extracting full-time labor.',
    systemicLoopholeNote: 'Companies fabricate LOP on payroll software so external auditors see reduced liabilities rather than admitted unpaid wages.'
  },
  {
    id: 'tl-3',
    date: 'Dec 2023 – May 2024',
    title: 'Zero Salary Remittances While Delivering Mission-Critical Enterprise Cloud Infrastructure',
    stage: '3. Zero Salary & Enterprise Infrastructure Delivery',
    description: 'Betaflux issued ₹0 salary credits for 6 consecutive months (Dec 2023 to May 2024). During this exact period, Saravanan Arumugam architected and maintained scalable cloud infrastructure, delivered high-availability DevOps pipelines, and supported critical enterprise client integrations (including technical architecture for a 5-year enterprise deployment). Management extracted technical deliverables, cloud infrastructure, and client demos while starving the employee of basic livelihood.',
    financialImpact: 'Accumulated Unpaid Salary: ₹39,33,328 | 6 Consecutive Months of ₹0 Salary',
    evidenceIds: ['doc-03', 'doc-04'],
    legalStatus: 'Material Breach of Contract & Commercial Exploitation',
    keyTakeaway: 'Employee maintained 100% cloud systems uptime and delivered enterprise technical milestones while receiving ₹0 in salary for 6 consecutive months.',
    systemicLoopholeNote: 'Startups exploit senior engineering leads to build mission-critical assets for free, counting on their professional commitment to uptime.'
  },
  {
    id: 'tl-4',
    date: 'May 2024',
    title: 'Resignation Handover & Statutory TDS Fraud Discovery (Form 26AS Audit)',
    stage: '4. Resignation & TDS Fraud Discovery',
    description: 'Saravanan tendered formal resignation, accepted effective May 31, 2024, completing full system handover and repository transfers. A subsequent audit of Income Tax Form 26AS and TRACES revealed that Betaflux deducted ₹14,58,640 in TDS on payslips between April 2023 – April 2024, but only deposited ₹3,89,284 with the Government (deposits stopped post-August 2023), leaving a statutory tax shortfall of ₹5,95,999 to ₹10,69,356.',
    financialImpact: 'TDS Deducted: ₹14.58L | TDS Deposited: ₹3.89L | Unremitted Shortfall: ₹5.95L – ₹10.69L',
    evidenceIds: ['doc-02', 'doc-04'],
    legalStatus: 'Section 276B Income Tax Act Violation (Criminal Offense)',
    keyTakeaway: 'Betaflux pocketed employee tax deductions instead of remitting them to the Central Government Treasury.',
    systemicLoopholeNote: 'Deducting tax on payslips without remitting to TRACES is treated as an interest-free working capital loan by unscrupulous founders.'
  },
  {
    id: 'tl-5',
    date: 'Jun 2024 – Feb 2025',
    title: 'Formal Escalations: Legal Notice, IT Warning & CCB FIR (Crime No. 0024/2025)',
    stage: '5. Formal Legal, IT & Police Escalations',
    description: 'Legal notice issued on June 7, 2024. Income Tax Office Ward 1(1) Bengaluru issued a Section 276B warning notice on June 13, 2024 (Grievance #16942293). City Crime Branch (CCB) registered FIR (Crime No. 0024/2025 under IPC 406, 420, 468, 471, 477A, 120B). An MCA complaint was also filed for operating unregistered entity Haven App (havenapp.co) and vacating the HSR Layout office without ROC filings.',
    financialImpact: 'Total Unpaid Dues Claim: ₹57,26,855 (with interest & damages)',
    evidenceIds: ['doc-02', 'doc-05', 'doc-06'],
    legalStatus: 'Police FIR Registered & IT Department Investigation Active',
    keyTakeaway: 'Formal legal notices, IT Section 276B proceedings, and CCB Police FIR initiated against Betaflux and directors.',
    systemicLoopholeNote: 'Founders routinely vacate physical offices and rebrand under secondary brand names (like Haven App) when legal notices arrive.'
  },
  {
    id: 'tl-6',
    date: 'Present (2025 – 2026)',
    title: 'High Court Order & Active Civil Suit OS 8868/2025 (Claiming ₹57,26,855)',
    stage: '6. High Court Shift & Civil Suit OS 8868/2025',
    description: 'The High Court quashed the criminal FIR on technical grounds that salary recovery must proceed via civil court (Civil Suit OS 8868/2025 before Bengaluru City Civil Court), while explicitly affirming that all civil claims of ₹57,26,855 remain fully alive and statutory authorities retain independent powers for Section 276B tax prosecution. In court, Betaflux disclosed ₹1.72 Crores in company losses.',
    financialImpact: 'Civil Suit Claim (OS 8868/2025): ₹57,26,855 | Declared Losses: ₹1.72 Crores',
    evidenceIds: ['doc-04', 'doc-05'],
    legalStatus: 'Active Civil Suit OS 8868/2025 & Active IT Ward 1(1) Investigation',
    keyTakeaway: 'The battle is actively pending in Civil Suit OS 8868/2025 for ₹57,26,855, while public awareness protects clients and job seekers.',
    systemicLoopholeNote: 'The 5-8 year civil court delay is the ultimate shield startup founders count on. Public truth dossiers remove this unfair advantage.'
  }
];

export const STRUGGLE_CHAPTERS: StruggleChapter[] = [
  {
    id: 'chapter-1',
    chapterNumber: 1,
    title: 'The Seduction: ₹90 LPA CTC, Pre-Joining Dues & The Onboarding Hook',
    subtitle: 'How Betaflux recruited a Director of Cloud & DevOps on an executive package, then withheld pre-joining dues on Day 1',
    period: 'April 2023 – October 2023',
    emotionalAndFinancialToll: 'Committed 14+ hours a day to build enterprise infrastructure; relocated and structured personal finances based on a contracted ₹90 LPA CTC (₹80L fixed base + ₹10L bonus).',
    keyDeceptions: [
      'Issued formal appointment contract for ₹90 LPA CTC (₹80,00,000 fixed annual base + ₹10,00,000 bonus).',
      'Promised 12 hours pre-joining consulting advisory (@ ₹700/hr = ₹8,400) would be paid as joining bonus on first slip—withheld from Day 1.',
      'Stopped depositing deducted TDS to the Income Tax Department post-August 2023 despite showing deductions on monthly salary slips.'
    ],
    theScamMechanism: 'Startups create a façade of rapid scaling and enterprise pedigree to attract veteran engineering directors. By promising high compensation packages on letterhead, they secure key architecture work, while secretly treating statutory taxes and joining commitments as dispensable.',
    evidenceRefIds: ['doc-01', 'doc-02'],
    fullNarrative: `In April 2023, I was recruited by Betaflux Consulting Private Limited (Directors: Animesh Kumar and Utkarsh Sinha) as Director of Cloud & DevOps. The contract formalized an Annual CTC of ₹90,00,000 (structured as ₹80,00,000 fixed base remuneration and ₹10,00,000 fixed bonus).

Prior to my formal start date of April 20, 2023, I provided 12 hours of critical pre-joining cloud consulting. Management confirmed in writing that this ₹8,400 (@ ₹700/hr) would be disbursed as a joining bonus on my initial payroll cycle. That ₹8,400 was never paid—the very first sign of a persistent non-payment pattern.

For the first six months, I built their entire cloud delivery pipeline, established enterprise DevOps standards, and supported major client bids. Unbeknownst to me at the time, while salary credits appeared regular initially, Betaflux had already stopped remitting my deducted Income Tax (TDS) to the Government after August 2023.`,
    clientWarningMessage: 'If Betaflux withholds Day 1 pre-joining commitments and stops remitting employee taxes to the Government of India, enterprise clients cannot rely on their contractual integrity or SLA compliance.'
  },
  {
    id: 'chapter-2',
    chapterNumber: 2,
    title: 'The Fraudulent 28-Day "Loss of Pay" (LOP) & Unilateral Salary Slashes',
    subtitle: 'Fabricating attendance records on payroll software to mask unpaid salaries',
    period: 'November 2023 – January 2024',
    emotionalAndFinancialToll: 'Facing unexpected salary drops to ₹1.8L; inability to service personal EMIs; confusion over payslips reflecting 28 days absence when 30 days of active git commits were recorded.',
    keyDeceptions: [
      'Unilaterally slashed November pay from ₹6.67L monthly base to ₹1.8L without written consent.',
      'Falsified payroll software records by marking 28 days as "Loss of Pay" (LOP) despite 100% active attendance.',
      'CEO Animesh Kumar emailed on Dec 14, 2023 claiming pay cuts would be "paid back as a bonus when cash flow stabilizes", but issued ₹0 in December and January.'
    ],
    theScamMechanism: 'When startups face cash crunches or choose to divert funds, they use payroll software tricks. Marking fake "Loss of Pay" (LOP) allows them to artificially lower their liability on paper so external auditors and investors do not see admitted unpaid salary arrears.',
    evidenceRefIds: ['doc-01', 'doc-03'],
    fullNarrative: `In November 2023, without any discussion or written agreement, my salary was slashed from ₹6,66,667 to ₹1,80,000. When I downloaded my November payslip, I was stunned: management had entered 28 days of "Loss of Pay" (LOP).

I had worked all 30 days in November with zero leaves, shipping critical cloud architectures and leading technical calls. When confronted on a recorded call, the company CA Pawan admitted: "That was an internal accounting placeholder to manage cash flow reporting."

On December 14, 2023, CEO Animesh Kumar sent an email promising that these temporary pay cuts would be fully reimbursed as a bonus once cash flow stabilized. But instead of stabilizing, salary credits halted entirely: December 2023 was ₹0, January 2024 was ₹0, and the debt began compounding.`,
    clientWarningMessage: 'Betaflux does not hesitate to falsify internal records and manipulate payroll accounting. Clients must verify whether project billing and contractor hours are similarly manipulated.'
  },
  {
    id: 'chapter-3',
    chapterNumber: 3,
    title: 'Delivering Mission-Critical Enterprise Architecture on ₹0 Salary & The ₹1.72 Cr Company Loss',
    subtitle: 'Engineering enterprise-grade cloud systems while going without salary for 6 consecutive months',
    period: 'February 2024 – May 2024',
    emotionalAndFinancialToll: 'Draining personal life savings; borrowing money to pay rent and food while single-handedly architecting, scaling, and maintaining mission-critical enterprise cloud systems for Betaflux.',
    keyDeceptions: [
      'Extracted continuous software development and cloud architecture under promises of imminent payroll clearance.',
      'Employee engineered scalable cloud infrastructure and high-value enterprise deliverables (including architecture for a 5-year enterprise deployment) while receiving ₹0 in compensation.',
      'Betaflux subsequently disclosed ₹1.72 Crores in company losses in High Court filings, proving severe financial distress.'
    ],
    theScamMechanism: 'Startup founders use the personal integrity of their senior leaders against them. Knowing that senior engineers will not let client systems fail or SLA commitments collapse, they extract high-value technical architecture for free while withholding payroll.',
    evidenceRefIds: ['doc-03', 'doc-04', 'doc-05'],
    fullNarrative: `Between December 2023 and May 2024, Betaflux disbursed ₹0 in salary for six consecutive months. Total unpaid base salary dues reached ₹39,33,328.

During these exact six months of zero pay, I spearheaded the core technical and cloud operations for Betaflux, architecting solutions for major enterprise engagements including a landmark 5-year enterprise deployment. I led technical demos, maintained infrastructure reliability, and ensured client SLA commitments were met—while at home, I was draining my life savings and taking emergency loans just to buy groceries.

When I demanded payment, management claimed they were waiting for international receivables. Later, during High Court proceedings, Betaflux disclosed company losses of ₹1.72 Crores. They were using my unpaid technical labor to keep their operations alive while leaving me financially devastated.`,
    clientWarningMessage: 'Betaflux operated with ₹1.72 Crores in admitted losses while failing to pay its core technical leadership. Enterprise buyers face severe delivery failure and IP abandonment risks.'
  },
  {
    id: 'chapter-4',
    chapterNumber: 4,
    title: 'The Legal Battlefield: Civil Suit OS 8868/2025, IT Sec 276B & The Unregistered Haven App',
    subtitle: 'Why the High Court shifted salary recovery to Civil Court while tax prosecution continues',
    period: 'June 2024 – Present',
    emotionalAndFinancialToll: 'Navigating police complaints, High Court quash hearings, Income Tax Ward 1(1) inquiries, and City Civil Court litigation.',
    keyDeceptions: [
      'Betaflux pocketed ₹5.95L – ₹10.69L in deducted employee TDS (Income Tax Ward 1(1) Notice #16942293).',
      'Operated unregistered subsidiary Haven App (havenapp.co) to route commercial operations.',
      'Vacated registered HSR Layout, Bengaluru office without mandatory MCA Form INC-22 filings to avoid service of process.'
    ],
    theScamMechanism: 'Corporate startup founders count on the 5-8 year duration of Indian civil courts. By having police dismiss salary theft as a "civil contract dispute", they force exhausted employees into prolonged litigation while continuing business under new brands.',
    evidenceRefIds: ['doc-02', 'doc-05', 'doc-06'],
    fullNarrative: `After resigning on May 31, 2024 with a complete handover, I discovered that Betaflux had pocketed over ₹5.95 to ₹10.69 Lakhs in TDS deducted from my compensation without depositing it with the Government.

I initiated multiple formal legal proceedings:
1. Income Tax Ward 1(1) Bengaluru issued a Section 276B criminal warning notice on June 13, 2024.
2. CCB registered an FIR (Crime No. 0024/2025) under IPC 406, 420, 468, 471, 477A, 120B.
3. Filed an MCA complaint regarding the unregistered Haven App (havenapp.co) and the vacated HSR Layout office.

Betaflux approached the High Court to quash the criminal FIR. The High Court observed that employer-employee compensation recovery must proceed through civil courts, while affirming that my civil recovery suit—now filed as Civil Suit OS 8868/2025 claiming ₹57,26,855—remains completely alive, and the Income Tax Department retains full statutory powers to prosecute for TDS defaults under Section 276B.

This dossier exists to ensure that while Civil Suit OS 8868/2025 proceeds, the public and market are fully informed of the verified truth.`,
    clientWarningMessage: 'Betaflux has active Section 276B tax notices and an active ₹57.26L civil recovery suit (OS 8868/2025). Do not enter contracts without independent legal due diligence.'
  }
];

export const LEGAL_GUIDE_SECTIONS: LegalGuideSection[] = [
  {
    id: 'loophole-civil-court-delay',
    title: 'The 5-8 Year Civil Court Shield: Why Founders Exploit "Civil Dispute" Classification',
    lawSection: 'Civil Recovery vs Criminal Breach of Trust (Section 406/420 IPC & OS 8868/2025)',
    summary: 'Startup founders know that when an employee reports unpaid wages to police, authorities often categorize it as a "civil contract dispute". Founders rely on the 5 to 8 year timeline of Indian civil courts to financially exhaust victims.',
    promoterLoophole: 'By framing intentional non-payment as a contractual disagreement, founders force employees into expensive, protracted civil court litigation while continuing to pitch to clients under new entity names.',
    remedyAction: 'Pursue multi-track legal remedies: file Civil Suit for liquidated recovery with 18% commercial interest, petition Income Tax TDS Commissioner under Section 276B, and publish document-backed public interest truth under statutory defamation exceptions.',
    concernedAuthority: 'City Civil Court (Commercial Division), Deputy Labor Commissioner, Income Tax Ward.',
    criticalSteps: [
      'Preserve the original offer letter specifying ₹90 LPA CTC (₹80L Base + ₹10L Bonus) and joining bonus terms.',
      'Obtain certified bank statements showing ₹0 inward remittances from employer account.',
      'Record and transcribe payroll discussions where company representatives admit gross liabilities (e.g. CA Pawan admitting ₹56.67L gross calculation).',
      'Track the civil suit record (e.g., Civil Suit OS 8868/2025) and ensure statutory tax grievances are independently prosecuted.'
    ],
    pitfallsToAvoid: [
      'Never rely solely on verbal police complaints without documentary filing.',
      'Do not sign unconditional exit waivers or full-and-final settlement receipts before bank clearance.',
      'Never delete WhatsApp threads or emails promising retrospective bonuses.'
    ],
    safeLinkedInDraftTip: 'Stick to objective public court and tax records: "Civil Suit OS 8868/2025 is pending before Bengaluru City Civil Court claiming ₹57,26,855 in unpaid compensation and damages against Betaflux Consulting Pvt Ltd (CIN: U72900KA2018PTC115926)."'
  },
  {
    id: 'loophole-tds-theft-276b',
    title: 'Statutory TDS Non-Remittance: Criminal Offense Under Section 276B IT Act',
    lawSection: 'Section 276B & 278B of the Income Tax Act, 1961',
    summary: 'Deducting Tax Deducted at Source (TDS) from employee salary slips while failing to credit it to the Central Government Account under employer TAN constitutes a non-compoundable criminal offense punishable with 3 months to 7 years rigorous imprisonment.',
    promoterLoophole: 'Using deducted employee taxes as interest-free working capital and counting on employees not reconciling Form 26AS/TRACES until personal tax returns are flagged.',
    remedyAction: 'File an official grievance with the jurisdictional Income Tax Officer (TDS Ward) requesting issuance of Show Cause Notice under Section 276B.',
    concernedAuthority: 'Office of the Income Tax Officer, Ward 1(1) Bengaluru (TDS Wing), Principal Chief Commissioner of Income Tax.',
    criticalSteps: [
      'Compare total TDS shown on monthly payslips (e.g. ₹14,58,640) against Form 26AS / AIS deposits (e.g. ₹3,89,284).',
      'Calculate the exact unremitted statutory shortfall (e.g. ₹5,95,999 to ₹10,69,356).',
      'Submit formal complaint to Income Tax Ward citing employer TAN (BLKB02482E) and reference Income Tax Notice #16942293.'
    ],
    pitfallsToAvoid: [
      'Do not pay double income tax without registering a formal TDS mismatch grievance on the e-filing portal.',
      'Always retain monthly payslips reflecting the exact TDS deducted under Section 192.'
    ],
    safeLinkedInDraftTip: 'State the verified tax audit: "Income Tax Ward 1(1) Bengaluru issued a Section 276B warning notice (Grievance #16942293) regarding unremitted TDS deducted from employee payslips post-August 2023."'
  },
  {
    id: 'loophole-lop-accounting-fraud',
    title: 'Fraudulent "Loss of Pay" (LOP) Entries & Falsification of Accounts',
    lawSection: 'Section 477A of IPC (Falsification of Accounts) & Payment of Wages Act',
    summary: 'Marking fake Loss of Pay (LOP) days on payroll slips for an employee who actively worked is a falsification of corporate books designed to conceal wage liability from investors and auditors.',
    promoterLoophole: 'Entering 28 days LOP to justify paying ₹1.8L instead of contracted ₹6.67L monthly base, and falsely claiming the employee was absent.',
    remedyAction: 'Export git commit logs, Jira sprint approvals, Slack/email timestamps, and client meeting invites proving full-time attendance on every single working day.',
    concernedAuthority: 'Labor Court, ROC Inspector of Companies, Forensic Auditors.',
    criticalSteps: [
      'Archive repository git contribution graphs and Jira tickets dated during the alleged LOP period.',
      'Produce email admissions from leadership (such as CEO email admitting pay cut will be reimbursed later).',
      'Obtain certified payroll audio recordings demonstrating CA admission that LOP was an accounting placeholder.'
    ],
    pitfallsToAvoid: [
      'Never accept payslips with incorrect LOP entries without sending an immediate written protest email on the same date.',
      'Do not surrender system access until you have personal proof of your attendance records.'
    ],
    safeLinkedInDraftTip: 'Highlight the factual proof: "Payslips recorded 28 days LOP despite verifiable git commits and client deliveries across all 30 days of the month."'
  }
];

export const DUE_DILIGENCE_ITEMS: DueDiligenceItem[] = [
  {
    id: 'dd-client-1',
    category: 'Enterprise Client',
    riskTitle: 'IP Encumbrance & Developer Wage Default Claims',
    severity: 'Critical',
    riskDescription: 'Software, cloud architectures, and codebases developed by unpaid engineers are vulnerable to civil lien claims and ownership disputes under Civil Suit OS 8868/2025.',
    verifiedEvidenceBacking: 'Saravanan Arumugam built core cloud architecture and delivered key enterprise milestones while receiving ₹0 in salary for 6 consecutive months (Nov 2023 - May 2024).',
    recommendedCheck: 'Demand an indemnification certificate and audited proof of full salary disbursement to all assigned engineering personnel.'
  },
  {
    id: 'dd-client-2',
    category: 'Enterprise Client',
    riskTitle: 'Financial Instability: ₹1.72 Cr Admitted Company Losses',
    severity: 'Critical',
    riskDescription: 'Betaflux disclosed ₹1.72 Crores in corporate losses during High Court proceedings, indicating acute solvency risk and potential mid-project SLA abandonment.',
    verifiedEvidenceBacking: 'Formal sworn submissions by Betaflux Consulting Private Limited in the High Court of Karnataka.',
    recommendedCheck: 'Request 3 years of audited balance sheets, MCA Form MGT-7, and proof of active escrow funding before wiring project advances.'
  },
  {
    id: 'dd-client-3',
    category: 'Enterprise Client',
    riskTitle: 'Statutory Tax Non-Compliance & Section 276B Notices',
    severity: 'High',
    riskDescription: 'Betaflux is under active investigation by Income Tax Office Ward 1(1) Bengaluru (Grievance #16942293) for withholding over ₹5.95L to ₹10.69L in statutory TDS.',
    verifiedEvidenceBacking: 'Official Income Tax Notice issued to Betaflux TAN BLKB02482E on June 13, 2024.',
    recommendedCheck: 'Verify vendor GST compliance, TAN TRACES clearance certificates, and MCA Form INC-22 registered office status.'
  },
  {
    id: 'dd-candidate-1',
    category: 'Tech Candidate / Job Seeker',
    riskTitle: 'Unfulfilled Joining Bonuses & Pre-Joining Advisory Defaults',
    severity: 'High',
    riskDescription: 'Pre-joining advisory fees and upfront joining bonuses promised in offer letters may be withheld from Day 1 under the guise of payroll sync delays.',
    verifiedEvidenceBacking: '₹8,400 pre-joining advisory dues (12 hrs @ ₹700/hr) promised in writing to Saravanan Arumugam were never disbursed.',
    recommendedCheck: 'Insist on 100% upfront wire transfer of any signing incentives before declining competing offers or resigning from current employment.'
  },
  {
    id: 'dd-candidate-2',
    category: 'Tech Candidate / Job Seeker',
    riskTitle: 'Arbitrary "Loss of Pay" (LOP) Deductions on Payslips',
    severity: 'Critical',
    riskDescription: 'Management has historically entered up to 28 days of fake LOP on monthly payslips to unilaterally cut monthly salary from ₹6.67L to ₹1.8L without consent.',
    verifiedEvidenceBacking: 'November 2023 payslip for Saravanan Arumugam recorded 28 days LOP despite 100% active sprint attendance and git commits.',
    recommendedCheck: 'Ensure the employment contract contains an explicit clause prohibiting unilateral pay cuts or LOP entries without mutual written consent.'
  },
  {
    id: 'dd-candidate-3',
    category: 'Tech Candidate / Job Seeker',
    riskTitle: 'TDS Deducted on Payslips but Missing from Form 26AS',
    severity: 'Critical',
    riskDescription: 'TDS deducted on your monthly salary slips may not be remitted to the Income Tax Department, resulting in tax demand notices and inability to obtain Form 16.',
    verifiedEvidenceBacking: 'Betaflux deducted ₹14.58L on salary slips but deposited only ₹3.89L to TRACES, leaving over ₹5.95L unpaid to the Government.',
    recommendedCheck: 'Check your Income Tax AIS and Form 26AS portal quarterly to verify that your employer is depositing monthly TDS on time.'
  }
];
