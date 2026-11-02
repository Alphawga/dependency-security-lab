const test = require("node:test");
const assert = require("node:assert/strict");

test("Deployment token is not available to tests", () => {
  assert.equal(process.env.DEMO_DEPLOY_TOKEN, undefined);
});