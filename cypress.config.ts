import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
    video: false,
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  viewportWidth: 1280,
  viewportHeight: 720,
});
