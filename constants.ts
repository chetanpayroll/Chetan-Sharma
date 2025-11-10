
import { ActorProcess } from './types';

export const PAYROLL_PROCESS_DATA: ActorProcess[] = [
  {
    actor: 'Client',
    role: 'Submits payroll data for processing',
    color: 'blue',
    stages: [
      {
        id: 'client-submission',
        title: 'Input Submission',
        steps: [
          {
            id: 'c1',
            title: 'Open the Payroll Section',
            details: ['Navigate to Global Payroll', 'View All Entities', 'Select Payroll Cycles & Status'],
          },
          {
            id: 'c2',
            title: 'Select Entity & Review Payroll',
            details: ['Choose the correct legal entity for the payroll cycle.'],
          },
          {
            id: 'c3',
            title: 'Review Employee Status Changes',
            details: ['Check for new hires, terminations, or changes in employee data.'],
          },
          {
            id: 'c4',
            title: 'Review Payroll Items',
            details: ['Review any updates to payroll items (e.g., bonuses, overtime).', 'If no changes, a confirmation message is displayed.'],
          },
          {
            id: 'c5',
            title: 'Verify Payroll Report Summary',
            details: ['The summary shows total expenses, headcount, and payroll items.'],
          },
          {
            id: 'c6',
            title: 'Submit the Report',
            details: ['Final submission sends the report to the Deel Payroll Manager for processing.'],
          },
        ],
      },
    ],
  },
  {
    actor: 'PIM/PRM',
    role: 'Processes and manages the payroll cycle',
    color: 'indigo',
    stages: [
      {
        id: 'prm-processing',
        title: 'Input Processing & Preparation',
        steps: [
          {
            id: 'p1',
            title: 'Receive New Payroll Cycle Notification',
            details: ['PRM Notifier Bot informs Payroll Managers about a new client submission.'],
          },
          {
            id: 'p2',
            title: 'Download Client Reports',
            details: ['Download the main Payroll Report and all other submitted items from the PRM Portal or Slack notification.'],
            subSteps: [
                { id: 'p2.1', title: 'Client Payroll Report', details: [] },
                { id: 'p2.2', title: 'Recurring Payroll Items Report', details: [] },
                { id: 'p2.3', title: 'Expense Report', details: [] },
                { id: 'p2.4', title: 'Contract Data Changes Summary Report', details: [] },
            ]
          },
          {
            id: 'p3',
            title: 'Process HR Changes',
            details: ['Handle employee lifecycle updates to ensure data alignment between Deel and local payroll software.'],
             subSteps: [
                { id: 'p3.1', title: 'Onboard New Employees', details: ['Ensure new hires are onboarded to local payroll software and sync status in Deel.'] },
                { id: 'p3.2', title: 'Process Terminations', details: ['Review terminations/resignations and off-board employees.'] },
                { id: 'p3.3', title: 'Review Time Off & Data Updates', details: ['Check time off reports and any other employee data changes.'] },
            ]
          },
        ],
      },
      {
        id: 'prm-generation',
        title: 'Payroll Package Generation',
        steps: [
           {
            id: 'p4',
            title: 'Run Payroll Calculation',
            details: ['Import reports to local software and calculate payroll.', 'Generate Deel Liabilities Report.', 'Generate "ICP G2N" report.'],
          },
          {
            id: 'p5',
            title: 'Generate Deel G2N & Perform QA',
            details: ['Upload the ICP G2N report to generate the Deel G2N.', 'Address any validation errors or balancing flags.', 'Perform Input/Output QA to check for discrepancies.'],
          },
           {
            id: 'p6',
            title: 'Upload Payslips',
            details: ['Upload zipped PDF payslip file from local payroll software.', 'Payslips undergo automatic splitting, matching, and QA checks.'],
          },
        ]
      },
      {
        id: 'prm-approval',
        title: 'Finalization & Client Approval',
        steps: [
           {
            id: 'p7',
            title: 'Upload Final Documents',
            details: ['Upload Deel Liabilities Report (CSV).', 'Upload any other additional client deliverable documents.'],
          },
          {
            id: 'p8',
            title: 'Four Eyes Check',
            details: ['Payroll Ops/Implementation Manager must perform a final review and approve the package before it is sent to the client.'],
          },
           {
            id: 'p9',
            title: 'Publish Payroll Package for Client Approval',
            details: ['Publish the complete package for the client to review.', 'Final QA checks on G2N balance and invoice items.'],
          },
           {
            id: 'p10',
            title: 'Validate and Publish Payslips',
            details: ['After client approval, review payslip statuses (Pending, Rejected, Skipped) and resolve any issues.', 'Publish approved payslips, potentially with a 2-step approval process.'],
          },
           {
            id: 'p11',
            title: 'Manage Payouts',
            details: ['Payout package is automatically generated upon publishing.', 'Perform Payments QA and update Payments Tracker.'],
          },
           {
            id: 'p12',
            title: 'Complete Cycle',
            details: ['Ensure all steps of the cycle are marked as done to complete the payroll processing.'],
          },
        ]
      }
    ],
  },
];
