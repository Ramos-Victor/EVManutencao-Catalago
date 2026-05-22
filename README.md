# evmanutencao

Aplicação web de catálogo e apresentação de produtos e serviços para a empresa EV MANUTENÇÃO, com frontend em React e backend em Node.js/Express integrado ao Postgres.

## Descrição

O projeto reúne duas aplicações dentro de um monorepo:

- `frontend`: site em React para exibir serviços e produtos.
- `backend`: API REST em Node.js que expõe operações CRUD para produtos e serviços.

A solução resolve a apresentação organizada de informações comerciais e disponibiliza endpoints para manipulação de dados no banco. O frontend consome a API via variável de ambiente e exibe cards, modais de detalhamento e botões de contato via WhatsApp.

## Funcionalidades

- Listagem pública de serviços e produtos com visual moderno e responsivo.
- Modal de detalhes e botão de orçamento via WhatsApp.
- Área administrativa protegida por autenticação JWT (login de administrador).
- CRUD completo de produtos e serviços no painel admin, com formulários, validação, loading e tratamento de erros.
- Proteção de rotas administrativas: apenas usuários autenticados acessam o CRUD.
- Persistência de sessão do administrador (token salvo/localStorage).
- Logout seguro e redirecionamento automático.
- Componentização e estilização profissional, com CSS escopado e responsivo.
- Experiência fluida em desktop, tablet e mobile.

## Tecnologias Utilizadas

- Backend
  - Node.js
  - Express
  - Postgres
  - dotenv
  - cors
  - bcryptjs
  - jsonwebtoken
  - nodemon
  - Postman
- Frontend
  - React 19
  - Vite
  - React Router DOM
  - Framer Motion
  - Lucide React
- Banco de dados
  - Postgres
- Estilização
  - CSS tradicional

## Estrutura do Projeto

- `backend/`
  - `package.json` - dependências e script de desenvolvimento.
  - `src/server.js` - inicialização do servidor na porta `3000`.
  - `src/app.js` - configuração do Express, CORS e JSON middleware.
  - `src/routes.js` - rotas da API para produtos, serviços e autenticação.
    - `src/app/middleware/auth.js` - middleware de autenticação JWT para rotas protegidas.
    - `src/app/routes/AuthRoutes.js` - rota de login de administrador.
    - `src/app/controllers/AdminController.js` - lógica de autenticação e geração de token.
    - `src/app/repository/AdminRepository.js` - acesso ao usuário administrador no banco.
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
- Postgress disponível localmente ou remotamente

### Backend

```bash
cd backend
npm install
```

Variáveis de ambiente do backend:

```text
DATABASE_URL
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

## API / Endpoints

### Autenticação

| Método | Rota              | Finalidade                                 |
| ------ | ----------------- | ------------------------------------------ |
| POST   | `/api/auth/login` | Login de administrador (retorna token JWT) |

### Serviços

| Método | Rota                | Finalidade                                | Protegido |
| ------ | ------------------- | ----------------------------------------- | --------- |
| POST   | `/api/servicos`     | Criar um novo serviço                     | Sim       |
| GET    | `/api/servicos`     | Listar serviços (opção de filtro `ativo`) | Não       |
| GET    | `/api/servicos/:id` | Obter um serviço por ID                   | Não       |
| PUT    | `/api/servicos/:id` | Atualizar um serviço existente            | Sim       |
| DELETE | `/api/servicos/:id` | Excluir um serviço                        | Sim       |

### Produtos

| Método | Rota                | Finalidade                     | Protegido |
| ------ | ------------------- | ------------------------------ | --------- |
| POST   | `/api/produtos`     | Criar um novo produto          | Sim       |
| GET    | `/api/produtos`     | Listar produtos                | Não       |
| GET    | `/api/produtos/:id` | Obter um produto por ID        | Não       |
| PUT    | `/api/produtos/:id` | Atualizar um produto existente | Sim       |
| DELETE | `/api/produtos/:id` | Excluir um produto             | Sim       |

## Banco de Dados

O backend acessa duas tabelas principais:

- `tb_servicos` - armazenagem de serviços com campos como `id`, `ativo`, `titulo`/`nome` e `descricao`.
- `tb_produtos` - armazenagem de produtos com campos como `id`, `ativo`, `titulo`/`nome` e `descricao`.

A camada de repositório executa consultas SQL diretas para criar, listar, buscar por ID, atualizar e deletar registros.

## Interface do Sistema

### Frontend

- `/` — Home: apresentação institucional, diferenciais, contato.
- `/Servicos` — Listagem pública de serviços, cards e modais.
- `/produtos` — Listagem pública de produtos, cards e modais.
- `/login` — Tela de login do administrador, com validação e feedback.
- `/admin` — Dashboard administrativo com atalhos para CRUD.
- `/admin/produtos` — CRUD completo de produtos (listar, criar, editar, excluir).
- `/admin/servicos` — CRUD completo de serviços (listar, criar, editar, excluir).
- `*` — Página de não encontrado.
