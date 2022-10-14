import { faker } from '@faker-js/faker';
const { generate } = require('gerador-validador-cpf')

export default {
    deliver: function () {

        return {
            name: faker.name.findName(),
            cpf: generate(),
            email: faker.internet.email(),
            whatsapp: '19999999999',
            address: {
                postalcode: '13476562',
                street: 'Rua Irmã Dorothy Mae Stang',
                number: '1000',
                details: 'Teste de software',
                district: 'Loteamento Residencial de Interesse Social Vila Nova Esperança - ASTA 4',
                city_state: 'Americana/SP'
            }
        }
    }
}