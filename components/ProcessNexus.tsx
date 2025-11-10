
// Fix: Provide full implementation for the ProcessNexus component.
import React from 'react';
import { PAYROLL_PROCESS_DATA } from '../constants';
import ProcessStepCard from './ProcessStepCard';
import { ActorProcess } from '../types';

const colorMap: { [key: string]: { bg: string; text: string; border: string } } = {
  blue: { bg: 'bg-blue-900/20', text: 'text-blue-300', border: 'border-blue-500/50' },
  indigo: { bg: 'bg-indigo-900/20', text: 'text-indigo-300', border: 'border-indigo-500/50' },
};

const ProcessNexus: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {PAYROLL_PROCESS_DATA.map(actorProcess => {
          const colors = colorMap[actorProcess.color] || colorMap.blue;
          return (
            <div key={actorProcess.actor} className={`flex-1 min-w-[400px] ${colors.bg} rounded-xl border ${colors.border} p-4`}>
              <div className="mb-4">
                <h2 className={`text-xl font-bold ${colors.text}`}>{actorProcess.actor}</h2>
                <p className="text-sm text-brand-gray">{actorProcess.role}</p>
              </div>
              <div className="space-y-6">
                {actorProcess.stages.map(stage => (
                  <div key={stage.id}>
                    <h3 className="text-lg font-semibold text-brand-light mb-3 sticky top-[88px] bg-slate-900/80 backdrop-blur-sm py-2 z-10">{stage.title}</h3>
                    <div>
                      {stage.steps.map((step, index) => (
                        <ProcessStepCard key={step.id} step={step} stepNumber={index + 1} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProcessNexus;
