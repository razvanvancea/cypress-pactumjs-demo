class HeaderPage {
    getLogoutBtn(){
        return cy.get('#logout');
    }
}

export default new HeaderPage();
