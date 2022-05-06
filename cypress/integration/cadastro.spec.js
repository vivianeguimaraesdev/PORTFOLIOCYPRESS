//Cadastro de Um Entregador - Formulário 
//Contains você junta um localizador + texto

describe('Cadastro', ()=> {
    it('Usuário deve se tornar um entregador', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://buger-eats.vercel.app/')

        cy.get('a[href="/deliver"]').click() //verificar se foi para a página certa -checkpoint
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        //Massa de teste
        var entregador = {
            nome: 'Fernando Papito',
            cpf: '00000014141',
            email: 'papito@hotmail.com',
            whatsapp: '11999999999',
            endereco: {
                cep: '04534011',
                rua: 'Rua Joaquim Floriano',
                numero: '1000',
                complemento:'Apt 142',
                bairro: 'Itaim Bibi',
                cidade_uf:'São Paulo/SP'

            },
            metodo_entrega:'Moto'

        }

        //Preenchendo o form

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

        //Preenchendo o campo CEP
        
        cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name = "adress-number"]').type(entregador.endereco.numero)
        cy.get('input[name = "adress-details"]').type(entregador.endereco.complemento)
        
        //Combinando CSS Selector com Texto

        cy.contains('.delivery-method li', entregador.metodo_entrega).click()


      
    })
})