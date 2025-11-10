import React from 'react';
import BrainCircuitIcon from './icons/BrainCircuitIcon';

interface HeaderProps {
    onAnalyzeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAnalyzeClick }) => {
  return (
    <header className="bg-brand-surface/80 backdrop-blur-sm shadow-md sticky top-0 z-20 border-b border-slate-700">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold leading-tight text-brand-light sm:text-3xl">
              Deel Global Payroll Cycle
            </h1>
            <p className="mt-1 text-sm text-brand-gray">
              An interactive, AI-enhanced process map for enterprise payroll operations.
            </p>
        </div>
        <button 
          onClick={onAnalyzeClick}
          className="inline-flex items-center gap-x-2 rounded-md bg-brand-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
        >
          <BrainCircuitIcon className="h-5 w-5" aria-hidden="true" />
          Analyze & Optimize Process
        </button>
      </div>
    </header>
  );
};

export default Header;