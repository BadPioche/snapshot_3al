/// <reference types="cypress" />
import { apiKey } from "../../../src/api/config";


describe('test search feature and zoom effect', () => {
    beforeEach(() => {
      cy.visit('/mountain');
    })
  
    it('search a key ', () => {
      cy.get('input').type('bike');
      cy.get('button').click();

      cy.url().should("include","/search/bike");
    })

    it('search request should send back a response with 200 status code and non-empty photo set', () => {

      const query = 'bike';
     
      cy.request('GET', `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`,
      ).then(response => {
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('stat','ok');
        expect(response.body).to.have.property('photos');
        expect(response.body.photos).not.to.be.empty;

      });
    })

    //hover call doesn't proc the css image hover effect (being trigger by cypress, or by plug-in cypress-real-events)
    it('zoom effect ', () => {
      // cy.get('[data-cy="image"]')
      // .first()
      // .trigger('mouseover')
      // .should('have.css', 'transform', 'scale(1.25)')

      cy.get('[data-cy="image"]')
      .first()
      .realHover({position:'center'})
      .should('have.css', 'transform', 'scale(1.65)')
    })
  })
