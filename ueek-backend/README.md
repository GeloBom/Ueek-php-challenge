# Ueek PHP Challenge

Este repositório contém um projeto full-stack desenvolvido como parte do desafio da Ueek. Ele é composto por um backend em Laravel e um frontend em Next.js, com integração para gerenciar depoimentos (testimonials).

## Estrutura do Projeto

- **ueek-backend/**: Diretório contendo o backend desenvolvido em Laravel.
- **ueek-frontend/**: Diretório contendo o frontend desenvolvido em Next.js.

---

## Backend (Laravel)

### Requisitos

- PHP 8.1 ou superior
- Composer
- Banco de dados SQLite (ou outro configurado no Laravel)

### Configuração

1. Instale as dependências:
   ```bash
   composer install
   ```

2. Configure o arquivo `.env`:
   - Copie o arquivo `.env.example` para `.env`:
     ```bash
     cp .env.example .env
     ```
   - Configure as variáveis de ambiente, como o banco de dados.

3. Gere a chave da aplicação:
   ```bash
   php artisan key:generate
   ```

4. Execute as migrações:
   ```bash
   php artisan migrate
   ```

5. Inicie o servidor:
   ```bash
   php artisan serve
   ```

O backend estará disponível em `http://127.0.0.1:8000`.

---

## Frontend (Next.js)

### Requisitos

- Node.js 18 ou superior
- Gerenciador de pacotes (npm, yarn, pnpm ou bun)

### Configuração

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O frontend estará disponível em `http://localhost:3000`.

---

## Funcionalidades

### Backend

- API RESTful para gerenciar depoimentos (testimonials).
- Estrutura de banco de dados para armazenar depoimentos.
- Configuração de CORS para integração com o frontend.

### Frontend

- Página para exibir, adicionar e excluir depoimentos.
- Integração com a API do backend.
- Estilização com Tailwind CSS.

---

## Rotas Importantes

### Backend

- `GET /api/testimonials`: Retorna todos os depoimentos.
- `POST /api/testimonials`: Cria um novo depoimento.
- `DELETE /api/testimonials/{id}`: Exclui um depoimento pelo ID.

### Frontend

- `/testimonials`: Página para gerenciar depoimentos.

---

## Tecnologias Utilizadas

### Backend

- Laravel 10
- Banco de dados SQLite
- PHP 8.1

### Frontend

- Next.js 13
- React 18
- Tailwind CSS

---


## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
