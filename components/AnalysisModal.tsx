import React from 'react';
import { OptimizationInsights } from '../types';
import SpinnerIcon from './icons/SpinnerIcon';
import XMarkIcon from './icons/XMarkIcon';

interface AnalysisModalProps {
  show: boolean;
  onClose: () => void;
  isLoading: boolean;
  data: OptimizationInsights | null;
  error: string | null;
}

const AnalysisModal: React.FC<AnalysisModalProps> = ({ show, onClose, isLoading, data, error }) => {
  if (!show) {
    return null;
  }

  const InsightSection: React.FC<{ title: string; content: string | undefined }> = ({ title, content }) => (
    <div>
      <h3 className="text-lg font-semibold text-brand-light mb-2">{title}</h3>
      {content ? (
        <div 
          className="prose prose-sm prose-invert max-w-none text-brand-gray" 
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
         <div className="space-y-2">
            <div className="h-4 bg-slate-700 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2 animate-pulse"></div>
         </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="relative bg-brand-surface border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-brand-surface/80 backdrop-blur-sm p-4 border-b border-slate-700 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-brand-light">AI Process Analysis & Optimization</h2>
          <button onClick={onClose} className="p-1 rounded-full text-brand-gray hover:bg-slate-700 hover:text-brand-light">
            <XMarkIcon className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <div className="p-6">
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 text-brand-gray h-64">
                <SpinnerIcon className="w-12 h-12 animate-spin text-brand-blue" />
                <p className="text-lg">Analyzing entire payroll workflow...</p>
                <p className="text-sm">This may take a few moments.</p>
            </div>
          )}
          {error && (
            <div className="p-4 rounded-lg bg-red-900/30 text-red-300">
                <h3 className="font-bold text-lg mb-2">Analysis Failed</h3>
                <p>{error}</p>
            </div>
          )}
          {data && (
            <div className="space-y-6">
                <InsightSection title="Executive Summary" content={data.executiveSummary} />
                <InsightSection title="Potential Bottlenecks" content={data.potentialBottlenecks} />
                <InsightSection title="Automation Opportunities" content={data.automationOpportunities} />
                <InsightSection title="Key Compliance Risks" content={data.keyComplianceRisks} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisModal;
