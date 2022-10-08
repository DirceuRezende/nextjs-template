// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

describe('Main', () => {
  it('should display header text', () => {
    cy.visit('/');
    cy.contains('h1', 'React Avançado');
    cy.contains('h2', 'TypeScript, ReactJS, NextJS e Styled Components');
    cy.contains('a', 'Go Home');
  });
});
