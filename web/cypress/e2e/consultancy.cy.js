describe('Formulario de Consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        
        cy.get('input[placeholder="Digite seu nome completo"]').type('Matheus Peyerl')
        cy.get('input[placeholder="Digite seu email"]').type('matheus@teste.com.br')
        cy.get('input[placeholder="(00) 00000-0000"]')
            .type('1133940181')
            .should('have.value', '(11) 3394-0181')

    })



})
