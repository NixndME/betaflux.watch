import React from 'react';
import { Shield, Lock, Scale, Heart, ExternalLink, Flame, Building2, Users } from 'lucide-react';

interface FooterProps {
  onExploreBattle: () => void;
  onExploreAdvisory: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onExploreBattle,
  onExploreAdvisory,
}) => {
  return (
    <footer className="border-t border-slate-200 dark:border-[#262626] bg-slate-100 dark:bg-[#0A0A0A] text-slate-600 dark:text-slate-300 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand & Purpose */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF3366] via-red-600 to-amber-600 text-white flex items-center justify-center font-bold text-sm shadow-md border border-red-500/30">
                BF
              </div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight font-mono">
                  BETAFLUX<span className="text-[#FF3366]">.WATCH</span>
                </span>
                <span className="text-[10px] font-mono font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 px-2 py-0.5 rounded">
                  betaflux.watch
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              A public truth and client due diligence archive exposing corporate wage theft, withheld joining bonuses, document signing traps, and legal loophole exploitation.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs pt-1 font-semibold">
              <button
                onClick={onExploreBattle}
                className="text-[#FF3366] hover:text-red-400 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                The Battle &amp; Struggle
              </button>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <button
                onClick={onExploreAdvisory}
                className="text-amber-600 dark:text-amber-400 hover:text-amber-500 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Building2 className="w-3.5 h-3.5" />
                Client Warning Notice
              </button>
            </div>
          </div>

          {/* Statutory Defense & Legal Framework */}
          <div className="md:col-span-6 space-y-2 text-xs bg-white dark:bg-[#141414] p-5 rounded-2xl border border-slate-200 dark:border-[#262626] shadow-sm">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold">
              <Scale className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
              <span>Public Interest Truth &amp; Whistleblower Protection</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
              This repository strictly records factual corporate milestones, statutory filings, and primary exhibits. Under <strong className="text-slate-900 dark:text-white font-semibold">Exception 1 to Section 499 of the Indian Penal Code (Section 356 Bharatiya Nyaya Sanhita, 2023)</strong> and <strong className="text-slate-900 dark:text-white font-semibold">Article 19(1)(a)</strong> of the Constitution of India, publishing objective truth concerning corporate conduct for the public good and commercial due diligence is absolute protection against defamation claims.
            </p>
            <div className="text-[10px] text-slate-500 font-medium pt-1 flex items-center justify-between">
              <span>Sanitized Documentation • PII Protected • Open Public Interest Repository</span>
              <span className="font-mono text-amber-600 dark:text-amber-400">https://betaflux.watch</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div>
            Zero PII leaks • All individual personal identifiers strictly masked • Hosted at <a href="https://betaflux.watch" className="text-amber-600 dark:text-amber-400 hover:underline font-mono">betaflux.watch</a>.
          </div>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span>Standing up for workers, fair contracts, and ending premeditated corporate wage scams.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
