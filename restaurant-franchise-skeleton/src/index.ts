import { App } from './app.ts';
import { OperationsService } from './modules/operations/operations.service.ts';
import { TrainingService } from './modules/training/training.service.ts';
import { InventoryService } from './modules/inventory/inventory.service.ts';
import { FinanceService } from './modules/finance/finance.service.ts';
import { MarketingService } from './modules/marketing/marketing.service.ts';
import { OnboardingService } from './modules/onboarding/onboarding.service.ts';
import { MarginWatchdogAgent } from './agents/margin-watchdog.ts';
import { ComplianceSupervisorAgent } from './agents/compliance-supervisor.ts';
import { GrowthOrchestratorAgent } from './agents/growth-orchestrator.ts';

const app = new App();
const operations = new OperationsService();
const training = new TrainingService();
const inventory = new InventoryService();
const finance = new FinanceService();
const marketing = new MarketingService();
const onboarding = new OnboardingService();
const marginAgent = new MarginWatchdogAgent();
const complianceAgent = new ComplianceSupervisorAgent();
const growthAgent = new GrowthOrchestratorAgent();

app.start();

console.log({
  operations: operations.getStatus(),
  training: training.getStatus(),
  inventory: inventory.getStatus(),
  finance: finance.getStatus(),
  marketing: marketing.getStatus(),
  onboarding: onboarding.getStatus(),
  marginAgent: marginAgent.analyze(),
  complianceAgent: complianceAgent.inspect(),
  growthAgent: growthAgent.plan(),
});
