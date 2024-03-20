class LeftSideMenuPage {
    getForms(){
        return cy.get("a").contains("Forms");
    }

    getEcommerceMenuLink(){
        return cy.get("#auth-shop");
    }

    getFormsLogin(){
        return cy.get('a#login');
    }

    getInterceptAPIRequest(){
        return cy.get('#intercept-api');
    }
}

export default new LeftSideMenuPage();
