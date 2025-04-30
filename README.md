# Ueek PHP Challenge

Este repositório contém um projeto full-stack desenvolvido como parte do desafio da Ueek. Ele é composto por:

- **Backend**: Desenvolvido em Laravel, com uma API RESTful para gerenciar depoimentos (testimonials).
- **Frontend**: Desenvolvido em Next.js, com integração para exibir, adicionar e excluir depoimentos.

## Tecnologias Utilizadas

- **Backend**: Laravel 10, PHP 8.1, SQLite
- **Frontend**: Next.js 13, React 18, Tailwind CSS

## Funcionalidades

- Gerenciamento de depoimentos (testimonials) com operações de criação, listagem e exclusão.
- Integração entre frontend e backend via API RESTful.
- Suporte a temas claros e escuros no frontend.

## Como Rodar o Projeto

### Backend
1. Acesse o diretório `ueek-backend`:
   ```bash
   cd ueek-backend
   ```
2. Instale as dependências:
   ```bash
   composer install
   ```
3. Configure o arquivo `.env` e execute as migrações:
   ```bash
   php artisan migrate
   ```
4. Inicie o servidor:
   ```bash
   php artisan serve
   ```

### Frontend
1. Acesse o diretório `ueek-frontend`:
   ```bash
   cd ueek-frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura do Projeto

- **ueek-backend/**: Código do backend em Laravel.
- **ueek-frontend/**: Código do frontend em Next.js.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).