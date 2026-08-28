export type IssueCategory =
  | 'unpaid_salary'
  | 'pre_joining_consultation'
  | 'withheld_joining_bonus'
  | 'unilateral_pay_cut'
  | 'loss_of_pay_fraud'
  | 'tds_tax_fraud'
  | 'relieving_letter_hostage'
  | 'civil_suit_shift'
  | 'corporate_governance_mca'
  | 'revenue_generation_uncompensated';

export interface DocumentSnippetItem {
  id: string;
  sourceLabel: string;
  sourceType: 'contract_clause' | 'email_thread' | 'chat_message' | 'bank_ledger' | 'tax_filing' | 'court_order' | 'call_transcript';
  quote: string;
  context: string;
  significance: string;
}

export interface EvidenceDocument {
  id: string;
  title: string;
  category: IssueCategory;
  date: string;
  description: string;
  fileType: 'pdf' | 'image' | 'doc' | 'sheet' | 'email' | 'chat' | 'audio_transcript';
  driveFileId?: string;
  driveViewLink?: string;
  previewUrl?: string;
  fileSize?: string;
  verified: boolean;
  keyPoints: string[];
  snippets?: string[];
  documentExcerpts?: DocumentSnippetItem[];
}

export interface FinancialLedgerItem {
  month: string;
  period: string;
  expectedGross: number;
  tdsDeductedOnSlip: number;
  tdsDeposited26AS: number;
  netPayable: number;
  actualPaid: number;
  shortfall: number;
  cumulativeDues: number;
  workStatus: string;
  lopDaysReported: number; // For LOP fraud audit
  actualDaysWorked: number;
  auditNote: string;
}

export interface CaseFinancialSummary {
  entityName: string;
  cin: string;
  directors: string[];
  claimantName: string;
  claimantRole: string;
  tenure: string;
  offeredAnnualCtc: number;
  fixedBaseSalary: number;
  fixedAnnualBonus: number;
  preJoiningDues: number;
  totalUnpaidSalaryDues: number;
  totalCivilClaimOS8868: number;
  tdsDeductedOnPayslips: number;
  tdsActuallyDeposited: number;
  tdsUnremittedShortfallMin: number;
  tdsUnremittedShortfallMax: number;
  incomeTaxNoticeRef: string;
  policeFirRef: string;
  civilSuitRef: string;
  unregisteredSubsidiary: string;
  companyLossesDisclosedInHC: number;
  clientContractRevenueGenerated: string;
  registeredOfficeNote: string;
  ledgerRows: FinancialLedgerItem[];
}

export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  stage: 
    | '1. The Offer & Onboarding'
    | '2. Unilateral Pay Cuts & LOP Fraud'
    | '3. Zero Salary & Enterprise Infrastructure Delivery'
    | '4. Resignation & TDS Fraud Discovery'
    | '5. Formal Legal, IT & Police Escalations'
    | '6. High Court Shift & Civil Suit OS 8868/2025';
  description: string;
  financialImpact?: string;
  evidenceIds: string[];
  systemicLoopholeNote?: string;
  keyTakeaway?: string;
  legalStatus?: string;
  writtenAgreementStatus?: string;
}

export interface DriveFolderSyncState {
  folderName: string;
  folderId?: string;
  isConnected: boolean;
  isSyncing: boolean;
  lastSyncedAt?: string;
  totalFiles: number;
}

export interface StruggleChapter {
  id: string;
  chapterNumber: number;
  title: string;
  subtitle: string;
  period: string;
  emotionalAndFinancialToll: string;
  keyDeceptions: string[];
  theScamMechanism: string;
  evidenceRefIds: string[];
  fullNarrative: string;
  clientWarningMessage: string;
}

export interface LegalGuideSection {
  id: string;
  title: string;
  lawSection: string;
  summary: string;
  promoterLoophole: string;
  remedyAction: string;
  concernedAuthority: string;
  criticalSteps: string[];
  pitfallsToAvoid: string[];
  safeLinkedInDraftTip: string;
}

export interface DueDiligenceItem {
  id: string;
  category: 'Enterprise Client' | 'Tech Candidate / Job Seeker' | 'Vendor & Partner';
  riskTitle: string;
  severity: 'High' | 'Critical' | 'Warning';
  riskDescription: string;
  verifiedEvidenceBacking: string;
  recommendedCheck: string;
}
