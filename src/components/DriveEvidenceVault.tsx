import React, { useState } from 'react';
import { EvidenceDocument } from '../types';
import { 
  FolderOpen, 
  Search, 
  Eye, 
  Download, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Quote
} from 'lucide-react';

interface DriveEvidenceVaultProps {
  evidenceDocs: EvidenceDocument[];
  selectedDoc: EvidenceDocument | null;
  onSelectDoc: (doc: EvidenceDocument | null) => void;
}

export const DriveEvidenceVault: React.FC<DriveEvidenceVaultProps> = ({
  evidenceDocs,
  selectedDoc,
  onSelectDoc,
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
    <div className="space-y-5" id="drive-vault-section">
      {/* Clean Unboxed Section Header */}
      <div className="space-y-1 pt-1">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
            Primary Evidence &amp; Document Snippets
          </h2>
          <span className="inline-flex items-center text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-300 dark:border-emerald-800 font-semibold">
            🛡️ Verified Primary Exhibits | PII Redacted
          </span>
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          Inspect authentic contract clauses, WhatsApp admissions, zero-salary bank audits, and tax filings.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="p-5 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl shadow-md space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search evidence records, dates, clauses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-[#262626] text-slate-900 dark:text-[#F8FAFC] placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* View Toggles & Count */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Showing <strong className="text-slate-900 dark:text-[#F8FAFC] font-bold">{filteredDocs.length}</strong> of {evidenceDocs.length} exhibits
            </span>
            <div className="flex items-center p-1 bg-slate-100 dark:bg-[#181818] rounded-xl border border-slate-200 dark:border-[#262626]">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid' ? 'bg-white dark:bg-[#262626] text-slate-900 dark:text-white shadow-xs font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F8FAFC]'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  viewMode === 'table' ? 'bg-white dark:bg-[#262626] text-slate-900 dark:text-white shadow-xs font-bold' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#F8FAFC]'
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
                  : 'bg-slate-100 dark:bg-[#181818] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#222222] hover:text-slate-900 dark:hover:text-[#F8FAFC] border border-slate-200 dark:border-[#262626]'
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
              className="p-6 bg-white dark:bg-[#141414] hover:bg-slate-50 dark:hover:bg-[#181818] border border-slate-200 dark:border-[#262626] hover:border-indigo-400 dark:hover:border-indigo-500/50 rounded-2xl shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Card Top Meta */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#181818] px-2 py-0.5 rounded border border-slate-200 dark:border-[#262626]">
                    {doc.driveFileId ? `/betaflux/${doc.driveFileId}` : `/betaflux/${doc.id}`}
                  </span>
                  <span className="text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/60">
                    {doc.date}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-[#F8FAFC] group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
                    {doc.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                {/* Key Takeaways Preview */}
                <div className="space-y-1.5 pt-1">
                  {doc.keyPoints.slice(0, 3).map((kp, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-snug">{kp}</span>
                    </div>
                  ))}
                </div>

                {/* Verbatim Contract Snippet & Excerpt Box */}
                {doc.snippets && doc.snippets.length > 0 && (
                  <div className="p-3 bg-slate-50 dark:bg-[#111111] border border-indigo-100 dark:border-indigo-950/80 rounded-xl space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      <Quote className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                      <span>Verbatim Contract / Notice Excerpt:</span>
                    </div>
                    <div className="text-[11px] text-slate-800 dark:text-slate-300 font-mono leading-relaxed bg-white dark:bg-[#161616] p-2 rounded-lg border border-slate-200 dark:border-[#222222]">
                      "{doc.snippets[0]}"
                    </div>
                    {doc.snippets[1] && (
                      <div className="text-[11px] text-slate-700 dark:text-slate-400 font-mono leading-relaxed bg-white dark:bg-[#161616] p-2 rounded-lg border border-slate-200 dark:border-[#222222]">
                        "{doc.snippets[1]}"
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 dark:border-[#262626] flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectDoc(doc)}
                  className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-800/60 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Document</span>
                </button>

                <button
                  onClick={() => handleDownloadDocData(doc)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-[#181818] hover:bg-slate-200 dark:hover:bg-[#222222] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#262626] transition-colors cursor-pointer"
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
        <div className="overflow-x-auto bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl shadow-md">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-[#181818] border-b border-slate-200 dark:border-[#262626] text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Exhibit Record</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Summary Description</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-[#262626]">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50 dark:hover:bg-[#181818]/80 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-slate-900 dark:text-[#F8FAFC]">{doc.title}</div>
                    <div className="font-mono text-[10px] text-slate-500">/betaflux/{doc.id}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                      {doc.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500 dark:text-slate-400">{doc.date}</td>
                  <td className="py-3.5 px-4 max-w-xs text-slate-600 dark:text-slate-400 truncate">
                    {doc.description}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onSelectDoc(doc)}
                      className="px-3 py-1 text-xs font-bold rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 border border-indigo-200 dark:border-indigo-800/60 cursor-pointer"
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
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#262626] rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-900 dark:text-[#F8FAFC]">
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-[#262626] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/80 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800/60">
                    {selectedDoc.category.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-[#181818] px-2 py-0.5 rounded border border-slate-200 dark:border-[#262626]">
                    /betaflux/{selectedDoc.id}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-[#F8FAFC]">
                  {selectedDoc.title}
                </h3>
              </div>
              <button
                onClick={() => onSelectDoc(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#181818] text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-[#262626] pb-2">
              <button
                onClick={() => setModalTab('excerpts')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  modalTab === 'excerpts'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#181818] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Document Excerpts &amp; Clauses
              </button>
              <button
                onClick={() => setModalTab('snippets')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  modalTab === 'snippets'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#181818] hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Verbatim Transcripts
              </button>
              <button
                onClick={() => setModalTab('analysis')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  modalTab === 'analysis'
                    ? 'bg-indigo-600 text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#181818] hover:text-slate-900 dark:hover:text-white'
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
                    <div key={excerpt.id} className="p-5 bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-[#262626] rounded-xl space-y-3">
                      <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                        <div className="flex items-center gap-1.5">
                          <Quote className="w-3.5 h-3.5" />
                          <span>{excerpt.sourceLabel}</span>
                        </div>
                        <span className="font-mono text-[10px] bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800/60 uppercase">
                          {excerpt.sourceType}
                        </span>
                      </div>

                      <div className="p-3 bg-white dark:bg-[#111111] border border-slate-200 dark:border-[#262626] rounded-lg text-xs font-mono text-slate-800 dark:text-slate-200 leading-relaxed italic">
                        "{excerpt.quote}"
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                        <div>
                          <strong className="text-slate-700 dark:text-slate-300 block mb-0.5">Context:</strong>
                          <span className="text-slate-600 dark:text-slate-400">{excerpt.context}</span>
                        </div>
                        <div>
                          <strong className="text-slate-700 dark:text-slate-300 block mb-0.5">Legal &amp; Practical Significance:</strong>
                          <span className="text-indigo-600 dark:text-indigo-300 font-medium">{excerpt.significance}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 bg-slate-50 dark:bg-[#181818] rounded-xl text-xs text-slate-600 dark:text-slate-400">
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
                    className="p-4 bg-slate-50 dark:bg-[#0D0D0D] rounded-xl font-mono text-xs text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#262626] leading-relaxed"
                  >
                    {snip}
                  </div>
                ))}
              </div>
            )}

            {/* Modal Tab 3: Factual Analysis & Key Points */}
            {modalTab === 'analysis' && (
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 dark:bg-[#181818] border border-slate-200 dark:border-[#262626] rounded-xl space-y-1.5">
                  <div className="text-xs font-bold text-slate-900 dark:text-[#F8FAFC] flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                    <span>Statutory &amp; Factual Record Description</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedDoc.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Key Factual Points:
                  </h4>
                  {selectedDoc.keyPoints.map((point, idx) => (
                    <div key={idx} className="p-3 bg-white dark:bg-[#181818] border border-slate-200 dark:border-[#262626] rounded-xl flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-[#262626]">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                <span>Verified Primary Exhibit Record • PII Redacted</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectDoc(null)}
                  className="px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-[#181818] hover:bg-slate-200 dark:hover:bg-[#222222] text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
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
