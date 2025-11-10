
// Fix: Provide full implementation for the StepNode component.
import React from 'react';
import { ProcessStep } from '../types';

interface StepNodeProps {
  step: ProcessStep;
}

const StepNode: React.FC<StepNodeProps> = ({ step }) => {
  return (
    <div className="p-4 border rounded-lg bg-slate-800 border-slate-700">
      <h5 className="font-bold">{step.title}</h5>
      <p className="text-sm text-slate-400">{step.details.join(', ')}</p>
    </div>
  );
};

export default StepNode;
