it('visits the app', () => {
  cy.visit('/')
})

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/home')
  })

  it('it check main', () => {
    cy.get('main').should('be.visible')
  })

  it('display value should be 0', () => {
    cy.get('.components__Container-v1h4qc-0')
      .should('exist')
      .contains('0')
  })

  it('numbers should work', () => {
    let result = ''
    for (let i = 0; i < 10; i++) {
      result += i
      cy.get(`button[data-value="${i}"]`)
        .should('exist')
        .contains(`${i}`)
        .click()
      cy.get('.components__Container-v1h4qc-0').contains(
        result,
      )
    }
  })

  it('operations should work', () => {
    let operations = ['1', , '+', '2', '=']
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get('.components__Container-v1h4qc-0').contains('3')

    operations = ['*', '4', '=']
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get('.components__Container-v1h4qc-0').contains('12')

    operations = ['-', '5', '=']
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get('.components__Container-v1h4qc-0').contains('7')

    operations = ['\\\\', '7', '=']
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get('.components__Container-v1h4qc-0').contains('1')

    operations = [
      '5',
      '*',
      '(',
      '6',
      '.',
      '5',
      '-',
      '1',
      '.',
      '5',
      ')',
      '=',
    ]
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get('.components__Container-v1h4qc-0').contains('25')
    cy.get('button[data-value="CE"]').click()
    cy.get('.components__Container-v1h4qc-0').contains('5')
    cy.get('button[data-value="C"]')
      .should('exist')
      .contains('C')
      .click()
    cy.get('.components__Container-v1h4qc-0').contains('0')
  })

  it('history should work', () => {
    let operations = ['1', , '+', '2', '=']
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get(
      '.components__ExpretionsContainer-pgokm4-2',
    ).contains('1 + 2')
  })

  it('navigation should work', () => {
    cy.contains('Settings').click()
    cy.url().should('include', '/settings')
  })
})

describe('Settings page', () => {
  beforeEach(() => {
    cy.visit('/settings')
  })

  it('starts with light theme', () => {
    cy.get('main div').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)',
    )
  })

  it('themes should change', () => {
    cy.get('select').select('Dark theme')
    cy.get('main div').should(
      'have.css',
      'background-color',
      'rgb(49, 49, 79)',
    )
    cy.get('select').select('Colored theme')
    cy.get('main div').should(
      'have.css',
      'background-color',
      'rgb(157, 245, 187)',
    )
  })

  it('clear all should work', () => {
    let operations = ['1', '+', '3', '=']
    cy.contains('Home').click()
    operations.forEach(operation =>
      cy.get(`button[data-value="${operation}"]`).click(),
    )
    cy.get(
      '.components__ExpretionsContainer-pgokm4-2',
    ).should('not.be.empty')
    cy.contains('Settings').click()
    cy.get('main button').click()
    cy.contains('Home').click()
    cy.get(
      '.components__ExpretionsContainer-pgokm4-2',
    ).should('be.empty')
    cy.get('.components__Container-v1h4qc-0').contains('0')
  })
})
