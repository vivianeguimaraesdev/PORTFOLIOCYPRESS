
import signupPage from '../support/pages/signup'
import factories from '../support/factories'

describe('cadastro de entregadores', function () {

  it.only('deve cadastrar um entregador', () => {
    const deliver = factories.deliver()

    signupPage.go()
    signupPage.form(deliver)
    signupPage.submit()

    const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signupPage.modalHaveText(message)
  })

  context('Errors', function () {
    it('deve retornar cpf inválido', function () {
      var deliver = factories.deliver()
      deliver.cpf = '123456789AB'

      signupPage.go()
      signupPage.form(deliver)
      signupPage.submit()
      signupPage.alertShouldHaveText('Oops! CPF inválido')
    })

    it('deve retornar email inválido', function () {
      var deliver = factories.deliver()
      deliver.email = 'johndoe.com.br'

      signupPage.go()
      signupPage.form(deliver)
      signupPage.submit()
      signupPage.alertShouldHaveText('Oops! Email com formato inválido.')
    })
  })

  context('Campos obrigatórios', function() {

    const errorMessages = [
      'É necessário informar o nome',
      'É necessário informar o CPF',
      'É necessário informar o email',
      'É necessário informar o CEP',
      'É necessário informar o número do endereço',
      'Selecione o método de entrega',
      'Adicione uma foto da sua CNH'
    ]

    before(function(){
      signupPage.go()
      signupPage.submit()
    })

    errorMessages.forEach(function(message){
      it('deve exibir ' + message.toLowerCase(), function(){
        signupPage.alertShouldHaveText(message)
      })
    })

  })

})
