import { updateTestCaseStatusInTestPlan } from "./Common";

async function run() {
  try {
    await updateTestCaseStatusInTestPlan();
  } catch (error) {
    console.error("Error executing updateTestCaseStatusInTestPlan:", error);
  }
}

run();
