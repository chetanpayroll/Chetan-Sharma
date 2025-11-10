
// Fix: Provide full implementation for Gemini API service.
import { GoogleGenAI, Type } from '@google/genai';
import { ActorProcess, OptimizationInsights } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const optimizationInsightsSchema = {
  type: Type.OBJECT,
  properties: {
    executiveSummary: {
      type: Type.STRING,
      description: 'A high-level summary of the process analysis, written for an executive audience. Should be a single paragraph formatted as HTML.',
    },
    potentialBottlenecks: {
      type: Type.STRING,
      description: 'Identification and explanation of potential bottlenecks in the payroll process. Formatted as an HTML unordered list (<ul><li>...</li></ul>).',
    },
    automationOpportunities: {
      type: Type.STRING,
      description: 'Specific, actionable opportunities for automation within the process. Formatted as an HTML unordered list (<ul><li>...</li></ul>).',
    },
    keyComplianceRisks: {
      type: Type.STRING,
      description: 'Analysis of key compliance risks and suggestions for mitigation. Formatted as an HTML unordered list (<ul><li>...</li></ul>).',
    },
  },
  required: ['executiveSummary', 'potentialBottlenecks', 'automationOpportunities', 'keyComplianceRisks'],
};

function formatProcessDataForPrompt(data: ActorProcess[]): string {
  let prompt = 'Here is a detailed breakdown of a global payroll process, separated by actors (Client and PIM/PRM):\n\n';
  data.forEach(actorProcess => {
    prompt += `Actor: ${actorProcess.actor} (${actorProcess.role})\n`;
    actorProcess.stages.forEach(stage => {
      prompt += `  Stage: ${stage.title}\n`;
      stage.steps.forEach(step => {
        prompt += `    - Step: ${step.title}\n`;
        step.details.forEach(detail => {
          prompt += `      - Detail: ${detail}\n`;
        });
        if (step.subSteps) {
          step.subSteps.forEach(subStep => {
            prompt += `      - Sub-step: ${subStep.title}\n`;
          });
        }
      });
    });
    prompt += '\n';
  });
  return prompt;
}

export const analyzePayrollProcess = async (
  processData: ActorProcess[]
): Promise<OptimizationInsights> => {
  try {
    const processString = formatProcessDataForPrompt(processData);
    const prompt = `
      Please act as an expert enterprise process optimization consultant with deep expertise in global payroll operations.
      Analyze the following payroll process data and provide a structured analysis.
      The output must be a JSON object matching the provided schema.
      The content for lists should be wrapped in <ul> and <li> tags for direct HTML rendering.
      
      Process Data:
      ${processString}
      
      Provide insights on:
      1.  **Executive Summary:** A brief, high-level overview.
      2.  **Potential Bottlenecks:** Identify steps or handoffs that could slow down the process.
      3.  **Automation Opportunities:** Suggest specific areas where automation could improve efficiency, reduce errors, or save time.
      4.  **Key Compliance Risks:** Highlight potential compliance issues (e.g., related to data handling, approvals, local regulations).
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: optimizationInsightsSchema,
        temperature: 0.2,
      },
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);

    return result as OptimizationInsights;
  } catch (error) {
    console.error('Error analyzing payroll process with Gemini API:', error);
    throw new Error(
      'Failed to get analysis from AI. Please check the console for more details.'
    );
  }
};
