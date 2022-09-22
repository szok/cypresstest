import { When, Then, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";

defineParameterType({ name: 'pageUrl', regexp: new RegExp('.*'), transformer: (val) => val });
defineParameterType({ name: 'buttonClass', regexp: new RegExp('.*'), transformer: (val) => val });

When("I open '{pageUrl}'", (pageUrl: string) => {
  console.log(pageUrl);
  cy.visit(pageUrl);
});

Then("I should see a '{buttonClass}' button", (buttonClass: string) => {
  console.log('see a ', buttonClass);
  cy.get(buttonClass).should(
    "exist"
  );
});
