/// <reference types="cypress" />

import { env } from "../../fixtures/environments";
import { variableUser } from "../../fixtures/users";

const { register, dashboard } = env();

describe("Formulaire Blackmarket", () => {
  beforeEach(() => {
    cy.visit(register);
  });

  it("Basic registration successfull", function () {
    const { firstname, lastname, email, password } = variableUser;

    cy.contains("Tout refuser").click();
    cy.get("#firstName").type(firstname).should("have.value", firstname);
    cy.get("#lastName").type(lastname).should("have.value", lastname);
    cy.get("#signup-email").type(email());
    cy.get("#signup-password").type(password);
    cy.contains(
      "J’accepte de recevoir les meilleurs plan du web et la newsletter par mail."
    ).click();
    cy.contains("Enchantés !").click();  // [data-qa="signup-submit-button"] exists near

    cy.url().should("eq", dashboard);
  });

  it("register failed: no password", function () {
    const { firstname, lastname, email } = variableUser;
    cy.contains("Tout refuser").click();
    cy.get("#firstName").type(firstname).should("have.value", firstname);
    cy.get("#lastName").type(lastname).should("have.value", lastname);
    cy.get("#signup-email").type(email());

    cy.contains(
      "J’accepte de recevoir les meilleurs plan du web et la newsletter par mail."
    ).click();

    cy.contains("Enchantés !").click(); // [data-qa="signup-submit-button"] exists near
    cy.url().should("eq", register);
    cy.get("#signup-password")
      .get("p")
      .contains("Le champ mot de passe est obligatoire");
  });
});
