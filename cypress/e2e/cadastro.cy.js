describe('Teste de Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('cadastro.html');

    cy.get('input[name="nome"]').type('João Silva');
    cy.get('input[name="email"]').type('joao@example.com');
    cy.get('input[name="senha"]').type('senha123');

    cy.get('button[type="submit"]').click();

    cy.contains('Cadastro realizado com sucesso!').should('be.visible');
  });

  it('Deve exibir mensagem de erro ao informar um e-mail inválido', () => {
    cy.visit('cadastro.html');

    cy.get('input[name="nome"]').type('Maria Souza');
    cy.get('input[name="email"]').type('email-invalido');
    cy.get('input[name="senha"]').type('senha123');

    cy.get('button[type="submit"]').click();

    cy.contains('Erro: E-mail inválido!').should('be.visible');
  });
});
