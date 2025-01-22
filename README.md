# Gerenciador de Usuários - API RESTful
**Cadastro-api** é um projeto de uma API RESTful desenvolvida com Node.js, Express e Prisma para gerenciar usuários. A aplicação implementa as operações básicas de CRUD (Create, Read, Update, Delete), permitindo a criação, leitura, atualização e exclusão de registros de usuários em um banco de dados.

## Funcionalidades
### 1 **Listar usuários:**
- Retorna todos os usuários cadastrados.
- Rota: GET /usuarios
### 2 **Cadastrar usuário:**
- Adiciona um novo usuário com os dados fornecidos.
- Rota: POST /usuarios

### 3 **Editar usuários:** 
- Atualiza as informações de um usuário existente com base no id.
- Rota: PUT /usuarios/:id

### 4 **Deletar usuários:** 
- Remove um usuário específico identificado pelo id.
- Rota: DELETE /usuarios/:id

## Tecnologias Utilizadas
- Node.js
- Express
- Prisma ORM
- Cors

## Observações:
- Este projeto tem como objetivo aplicar os conceitos de CRUD e o uso do Prisma para interação com o banco de dados, sendo uma ótima base para projetos que necessitam de funcionalidades de gerenciamento de dados.
