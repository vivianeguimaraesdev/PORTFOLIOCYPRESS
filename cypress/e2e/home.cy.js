//Describe palavra reservada para suíte de testes
//Home page é o nome da suíte 

describe('home page', ()=>{
    it('app deve estar online', ()=>{
        cy.viewport(1440, 900) //resolução
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        
    })
})