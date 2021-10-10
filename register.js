describe('Register', function(){
    before(()=>{
        cy.register()
    })
    /* it('TC-01-register',function(){
        cy.get('#name').type('Dummy Vio');
        cy.get('#phone_number').type('082345678904'); 
        cy.get('#email').type('vio1@mailinator.com');
        cy.get('#password').type('vioputri0807');
        cy.get('.btn').click();
    }), */ 
    it('TC-02-register',function(){
        cy.get('#phone_number').type('081345678904'); 
        cy.get('#email').type('vio2@mailinator.com');
        cy.get('#password').type('vioputri0807');
        cy.get('.btn').click();
        cy.reload();
    }),
    it('TC-03-register',function(){
        cy.get('#name').type('Dummy Vio'); 
        cy.get('#email').type('vio1@mailinator.com');
        cy.get('#password').type('vioputri0807');
        cy.get('.btn').click();
        cy.reload();
    }), 
    it('TC-04-register',function(){
        cy.get('#name').type('Dummy Vio');
        cy.get('#phone_number').type('081345678904');
        cy.get('#password').type('vioputri0807');
        cy.get('.btn').click();
        cy.reload();
    }),
    it('TC-05-register',function(){
        cy.get('#name').type('Dummy Vio');
        cy.get('#phone_number').type('082345678904'); 
        cy.get('#email').type('vio1@mailinator.com');
        cy.get('.btn').click();
        cy.reload();
    })
    
})