# evmanutencao

Aplicação web de catálogo e apresentação de produtos e serviços para um sistema de manutenção, com frontend em React e backend em Node.js/Express integrado a MySQL.

## Descrição

O projeto reúne duas aplicações dentro de um monorepo:

- `frontend`: site em React para exibir serviços e produtos.
- `backend`: API REST em Node.js que expõe operações CRUD para produtos e serviços.

A solução resolve a apresentação organizada de informações comerciais e disponibiliza endpoints para manipulação de dados no banco. O frontend consome a API via variável de ambiente e exibe cards, modais de detalhamento e botões de contato via WhatsApp.

## Funcionalidades

- Listagem de serviços ativos e inativos.
- Listagem de produtos disponíveis.
- Abertura de modal com detalhes de produto e serviço.
- Encaminhamento para orçamento via WhatsApp a partir dos modais.
- API REST com operações CRUD para `produtos` e `servicos`.
- Filtro de serviços por campo `ativo` nas consultas.
- Roteamento de frontend com páginas para Home, Serviços, Produtos e página 404.

## Tecnologias Utilizadas

- Backend
  - Node.js
  - Express
  - MySQL
  - dotenv
  - cors
  - nodemon
- Frontend
  - React 19
  - Vite
  - React Router DOM
  - Framer Motion
  - Lucide React
- Banco de dados
  - MySQL
- Estilização
  - CSS tradicional
- Ferramentas
  - ESLint

## Estrutura do Projeto

- `backend/`
  - `package.json` - dependências e script de desenvolvimento.
  - `src/server.js` - inicialização do servidor na porta `3000`.
  - `src/app.js` - configuração do Express, CORS e JSON middleware.
  - `src/routes.js` - rotas da API para produtos e serviços.
  - `src/app/controllers/` - lógica de resposta para cada recurso.
  - `src/app/repository/` - acesso ao banco de dados e queries SQL.
  - `src/app/database/conexao.js` - conexão MySQL usando variáveis de ambiente.
- `frontend/`
  - `package.json` - dependências, scripts e configuração Vite.
  - `vite.config.js` - configuração padrão do Vite.
  - `src/main.jsx` - renderização da aplicação React.
  - `src/App.jsx` - ponto de entrada do componente App.
  - `src/routes.jsx` - rotas do cliente.
  - `src/pages/` - páginas Home, Produtos, Serviços e NotFound.
  - `src/components/` - componentes de UI, cards, modais e layout.
  - `src/styles/` - estilos globais e específicos de páginas.

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- MySQL disponível localmente ou remotamente

### Backend

```bash
cd backend
npm install
```

Variáveis de ambiente do backend:

```text
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
```

Em seguida:

```bash
npm run dev
```

O backend escuta em `http://localhost:3000`.

### Frontend

```bash
cd frontend
npm install
```

Variável de ambiente do frontend:

```text
VITE_API_URL
```

Exemplo:

```env
VITE_API_URL=http://localhost:3000
```

Em seguida:

```bash
npm run dev
```

O frontend roda em `http://localhost:5173` por padrão.

### Outros scripts do frontend

```bash
npm run build
npm run preview
npm run lint
```

## Variáveis de Ambiente

- `DB_HOST` - host do servidor MySQL.
- `DB_PORT` - porta do MySQL.
- `DB_USER` - usuário do banco de dados.
- `DB_PASSWORD` - senha do banco de dados.
- `DB_NAME` - nome do schema/database.
- `VITE_API_URL` - URL base da API backend usada pelo frontend.

## API / Endpoints

### Serviços

| Método | Rota                | Finalidade                                |
| ------ | ------------------- | ----------------------------------------- |
| POST   | `/api/servicos`     | Criar um novo serviço                     |
| GET    | `/api/servicos`     | Listar serviços (opção de filtro `ativo`) |
| GET    | `/api/servicos/:id` | Obter um serviço por ID                   |
| PUT    | `/api/servicos/:id` | Atualizar um serviço existente            |
| DELETE | `/api/servicos/:id` | Excluir um serviço                        |

### Produtos

| Método | Rota                | Finalidade                     |
| ------ | ------------------- | ------------------------------ |
| POST   | `/api/produtos`     | Criar um novo produto          |
| GET    | `/api/produtos`     | Listar produtos                |
| GET    | `/api/produtos/:id` | Obter um produto por ID        |
| PUT    | `/api/produtos/:id` | Atualizar um produto existente |
| DELETE | `/api/produtos/:id` | Excluir um produto             |

## Banco de Dados

O backend acessa duas tabelas principais:

- `tb_servicos` - armazenagem de serviços com campos como `id`, `ativo`, `titulo`/`nome` e `descricao`.
- `tb_produtos` - armazenagem de produtos com campos como `id`, `ativo`, `titulo`/`nome` e `descricao`.

A camada de repositório executa consultas SQL diretas para criar, listar, buscar por ID, atualizar e deletar registros.

## Interface do Sistema

O frontend inclui as seguintes páginas:

- `/` - Home com seções de hero, sobre, serviços, diferenciais, contato e rodapé.
- `/Servicos` - página de serviços que carrega dados da API e exibe cards.
- `/produtos` - página de produtos que carrega dados da API e exibe cards.
- `*` - página de não encontrado.

Componentes visuais relevantes:

- `Loader` - exibe estado de carregamento.
- `WhatsappFloat` - botão flutuante de contato via WhatsApp.
- `ProductCard` / `ServiceCard` - cartões de resumo.
- `ProductModal` / `ServiceModal` - modal de detalhes e botão para orçamento.

## Melhorias Futuras

- Adicionar validação de entrada para os endpoints do backend.
- Incluir um arquivo `.env.example` para orientar a configuração.
- Implementar autenticação/controle de acesso para operações CRUD.
- Criar interface administrativa para criação, edição e exclusão de produtos e serviços.
- Adicionar testes automatizados para frontend e backend.
