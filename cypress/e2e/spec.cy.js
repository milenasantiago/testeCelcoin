const fakerbr = require('faker-br');

describe('Teste Celcoin', () => {

  const email = fakerbr.internet.email();
  const senha = 'senha123'


  it('Criar conta de usuário', () => {
    cy.visit('http://automationpractice.com');
    cy.get('.login').click();
    cy.get('#email_create').type(email);
    cy.get('#SubmitCreate > span').click();
    cy.get('#id_gender2').click();
    cy.get('#customer_firstname').type('Milena');
    cy.get('#customer_lastname').type('Santiago');
    cy.get('#passwd').type(senha);
    cy.get('#days').select('5');
    cy.get('#months').select('January');
    cy.get('#years').select('1999');
    cy.get('#firstname').type('Milena');
    cy.get('#lastname').type('Santiago');
    cy.get('#address1').type('Rua Teste');
    cy.get('#city').type('Testecity');
    cy.get('#id_state').select('Alabama');
    cy.get('#postcode').type('14013');
    cy.get('#id_country').select('United States');
    cy.get('#phone_mobile').type('81999712994');
    cy.get('#alias').type('Rua teste2');
    cy.get('#submitAccount > span').click();
    cy.get('.info-account').should('contain','Welcome to your account. Here you can manage all of your personal information and orders.');
    
  })


  it('Login e inserção de produto no carrinho', () => {
    cy.visit('http://automationpractice.com');
    cy.get('.login').click();
    cy.get('#email').type(email);
    cy.get('#passwd').type(senha);
    cy.get('#SubmitLogin > span').click();
    cy.get('.info-account').should('contain','Welcome to your account. Here you can manage all of your personal information and orders.');
    cy.get('li > .btn > span').click();
    cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
    cy.get('.layer_cart_product > h2').should('contain','Product successfully added to your shopping cart');


  })



})
