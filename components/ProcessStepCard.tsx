
// Fix: Provide full implementation for the ProcessStepCard component.
import React, { useState } from 'react';
import { ProcessStep } from '../types';
import ChevronDownIcon from './icons/ChevronDownIcon';
import CheckCircleIcon from './icons/CheckCircleIcon';

interface ProcessStepCardProps {
  step: ProcessStep;
  stepNumber: number;
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ step, stepNumber }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-brand-surface border border-slate-700/80 rounded-lg shadow-md mb-4 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex justify-between items-center p-4 text-left focus:outline-none focus:bg-slate-800/50"
      >
        <div className="flex items-center">
          <span className="text-brand-blue font-bold text-lg mr-3">{step.id.toUpperCase()}</span>
          <h4 className="font-semibold text-brand-light">{step.title}</h4>
        </div>
        <ChevronDownIcon
          className={`w-5 h-5 text-brand-gray transition-transform duration-200 ${
            isExpanded ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isExpanded && (
        <div className="p-4 border-t border-slate-700/80 bg-slate-900/50">
          <ul className="space-y-2">
            {step.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-brand-gray text-sm">{detail}</span>
              </li>
            ))}
          </ul>
          {step.subSteps && step.subSteps.length > 0 && (
            <div className="mt-4 pl-7">
                 <h5 className="text-sm font-semibold text-brand-light mb-2">Sub-Steps:</h5>
                 <ul className="space-y-2 border-l-2 border-slate-700 pl-4">
                    {step.subSteps.map(subStep => (
                         <li key={subStep.id} className="text-brand-gray text-sm">
                            <span className="font-medium text-slate-400">{subStep.title}</span>
                         </li>
                    ))}
                 </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProcessStepCard;
