import React, { useState, useEffect } from 'react';
import { Navbar, NavTabType } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { BattleStruggleChronicle } from './components/BattleStruggleChronicle';
import { FinancialCompensationLedger } from './components/FinancialCompensationLedger';
import { PublicAdvisoryWarning } from './components/PublicAdvisoryWarning';
import { DriveEvidenceVault } from './components/DriveEvidenceVault';
import { TimelineSection } from './components/TimelineSection';
import { StartupLoopholeGuide } from './components/StartupLoopholeGuide';
import { SocialShareToolkit } from './components/SocialShareToolkit';
import { RedactCanvasModal } from './components/RedactCanvasModal';
import { Footer } from './components/Footer';
import { 
  CASE_EVIDENCE_DOCS, 
  TIMELINE_MILESTONES, 
  STRUGGLE_CHAPTERS, 
  CASE_FINANCIAL_SUMMARY 
} from './data/caseData';
import { driveService } from './services/driveService';
import { EvidenceDocument } from './types';
import { 
  FolderOpen, 
  Scale, 
  Clock, 
  Share2, 
  Flame, 
  ShieldAlert, 
  IndianRupee 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTabType>('overview');
  const [evidenceDocs, setEvidenceDocs] = useState<EvidenceDocument[]>(CASE_EVIDENCE_DOCS);
  const [selectedDoc, setSelectedDoc] = useState<EvidenceDocument | null>(null);

  const [isRedactModalOpen, setIsRedactModalOpen] = useState<boolean>(false);
  const [isDriveConnected, setIsDriveConnected] = useState<boolean>(false);
  const [isSyncingDrive, setIsSyncingDrive] = useState<boolean>(false);
  const [driveFolderName, setDriveFolderName] = useState<string>('betaflux');

  // Sync Google Drive client on load
  useEffect(() => {
    driveService.initializeGsiClient(undefined, async () => {
      setIsDriveConnected(true);
      await syncDriveFiles();
    });
  }, []);

  const syncDriveFiles = async () => {
    setIsSyncingDrive(true);
    try {
      const files = await driveService.fetchBetafluxFolderFiles(driveFolderName);
      setEvidenceDocs(files);
      setIsDriveConnected(true);
    } catch (err) {
      console.warn('Drive sync fallback:', err);
    } finally {
      setIsSyncingDrive(false);
    }
  };

  const handleConnectDrive = async () => {
    setIsSyncingDrive(true);
    try {
      await driveService.requestAccessToken();
      await syncDriveFiles();
    } catch (e) {
      console.error(e);
      setEvidenceDocs(CASE_EVIDENCE_DOCS);
      setIsDriveConnected(true);
    } finally {
      setIsSyncingDrive(false);
    }
  };

  const handleSelectEvidenceFromTimeline = (docId: string) => {
    const found = evidenceDocs.find((d) => d.id === docId);
    if (found) {
      setSelectedDoc(found);
    }
    setActiveTab('drive');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-900 font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRedactModal={() => setIsRedactModalOpen(true)}
        isDriveConnected={isDriveConnected}
        onConnectDrive={handleConnectDrive}
        isSyncingDrive={isSyncingDrive}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Top Hero Banner */}
        <HeroBanner
          onExploreBattle={() => setActiveTab('battle')}
          onExploreFinancial={() => setActiveTab('financial')}
          onExploreAdvisory={() => setActiveTab('advisory')}
          onExploreVault={() => setActiveTab('drive')}
          onExploreLegal={() => setActiveTab('scam_anatomy')}
          onExploreSocial={() => setActiveTab('social')}
          totalEvidenceCount={evidenceDocs.length}
        />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          {/* Quick Tab Switcher */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none p-1 bg-slate-100 rounded-xl border border-slate-200/70">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'overview'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('financial')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'financial'
                    ? 'bg-red-600 text-white shadow-xs font-bold'
                    : 'text-red-700 hover:text-red-900'
                }`}
              >
                <IndianRupee className="w-3.5 h-3.5" />
                Financials (₹57.26L Claim)
              </button>
              <button
                onClick={() => setActiveTab('battle')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'battle'
                    ? 'bg-indigo-600 text-white shadow-xs font-bold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-red-500" />
                The Battle &amp; Chronicle
              </button>
              <button
                onClick={() => setActiveTab('advisory')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'advisory'
                    ? 'bg-amber-500 text-white shadow-xs font-bold'
                    : 'text-amber-700 hover:text-amber-800'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                Client &amp; Candidate Caution
              </button>
              <button
                onClick={() => setActiveTab('drive')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'drive'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FolderOpen className="w-3.5 h-3.5" />
                Evidence Vault ({evidenceDocs.length})
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'timeline'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                Timeline
              </button>
              <button
                onClick={() => setActiveTab('scam_anatomy')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'scam_anatomy'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                The Scam Anatomy
              </button>
              <button
                onClick={() => setActiveTab('social')}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'social'
                    ? 'bg-white text-indigo-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                Share Warning
              </button>
            </div>
          </div>

          {/* TAB 1: OVERVIEW (Aggregated Layout) */}
          {activeTab === 'overview' && (
            <div className="space-y-14 animate-in fade-in duration-300">
              {/* Financial Compensation Ledger & Arrears */}
              <FinancialCompensationLedger
                financialSummary={CASE_FINANCIAL_SUMMARY}
                onExploreEvidence={() => setActiveTab('drive')}
                onExploreBattle={() => setActiveTab('battle')}
              />

              {/* The Battle & Struggle Chronicle */}
              <div className="pt-6 border-t border-slate-200/80">
                <BattleStruggleChronicle
                  chapters={STRUGGLE_CHAPTERS}
                  evidenceDocs={evidenceDocs}
                  onSelectEvidence={handleSelectEvidenceFromTimeline}
                  onExploreAdvisory={() => setActiveTab('advisory')}
                  onExploreEvidence={() => setActiveTab('drive')}
                />
              </div>

              {/* Public Caution Advisory for Clients and Candidates */}
              <div className="pt-6 border-t border-slate-200/80">
                <PublicAdvisoryWarning
                  onExploreTimeline={() => setActiveTab('timeline')}
                  onExploreEvidence={() => setActiveTab('drive')}
                  onExploreBattle={() => setActiveTab('battle')}
                />
              </div>

              {/* Chronological Timeline */}
              <div className="pt-6 border-t border-slate-200/80">
                <TimelineSection
                  milestones={TIMELINE_MILESTONES}
                  evidenceDocs={evidenceDocs}
                  onSelectEvidence={handleSelectEvidenceFromTimeline}
                />
              </div>

              {/* Drive Evidence Vault */}
              <div className="pt-6 border-t border-slate-200/80">
                <DriveEvidenceVault
                  evidenceDocs={evidenceDocs}
                  selectedDoc={selectedDoc}
                  onSelectDoc={setSelectedDoc}
                  onOpenRedactTool={() => setIsRedactModalOpen(true)}
                  isDriveConnected={isDriveConnected}
                  onConnectDrive={handleConnectDrive}
                />
              </div>

              {/* Scam Anatomy & Legal Loophole Analysis */}
              <div className="pt-6 border-t border-slate-200/80">
                <StartupLoopholeGuide
                  onExploreSocial={() => setActiveTab('social')}
                  onExploreBattle={() => setActiveTab('battle')}
                  onExploreEvidence={() => setActiveTab('drive')}
                />
              </div>

              {/* Social Share Alert Toolkit */}
              <div className="pt-6 border-t border-slate-200/80">
                <SocialShareToolkit />
              </div>
            </div>
          )}

          {/* TAB 2: FINANCIAL COMPENSATION LEDGER */}
          {activeTab === 'financial' && (
            <div className="animate-in fade-in duration-200">
              <FinancialCompensationLedger
                financialSummary={CASE_FINANCIAL_SUMMARY}
                onExploreEvidence={() => setActiveTab('drive')}
                onExploreBattle={() => setActiveTab('battle')}
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
                onExploreAdvisory={() => setActiveTab('advisory')}
                onExploreEvidence={() => setActiveTab('drive')}
              />
            </div>
          )}

          {/* TAB 4: CLIENT & CANDIDATE CAUTION ADVISORY */}
          {activeTab === 'advisory' && (
            <div className="animate-in fade-in duration-200">
              <PublicAdvisoryWarning
                onExploreTimeline={() => setActiveTab('timeline')}
                onExploreEvidence={() => setActiveTab('drive')}
                onExploreBattle={() => setActiveTab('battle')}
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
                onOpenRedactTool={() => setIsRedactModalOpen(true)}
                isDriveConnected={isDriveConnected}
                onConnectDrive={handleConnectDrive}
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
                onExploreSocial={() => setActiveTab('social')}
                onExploreBattle={() => setActiveTab('battle')}
                onExploreEvidence={() => setActiveTab('drive')}
              />
            </div>
          )}

          {/* TAB 8: SHARE WARNING ALERT */}
          {activeTab === 'social' && (
            <div className="animate-in fade-in duration-200">
              <SocialShareToolkit />
            </div>
          )}
        </div>
      </main>

      {/* Redact Canvas Screenshot Tool Modal */}
      <RedactCanvasModal
        isOpen={isRedactModalOpen}
        onClose={() => setIsRedactModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenRedactModal={() => setIsRedactModalOpen(true)}
        onExploreBattle={() => setActiveTab('battle')}
        onExploreAdvisory={() => setActiveTab('advisory')}
      />
    </div>
  );
}
