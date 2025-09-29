import "@testing-library/cypress/add-commands";

const toleratedMessages = [
  "ResizeObserver loop limit exceeded",
  "No route matches URL",
  "Hydration failed",
];

Cypress.on("uncaught:exception", (err) => {
  if (toleratedMessages.some((message) => err.message.includes(message))) {
    return false;
  }

  return undefined;
});
