class LoginPage {
    getEmail(){
        return cy.get('#email');
    }

    getPsw(){
        return cy.get('#password');
    }

    getLoginBtn(){
        return cy.get("button").contains("Submit");
    }

    getLoginErrorMsg(){
        return cy.get('#message');
    }

    doLogin(email, password) {
        this.getEmail().type(email);
        this.getPsw().type(password);
        this.getLoginBtn().click();
    }
}

export default new LoginPage();
