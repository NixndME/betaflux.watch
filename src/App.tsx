import React, { useState } from 'react';
import { Navbar, NavTabType } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { FocusedSectionHeader } from './components/FocusedSectionHeader';
import { BattleStruggleChronicle } from './components/BattleStruggleChronicle';
import { FinancialCompensationLedger } from './components/FinancialCompensationLedger';
import { PublicAdvisoryWarning } from './components/PublicAdvisoryWarning';
import { DriveEvidenceVault } from './components/DriveEvidenceVault';
import { TimelineSection } from './components/TimelineSection';
import { StartupLoopholeGuide } from './components/StartupLoopholeGuide';
import { Footer } from './components/Footer';
import { 
  CASE_EVIDENCE_DOCS, 
  TIMELINE_MILESTONES, 
  STRUGGLE_CHAPTERS, 
  CASE_FINANCIAL_SUMMARY 
} from './data/caseData';
import { EvidenceDocument } from './types';
import { 
  FolderOpen, 
  Scale, 
  Clock, 
  Flame, 
  ShieldAlert, 
  IndianRupee 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTabType>('overview');
  const [evidenceDocs, setEvidenceDocs] = useState<EvidenceDocument[]>(CASE_EVIDENCE_DOCS);
  const [selectedDoc, setSelectedDoc] = useState<EvidenceDocument | null>(null);

  const handleTabChange = (tab: NavTabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEvidenceFromTimeline = (docId: string) => {
    const found = evidenceDocs.find((d) => d.id === docId);
    if (found) {
      setSelectedDoc(found);
    }
    handleTabChange('drive');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0A0A0A] text-slate-900 dark:text-[#F8FAFC] font-sans selection:bg-[#FF3366] selection:text-white transition-colors duration-200">
      {/* Top Navigation Bar with Dark & Normal Mode Switcher */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* If Overview: Show Full Whistleblower Hero Banner */}
        {activeTab === 'overview' ? (
          <HeroBanner
            onExploreBattle={() => handleTabChange('battle')}
            onExploreFinancial={() => handleTabChange('financial')}
            onExploreAdvisory={() => handleTabChange('advisory')}
            onExploreVault={() => handleTabChange('drive')}
            onExploreLegal={() => handleTabChange('scam_anatomy')}
            totalEvidenceCount={evidenceDocs.length}
          />
        ) : (
          /* If Specific Tab: Show Focused Section Header so content appears immediately at top of laptop screen! */
          <FocusedSectionHeader
            activeTab={activeTab}
            onSelectTab={handleTabChange}
            onBackToOverview={() => handleTabChange('overview')}
            evidenceCount={evidenceDocs.length}
          />
        )}

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          {/* Quick Tab Switcher (Displayed on Overview mode) */}
          {activeTab === 'overview' && (
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-[#262626]">
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1.5 bg-white dark:bg-[#141414] rounded-xl border border-slate-200 dark:border-[#262626] shadow-xs">
                <button
                  onClick={() => handleTabChange('overview')}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-slate-900 dark:bg-[#262626] text-white shadow-xs font-bold border border-slate-800 dark:border-slate-600/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#181818]'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => handleTabChange('financial')}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/40"
                >
                  <IndianRupee className="w-3.5 h-3.5" />
                  Financials (₹57.26L Claim)
                </button>
                <button
                  onClick={() => handleTabChange('battle')}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/40"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  The Battle &amp; Chronicle
                </button>
                <button
                  onClick={() => handleTabChange('advisory')}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40"
                >
                  <ShieldAlert className="w-3.5 h-3.5" />
                  Client &amp; Candidate Caution
                </button>
                <button
                  onClick={() => handleTabChange('drive')}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#181818]"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  Evidence Vault ({evidenceDocs.length})
                </button>
                <button
                  onClick={() => handleTabChange('timeline')}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#181818]"
                >
                  <Clock className="w-3.5 h-3.5" />
                  Timeline
                </button>
                <button
                  onClick={() => handleTabChange('scam_anatomy')}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#181818]"
                >
                  <Scale className="w-3.5 h-3.5" />
                  The Scam Anatomy
                </button>
              </div>
            </div>
          )}

          {/* TAB 1: OVERVIEW (Aggregated Layout) */}
          {activeTab === 'overview' && (
            <div className="space-y-14 animate-in fade-in duration-300">
              {/* Financial Compensation Ledger & Arrears */}
              <FinancialCompensationLedger
                financialSummary={CASE_FINANCIAL_SUMMARY}
                onExploreEvidence={() => handleTabChange('drive')}
                onExploreBattle={() => handleTabChange('battle')}
              />

              {/* The Battle & Struggle Chronicle */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#262626]">
                <BattleStruggleChronicle
                  chapters={STRUGGLE_CHAPTERS}
                  evidenceDocs={evidenceDocs}
                  onSelectEvidence={handleSelectEvidenceFromTimeline}
                  onExploreAdvisory={() => handleTabChange('advisory')}
                  onExploreEvidence={() => handleTabChange('drive')}
                />
              </div>

              {/* Public Caution Advisory for Clients and Candidates */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#262626]">
                <PublicAdvisoryWarning
                  onExploreTimeline={() => handleTabChange('timeline')}
                  onExploreEvidence={() => handleTabChange('drive')}
                  onExploreBattle={() => handleTabChange('battle')}
                />
              </div>

              {/* Chronological Timeline */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#262626]">
                <TimelineSection
                  milestones={TIMELINE_MILESTONES}
                  evidenceDocs={evidenceDocs}
                  onSelectEvidence={handleSelectEvidenceFromTimeline}
                />
              </div>

              {/* Document Evidence Vault */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#262626]">
                <DriveEvidenceVault
                  evidenceDocs={evidenceDocs}
                  selectedDoc={selectedDoc}
                  onSelectDoc={setSelectedDoc}
                />
              </div>

              {/* Startup Loophole Anatomy & Wage Theft Exploitation */}
              <div className="pt-6 border-t border-slate-200 dark:border-[#262626]">
                <StartupLoopholeGuide
                  onExploreAdvisory={() => handleTabChange('advisory')}
                  onExploreBattle={() => handleTabChange('battle')}
                  onExploreEvidence={() => handleTabChange('drive')}
                />
              </div>
            </div>
          )}

          {/* TAB 2: FINANCIAL COMPENSATION LEDGER */}
          {activeTab === 'financial' && (
            <div className="animate-in fade-in duration-200">
              <FinancialCompensationLedger
                financialSummary={CASE_FINANCIAL_SUMMARY}
                onExploreEvidence={() => handleTabChange('drive')}
                onExploreBattle={() => handleTabChange('battle')}
              />
            </div>
          )}

          {/* TAB 3: THE BATTLE & STRUGGLE */}
          {activeTab === 'battle' && (
            <div className="animate-in fade-in duration-200">
              <BattleStruggleChronicle
                chapters={STRUGGLE_CHAPTERS}
                evidenceDocs={evidenceDocs}
                onSelectEvidence={handleSelectEvidenceFromTimeline}
                onExploreAdvisory={() => handleTabChange('advisory')}
                onExploreEvidence={() => handleTabChange('drive')}
              />
            </div>
          )}

          {/* TAB 4: CLIENT & CANDIDATE CAUTION ADVISORY */}
          {activeTab === 'advisory' && (
            <div className="animate-in fade-in duration-200">
              <PublicAdvisoryWarning
                onExploreTimeline={() => handleTabChange('timeline')}
                onExploreEvidence={() => handleTabChange('drive')}
                onExploreBattle={() => handleTabChange('battle')}
              />
            </div>
          )}

          {/* TAB 5: DRIVE VAULT */}
          {activeTab === 'drive' && (
            <div className="animate-in fade-in duration-200">
              <DriveEvidenceVault
                evidenceDocs={evidenceDocs}
                selectedDoc={selectedDoc}
                onSelectDoc={setSelectedDoc}
              />
            </div>
          )}

          {/* TAB 6: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="animate-in fade-in duration-200">
              <TimelineSection
                milestones={TIMELINE_MILESTONES}
                evidenceDocs={evidenceDocs}
                onSelectEvidence={handleSelectEvidenceFromTimeline}
              />
            </div>
          )}

          {/* TAB 7: THE SCAM ANATOMY & LOOPHOLES */}
          {activeTab === 'scam_anatomy' && (
            <div className="animate-in fade-in duration-200">
              <StartupLoopholeGuide
                onExploreAdvisory={() => handleTabChange('advisory')}
                onExploreBattle={() => handleTabChange('battle')}
                onExploreEvidence={() => handleTabChange('drive')}
              />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onExploreBattle={() => handleTabChange('battle')}
        onExploreAdvisory={() => handleTabChange('advisory')}
      />
    </div>
  );
}
