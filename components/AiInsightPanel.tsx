
// Fix: Provide full implementation for the AiInsightPanel component.
import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface AiInsightPanelProps {
  insights: string;
}

const AiInsightPanel: React.FC<AiInsightPanelProps> = ({ insights }) => {
  return (
    <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4 mt-2">
      <div className="flex items-start gap-3">
        <SparklesIcon className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
        <div>
          <h5 className="font-semibold text-blue-200 mb-1">AI Insight</h5>
          <p className="text-sm text-blue-300">{insights}</p>
        </div>
      </div>
    </div>
  );
};

export default AiInsightPanel;
