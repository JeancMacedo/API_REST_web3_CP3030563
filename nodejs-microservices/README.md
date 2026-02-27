# API REST com Node.js, Express e Sequelize (Microsserviços)

Este projeto implementa a atividade do tutorial com dois microsserviços:

- `cliente-service` (porta `3001`) para gerenciamento de clientes
- `pedido-service` (porta `3002`) para gerenciamento de pedidos

Cada serviço possui seu próprio banco de dados MySQL e se comunica via HTTP.

## Estrutura

```text
nodejs-microservices/
├─ cliente-service/
│  ├─ package.json
│  ├─ .env
│  ├─ app.js
│  ├─ config/database.js
│  ├─ models/Cliente.js
│  ├─ controllers/cliente.controller.js
│  └─ routes/cliente.routes.js
├─ pedido-service/
│  ├─ package.json
│  ├─ .env
│  ├─ app.js
│  ├─ config/database.js
│  ├─ models/Pedido.js
│  ├─ controllers/pedido.controller.js
│  └─ routes/pedido.routes.js
└─ README.md
```

## Pré-requisitos

- Node.js 18+
- MySQL
- Bancos criados no MySQL:
  - `cliente_db`
  - `pedido_db`

## Configuração

Atualize as credenciais de banco nos arquivos:

- `cliente-service/.env`
- `pedido-service/.env`

## Instalação de dependências

Em dois terminais:

```bash
cd cliente-service
npm install
```

```bash
cd pedido-service
npm install
```

## Execução

Terminal 1:

```bash
cd cliente-service
npm start
```

Terminal 2:

```bash
cd pedido-service
npm start
```

## Endpoints

### Clientes (`http://localhost:3001/clientes`)

- `POST /` cria cliente
- `GET /` lista clientes
- `GET /:id` busca cliente por id
- `PUT /:id` atualiza cliente
- `DELETE /:id` remove cliente

### Pedidos (`http://localhost:3002/pedidos`)

- `POST /` cria pedido (valida `clienteId` no `cliente-service`)
- `GET /` lista pedidos
- `GET /:id` busca pedido por id
- `PUT /:id` atualiza pedido (revalida `clienteId` quando alterado)
- `DELETE /:id` remove pedido

## Exemplos rápidos

Criar cliente:

```http
POST http://localhost:3001/clientes
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

Criar pedido:

```http
POST http://localhost:3002/pedidos
Content-Type: application/json

{
  "descricao": "Pedido de notebook",
  "valor": 3500,
  "clienteId": 1
}
```
