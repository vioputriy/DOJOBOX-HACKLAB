describe('Scenario 01(web-admin)', function(){
    before(()=>{
        cy.login();
    })

    it('TC-09-login',function(){
        cy.get('#password').type('vioputri0807');
        cy.get('.btn').click();
        cy.reload();
    }),
    it('TC-10-login',function(){
        cy.get('#email').type('vio@mailinator.com');
        cy.get('.btn').click();
        cy.reload();
    }),
    it('TC-11-login',function(){
        cy.get('#email').type('vio@mailinator.com');
        cy.get('#password').type('vioputri0807');
        cy.get('.btn').click();
    }),
    it('TC-12-search JOB',function(){
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get('.p-4').type('Quality Control{enter}');
        cy.get('.form-group > .normal-font').click();
        cy.get(':nth-child(2) > .card > .card-body > .row > .col-md-10 > :nth-child(1) > .medium-font > b').click();
        cy.wait(10000);
    }), 
    it('TC-13-Share Job',function(){
        cy.get('.d-inline-block').click();
        cy.get(':nth-child(1) > svg > circle').click({force:true});//share salin link
        /* cy.get(':nth-child(2) > svg > circle').click({force:true});// share email */
        cy.get('[d="M16 31.9888C7.16344 31.9888 0 24.83 0 15.9993C0 7.16851 7.16344 0.00976562 16 0.00976562C24.8366 0.00976562 32 7.16851 32 15.9993C32 24.83 24.8366 31.9888 16 31.9888Z"]').click({force:true});
    }), 
    it('TC-14-edit profile',function(){
        cy.get('#navbarDropdown').click();
        cy.get('[href="/profile"]').click();
        cy.get('.w-150px').click();
    })
}) 