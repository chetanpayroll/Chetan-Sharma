
import React, { useState } from 'react';
import Header from './components/Header';
import ProcessNexus from './components/ProcessNexus';
import AnalysisModal from './components/AnalysisModal';
import { analyzePayrollProcess } from './services/geminiService';
import { PAYROLL_PROCESS_DATA } from './constants';
import { OptimizationInsights } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisData, setAnalysisData] = useState<OptimizationInsights | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyzeClick = async () => {
    setIsModalOpen(true);
    setIsLoading(true);
    setError(null);
    setAnalysisData(null);

    try {
      const insights = await analyzePayrollProcess(PAYROLL_PROCESS_DATA);
      setAnalysisData(insights);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-brand-background min-h-screen text-brand-light font-sans">
      <Header onAnalyzeClick={handleAnalyzeClick} />
      <main>
        <ProcessNexus />
      </main>
      <AnalysisModal 
        show={isModalOpen}
        onClose={handleCloseModal}
        isLoading={isLoading}
        data={analysisData}
        error={error}
      />
    </div>
  );
}

export default App;
