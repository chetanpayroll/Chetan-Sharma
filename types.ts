
// Fix: Provide full implementation for type definitions.
export interface ProcessSubStep {
  id: string;
  title: string;
  details: string[];
}

export interface ProcessStep {
  id: string;
  title: string;
  details: string[];
  subSteps?: ProcessSubStep[];
  insights?: OptimizationInsights;
}

export interface ProcessStage {
  id: string;
  title: string;
  steps: ProcessStep[];
}

export interface ActorProcess {
  actor: string;
  role: string;
  color: string;
  stages: ProcessStage[];
}

export interface OptimizationInsights {
  executiveSummary: string;
  potentialBottlenecks: string;
  automationOpportunities: string;
  keyComplianceRisks: string;
}
