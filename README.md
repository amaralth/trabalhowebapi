# Petshop API

Esta é uma API para gerenciamento de um petshop, desenvolvida utilizando Node.js e Sequelize. A API permite criar, listar, atualizar e excluir registros de Animais, Clientes e Serviços.

## Entidades

### Animal
Representa os animais cadastrados no petshop.

**Atributos:**
- id (integer): Identificador único do animal.
- nome (string): Nome do animal.
- tipo (string): Tipo do animal (ex: cão, gato).
- idade (integer): Idade do animal.
- clienteId (integer): Identificador do cliente dono do animal.

### Cliente
Representa os clientes do petshop.

**Atributos:**
- `id` (integer): Identificador único do cliente.
- `nome` (string): Nome do cliente.
- `email` (string): Email do cliente.
- `telefone` (string): Telefone do cliente.

### Servico
Representa os serviços prestados pelo petshop.

**Atributos:**
- id (integer): Identificador único do serviço.
- descricao (string): Descrição do serviço.
- preco (float): Preço do serviço.
- data (date): Data do serviço.
- clienteId (integer): Identificador do cliente que solicitou o serviço.
- animalId (integer): Identificador do animal que recebeu o serviço.


## Rotas
### Animal

- POST /api/animais: Cria um novo animal.
- GET /api/animais: Lista todos os animais.
- GET /api/animais/:id: Exibe um animal específico.
- PUT /api/animais/:id: Atualiza um animal específico.
- DELETE /api/animais/:id: Exclui um animal específico.

### Cliente
- POST /api/clientes: Cria um novo cliente.
- GET /api/clientes: Lista todos os clientes.
- GET /api/clientes/:id: Exibe um cliente específico.
- PUT /api/clientes/:id: Atualiza um cliente específico.
- DELETE /api/clientes/:id: Exclui um cliente específico.


### Servico
- POST /api/servicos: Cria um novo serviço.
- GET /api/servicos: Lista todos os serviços.
- GET /api/servicos/:id: Exibe um serviço específico.
- PUT /api/servicos/:id: Atualiza um serviço específico.
- DELETE /api/servicos/:id: Exclui um serviço específico.