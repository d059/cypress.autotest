describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('[LOGIN]');
        cy.get('#pass').type('[PASSWORD]');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })
    it('Восстановление пароля', function (){
        cy.visit('https://login.qa.studio');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('[LOGIN]');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('[LOGIN]');
        cy.get('#pass').type('[PASSWORD]');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('[LOGIN]');
        cy.get('#pass').type('[PASSWORD]');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Верный пароль,логин без @', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('[LOGIN]');
        cy.get('#pass').type('[PASSWORD]');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })
        it('Верный пароль,логин c заглавными буквами', function () {
        cy.visit('https://login.qa.studio');
            cy.get('#mail').type('[LOGIN]');
            cy.get('#pass').type('[PASSWORD]');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
        
    })
})

// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
