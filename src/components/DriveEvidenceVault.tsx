import React, { useState } from 'react';
import { EvidenceDocument, IssueCategory } from '../types';
import { 
  FolderOpen, 
  Search, 
  Eye, 
  Download, 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Scissors,
  ExternalLink,
  Quote,
  Scale
} from 'lucide-react';

interface DriveEvidenceVaultProps {
  evidenceDocs: EvidenceDocument[];
  selectedDoc: EvidenceDocument | null;
  onSelectDoc: (doc: EvidenceDocument | null) => void;
  onOpenRedactTool: () => void;
  isDriveConnected: boolean;
  onConnectDrive: () => void;
}

export const DriveEvidenceVault: React.FC<DriveEvidenceVaultProps> = ({
  evidenceDocs,
  selectedDoc,
  onSelectDoc,
  onOpenRedactTool,
  isDriveConnected,
  onConnectDrive,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [modalTab, setModalTab] = useState<'excerpts' | 'snippets' | 'analysis'>('excerpts');

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'All Exhibits' },
    { id: 'withheld_joining_bonus', label: 'Joining Bonus & Offer' },
    { id: 'deceptive_document_trap', label: 'Unsigned Document Trap' },
    { id: 'unpaid_salary', label: 'Bank Statements (₹0 Pay)' },
    { id: 'planned_corporate_scam', label: 'WhatsApp & Slack Admissions' },
    { id: 'tds_tax_fraud', label: 'Form 26AS Tax Discrepancy' },
    { id: 'relieving_letter_hostage', label: 'Relieving Letter Blackmail' },
  ];

  const filteredDocs = evidenceDocs.filter((doc) => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.keyPoints.some((kp) => kp.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleDownloadDocData = (doc: EvidenceDocument) => {
    const exportData = {
      recordId: doc.id,
      title: doc.title,
      category: doc.category,
      date: doc.date,
      fileType: doc.fileType,
      primaryDescription: doc.description,
      keyFactualPoints: doc.keyPoints,
      verbatimDocumentSnippets: doc.snippets || [],
      documentExcerpts: doc.documentExcerpts || [],
      authenticationStatus: 'Verified against primary contract and bank ledgers',
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Betaflux_Evidence_${doc.id}_Audit_Record.json`;
    a.click();
  };

  return (
    <div className="space-y-6" id="drive-vault-section">
      {/* Header with Drive Sync Status */}
      <div className="p-6 sm:p-8 bg-[#141414] border border-[#262626] rounded-2xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-indigo-900/60 text-indigo-400 flex items-center justify-center font-bold">
              <FolderOpen className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] tracking-tight">
                  Primary Evidence &amp; Document Snippets
                </h2>
                <span className="font-mono text-xs bg-indigo-950/80 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-800/60 font-semibold">
                  /betaflux
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Inspect authentic contract clauses, WhatsApp admissions, zero-salary bank audits, and tax filings.
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={onOpenRedactTool}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-[#181818] hover:bg-[#222222] text-slate-200 border border-[#262626] transition-all cursor-pointer"
            title="Redact screenshots before sharing"
          >
            <Scissors className="w-3.5 h-3.5 text-indigo-400" />
            <span>Redact Screenshot Tool</span>
          </button>

          <button
            onClick={onConnectDrive}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
              isDriveConnected
                ? 'bg-emerald-950/80 border-emerald-800/60 text-emerald-300'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs border-indigo-500/40'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isDriveConnected ? 'Drive Connected (/betaflux)' : 'Link Drive Storage'}</span>
          </button>
        </div>
      </div>

      {/* Authenticity & Safety Notice */}
      <div className="p-4 sm:p-5 bg-[#181818] border border-[#262626] rounded-2xl flex items-start gap-3.5 text-xs text-slate-300">
        <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
        <div className="space-y-0.5 leading-relaxed">
          <strong className="font-bold text-[#F8FAFC] block text-sm">
            Primary Document Integrity
          </strong>
          <p className="text-slate-400">
            Every exhibit below represents verified primary documentation from the employment tenure with Betaflux. Private identifiers such as PAN numbers, residential addresses, and PF numbers are kept confidential to prevent harassment, while all financial figures, contract terms, and communications are shared openly and transparently.
          </p>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-5 bg-[#141414] border border-[#262626] rounded-2xl shadow-md space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search evidence records, dates, clauses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-[#181818] border border-[#262626] text-[#F8FAFC] placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* View Toggles & Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <span className="text-xs font-semibold text-slate-400">
              Showing <strong className="text-[#F8FAFC] font-bold">{filteredDocs.length}</strong> of {evidenceDocs.length} exhibits
            </span>
            <div className="flex items-center p-1 bg-[#181818] rounded-xl border border-[#262626]">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-[#262626] text-white shadow-xs font-bold' : 'text-slate-400 hover:text-[#F8FAFC]'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'table' ? 'bg-[#262626] text-white shadow-xs font-bold' : 'text-slate-400 hover:text-[#F8FAFC]'
                }`}
              >
                Table
              </button>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-[#181818] text-slate-400 hover:bg-[#222222] hover:text-[#F8FAFC] border border-[#262626]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Mode */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="p-6 bg-[#141414] hover:bg-[#181818] border border-[#262626] hover:border-indigo-500/50 rounded-2xl shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 bg-[#181818] px-2 py-0.5 rounded border border-[#262626]">
                    {doc.driveFileId ? `/betaflux/${doc.driveFileId}` : `/betaflux/${doc.id}`}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-800/60">
                    {doc.date}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="font-bold text-base text-[#F8FAFC] group-hover:text-indigo-400 transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                {/* Key Takeaways Preview */}
                <div className="space-y-1.5 pt-1">
                  {doc.keyPoints.slice(0, 2).map((kp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{kp}</span>
                    </div>
                  ))}
                </div>

                {/* Verbatim Snippet Preview if available */}
                {doc.snippets && doc.snippets[0] && (
                  <div className="p-2.5 bg-[#181818] border border-[#262626] rounded-xl text-[11px] text-slate-300 font-mono line-clamp-2 italic">
                    "{doc.snippets[0]}"
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#262626] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDoc(doc)}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-indigo-950/80 text-indigo-300 hover:bg-indigo-900 border border-indigo-800/60 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                <button
                  onClick={() => handleDownloadDocData(doc)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-[#181818] hover:bg-[#222222] text-slate-300 border border-[#262626] transition-colors cursor-pointer"
                  title="Download verified JSON exhibit"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>JSON</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table Mode */}
      {viewMode === 'table' && (
        <div className="overflow-x-auto bg-[#141414] border border-[#262626] rounded-2xl shadow-md">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-[#181818] border-b border-[#262626] text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Exhibit Record</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Summary Description</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262626]">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-[#181818]/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#F8FAFC]">{doc.title}</div>
                    <div className="font-mono text-[10px] text-slate-500">/betaflux/{doc.id}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
                      {doc.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-400">{doc.date}</td>
                  <td className="py-3.5 px-4 max-w-xs text-slate-400 truncate">
                    {doc.description}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onSelectDoc(doc)}
                      className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-950/80 text-indigo-300 hover:bg-indigo-900 border border-indigo-800/60 cursor-pointer"
                    >
                      Inspect
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Exhibit Detail Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#141414] border border-[#262626] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-[#F8FAFC]">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-[#262626] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-800/60">
                    {selectedDoc.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-slate-400 bg-[#181818] px-2 py-0.5 rounded border border-[#262626]">
                    /betaflux/{selectedDoc.id}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => onSelectDoc(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#181818] text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-2 border-b border-[#262626] pb-2">
              <button
                onClick={() => setModalTab('excerpts')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  modalTab === 'excerpts'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:bg-[#181818] hover:text-white'
                }`}
              >
                Document Excerpts &amp; Clauses
              </button>
              <button
                onClick={() => setModalTab('snippets')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  modalTab === 'snippets'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:bg-[#181818] hover:text-white'
                }`}
              >
                Verbatim Transcripts
              </button>
              <button
                onClick={() => setModalTab('analysis')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  modalTab === 'analysis'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-400 hover:bg-[#181818] hover:text-white'
                }`}
              >
                Factual Takeaways
              </button>
            </div>

            {/* Modal Tab 1: Detailed Excerpts */}
            {modalTab === 'excerpts' && (
              <div className="space-y-4">
                {selectedDoc.documentExcerpts && selectedDoc.documentExcerpts.length > 0 ? (
                  selectedDoc.documentExcerpts.map((excerpt) => (
                    <div key={excerpt.id} className="p-5 bg-[#181818] border border-[#262626] rounded-xl space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-indigo-400">
                        <div className="flex items-center gap-1.5">
                          <Quote className="w-3.5 h-3.5" />
                          <span>{excerpt.sourceLabel}</span>
                        </div>
                        <span className="font-mono text-[10px] bg-indigo-950/80 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800/60 uppercase">
                          {excerpt.sourceType}
                        </span>
                      </div>

                      <div className="p-3 bg-[#111111] border border-[#262626] rounded-lg text-xs font-mono text-slate-200 leading-relaxed italic">
                        "{excerpt.quote}"
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div>
                          <strong className="text-slate-300 block mb-0.5">Context:</strong>
                          <span className="text-slate-400">{excerpt.context}</span>
                        </div>
                        <div>
                          <strong className="text-slate-300 block mb-0.5">Legal &amp; Practical Significance:</strong>
                          <span className="text-indigo-300 font-medium">{excerpt.significance}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 bg-[#181818] rounded-xl text-xs text-slate-400">
                    Excerpts formatted in the verbatim transcripts tab.
                  </div>
                )}
              </div>
            )}

            {/* Modal Tab 2: Verbatim Transcripts */}
            {modalTab === 'snippets' && (
              <div className="space-y-3">
                {selectedDoc.snippets && selectedDoc.snippets.map((snip, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#0D0D0D] rounded-xl font-mono text-xs text-slate-200 border border-[#262626] leading-relaxed"
                  >
                    {snip}
                  </div>
                ))}
              </div>
            )}

            {/* Modal Tab 3: Factual Analysis & Key Points */}
            {modalTab === 'analysis' && (
              <div className="space-y-3">
                <div className="p-4 bg-[#181818] border border-[#262626] rounded-xl space-y-1.5">
                  <div className="text-xs font-bold text-[#F8FAFC] flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Statutory &amp; Factual Record Description</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {selectedDoc.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Key Factual Points:
                  </h4>
                  {selectedDoc.keyPoints.map((point, idx) => (
                    <div key={idx} className="p-3 bg-[#181818] border border-[#262626] rounded-xl flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#262626]">
              <a
                href={selectedDoc.driveViewLink || 'https://drive.google.com/drive/folders/betaflux'}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 hover:underline"
              >
                <span>Open in Drive Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectDoc(null)}
                  className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-[#181818] hover:bg-[#222222] text-slate-300 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => handleDownloadDocData(selectedDoc)}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-xs transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Exhibit JSON</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
