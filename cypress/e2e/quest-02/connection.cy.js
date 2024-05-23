/// <reference types="cypress" />

import { env } from "../../fixtures/environments";
import { staticUser } from "../../fixtures/users";

const { register, dashboard } = env();

describe("Blackmarket connection scenarios", () => {
  beforeEach(() => {
    cy.visit(register);
  }); 

  it("Basic connection successfull", () => {
    const { email, password } = staticUser;

    cy.get('[data-qa="accept-cta"]').click();
    cy.get("#signin-email").type(email);
    cy.get("#signin-password").type(password);
    cy.get('[data-qa="signin-submit-button"]').click();

    cy.url().should("eq", dashboard);
  });
});
