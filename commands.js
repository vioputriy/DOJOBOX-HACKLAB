// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('openUrl',()=>{
    cy.visit('https://frontend.staging.pawonmburi.com/admin#/')
})

/* Cypress.Commands.add('login',()=>{
        cy.get('[placeholder="Email"]').type('admin_pru');
        cy.get('[placeholder="Password"]').type('rahasiadong');
        cy.get('button').click();
        cy.wait(8000);
        cy.get(':nth-child(26) > a').click();
        cy.wait(6000);
})
 */
Cypress.Commands.add('register',()=>{
    cy.visit('https://beta.hacklab.rocks/register')
}); 

Cypress.Commands.add('login',()=>{
cy.visit('https://beta.hacklab.rocks/login')
}); 