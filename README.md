# EV Manutenção

Plataforma web para gerenciamento de manutenção com gestão de produtos e serviços.

## 🏗️ Arquitetura

Este é um projeto monorepo com separação clara entre frontend e backend:

```
evmanutencao/
├── backend/     # API REST com Node.js
└── frontend/    # Aplicação web com React
```

## 🔧 Backend

### Tecnologias

- **Express.js** - Framework web
- **MySQL** - Banco de dados
- **Node.js** - Runtime JavaScript
- **Nodemon** - Ferramenta de desenvolvimento com auto-reload
- **CORS** - Suporte a requisições cross-origin

### Estrutura

```
backend/src/
├── app/
│   ├── controllers/
│   │   ├── ProdutosController.js
│   │   └── ServicosController.js
│   ├── repository/
│   │   ├── ProdutosRepository.js
│   │   └── ServicosRepository.js
│   └── database/
│       └── conexao.js
├── routes.js
├── app.js
└── server.js
```

### API REST

#### Serviços

- `POST api/servicos` - Criar novo serviço
- `GET api/servicos` - Listar todos os serviços
- `GET api/servicos/:id` - Obter detalhes de um serviço
- `PUT api/servicos/:id` - Atualizar serviço
- `DELETE api/servicos/:id` - Deletar serviço

#### Produtos

- `POST api/produtos` - Criar novo produto
- `GET api/produtos` - Listar todos os produtos
- `GET api/produtos/:id` - Obter detalhes de um produto
- `PUT api/produtos/:id` - Atualizar produto
- `DELETE api/produtos/:id` - Deletar produto

### Instalação

```bash
cd backend
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O servidor iniciará com nodemon e recarregará automaticamente ao detectar mudanças.

## 💻 Frontend

### Tecnologias

- **React 19.2.6** - Biblioteca UI
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Framer Motion** - Animações
- **Lucide React** - Ícones

### Componentes

- **Header** - Navegação principal
- **Hero** - Seção destaque
- **About** - Sobre a empresa
- **Services** - Exibição de serviços
- **Differentials** - Diferenciais
- **Testimonials** - Depoimentos
- **Contact** - Formulário de contato
- **Footer** - Rodapé
- **WhatsappFloat** - Botão flutuante do WhatsApp
- **Loader** - Animação de carregamento

### Rotas

- `/` - Página inicial (Home)
- `*` - Página não encontrada (404)

### Instalação

```bash
cd frontend
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (padrão Vite).

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📋 Padrão de Código

### Backend

- **Padrão MVC**: Controllers, Repositories e Database separados
- **Async/Await**: Funções assíncronas para operações de banco de dados
- **Tratamento de Erros**: Try/catch em controllers

### Frontend

- **Componentes Funcionais**: Apenas componentes baseados em hooks
- **React Router v7**: Roteamento moderno
- **Animações com Framer Motion**: Transições suaves

## 🚀 Como Começar

### 1. Clone o repositório

```bash
git clone <https://github.com/Ramos-Victor/EVManutencao-Catalago.git>
cd evmanutencao
```

### 2. Configure o Backend

```bash
cd backend
npm install
# Configure as variáveis de ambiente conforme necessário
npm run dev
```

### 3. Configure o Frontend

```bash
cd frontend
npm install
npm run dev
```

### 4. Acesse a aplicação

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:<porta>`

## 📄 Licença

ISC

## 👤 Autor

Victor
