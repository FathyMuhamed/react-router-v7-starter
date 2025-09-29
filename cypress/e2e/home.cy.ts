/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the welcome hero", () => {
    cy.findByText(/what's next/i).should("be.visible");
    cy.get("[data-cy=lang-en]").should("have.attr", "aria-pressed", "true");
    cy.get("[data-cy=lang-ar]").should("exist");
  });

  it("allows switching languages", () => {
    cy.get("[data-cy=lang-ar]").click();
    cy.document().its("documentElement").should("have.attr", "lang", "ar");
    cy.findByText(/ما التالي؟/).should("be.visible");

    cy.get("[data-cy=lang-en]").click();
    cy.document().its("documentElement").should("have.attr", "lang", "en");
    cy.findByText(/what's next/i).should("be.visible");
  });
});
