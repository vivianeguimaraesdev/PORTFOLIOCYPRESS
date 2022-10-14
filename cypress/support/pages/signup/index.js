

class SignupPage {

    go() {
        cy.visit('/deliver')
        cy.get('#page-deliver form h1')
            .should('have.text', 'Cadastre-se para  fazer entregas')
    }

    form(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click();
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', 'Moto').click()

        cy.get('input[type="file"]')
            .selectFile('cypress/fixtures/cnh-digital.jpg', { force: true })
    }

    submit() {
        cy.contains('button', 'Cadastre-se para fazer entregas')
            .click()
    }

    alertShouldHaveText(expectedText) {
        cy.contains('.alert-error', expectedText)
            .should('be.visible')
    }

    modalHaveText(expectedMessage) {
        cy.get('.swal2-container .swal2-icon-success')
            .should('include.text', expectedMessage)
            .and('be.visible')
    }

}

export default new SignupPage()