# Magnum Bank

![Magnum Bank Banner](https://magnum-bank-chi.vercel.app/banner.png)

> Teste Técnico - Desenvolvedor Front-End React

## 📄 Sobre o Projeto

Aplicativo web bancário desenvolvido com React, simulando funcionalidades reais como autenticação de usuário, exibição de saldo e realização de transferências via TED ou PIX.

- 📍 [Acesse a aplicação online](https://magnum-bank-chi.vercel.app/)
- 💻 [Repositório no GitHub](https://github.com/Danils0n23/magnum-bank)

## ✅ Funcionalidades

### 1. Autenticação de Usuário
- Login e logout com JWT
- Cadastro de novos usuários
- Proteção de rotas com token JWT

### 2. Home (Painel Inicial)
- Exibição do saldo atual
- Resumo das últimas transações

### 3. Transações Financeiras
- Simulação de TED e PIX
- Validação de dados obrigatórios:
  - Nome do favorecido
  - CPF/CNPJ
  - Banco, Agência e Conta (TED)
  - Chave PIX
  - Valor e data da transferência
- Solicita senha de transação
- Exibe resumo antes da confirmação

## 🚀 Tecnologias e Stacks

### Front-end
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/en/main)
- [React Bootstrap](https://react-bootstrap.github.io/) / [Bootstrap 5](https://getbootstrap.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [JWT Decode](https://github.com/auth0/jwt-decode)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Recharts](https://recharts.org/)
- [SwiperJS](https://swiperjs.com/)

### Autenticação
- JSON Web Token (JWT)

### Desenvolvimento
- ESLint
- Vite Plugin React

## 📂 Scripts Disponíveis

```bash
npm run dev       # Executa localmente
npm run build     # Build para produção
npm run preview   # Visualiza a build local
npm run lint      # Verifica problemas com o ESLint
```

## 📁 Estrutura do Projeto (Sugerida)

```
magnum-bank/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── Transactions/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Home.jsx
│   │   ├── Transfer.jsx
│   ├── services/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── package.json
└── vite.config.js
```

## 😐 Como Executar Localmente

```bash
git clone https://github.com/Danils0n23/magnum-bank.git
cd magnum-bank
npm install
npm run dev
```

## ⏳ Prazo
Projeto desenvolvido e entregue dentro de **3 dias** conforme especificado no teste porém está sendo entregue em **1 dia**.

## 🌟 Contato
Desenvolvido por [Danils0n23](https://github.com/Danils0n23) com propósito de avaliação técnica.

---

**Obrigado por visitar o projeto!**

