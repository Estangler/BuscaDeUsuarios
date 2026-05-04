# BuscaDeUsuarios

Uma aplicação React para busca, filtragem e ordenação de usuários utilizando dados da API pública JSONPlaceholder.


<img width="1900" height="972" alt="image" src="https://github.com/user-attachments/assets/e092723c-1107-4673-8b24-17ea942fb4c3" />



O projeto foi desenvolvido com foco em:

- Componentização
- React moderno
- TypeScript
- Hooks customizados
- Estado derivado
- Debounce
- Organização de arquitetura front-end

---

# Preview

## Funcionalidades

- Busca de usuários em tempo real
- Debounce para otimização da busca
- Ordenação alfabética (A-Z / Z-A)
- Tratamento de loading
- Tratamento de erro
- Estado vazio
- Interface responsiva

---

# Tecnologias utilizadas

## Front-end

- React 19
- TypeScript
- Vite
- TailwindCSS
- Lucide React

## Conceitos aplicados

- Hooks customizados
- Controlled Components
- Derived State
- useMemo
- useEffect
- Debounce
- Imutabilidade
- Componentização
- Separação de responsabilidades

---

# Estrutura do projeto

```bash
src
 ┣ components
 ┃ ┣ CardContainer.tsx
 ┃ ┣ EmptyState.tsx
 ┃ ┣ ErrorMessage.tsx
 ┃ ┣ Header.tsx
 ┃ ┣ SearchInput.tsx
 ┃ ┗ UserCard.tsx
 ┃
 ┣ hooks
 ┃ ┣ useDebounce.ts
 ┃ ┗ useUsers.ts
 ┃
 ┣ services
 ┃ ┗ fetchUsers.ts
 ┃
 ┣ types
 ┃ ┗ user.ts
 ┃
 ┣ App.tsx
 ┗ main.tsx
```

---

# Arquitetura do projeto

O projeto foi organizado utilizando separação de responsabilidades.

## Components

Responsáveis apenas pela interface visual.

Exemplos:

- Header
- SearchInput
- UserCard

---

## Hooks

Responsáveis pela lógica reutilizável.

### useUsers

Hook responsável por:

- Buscar usuários
- Controlar loading
- Tratar erros

### useDebounce

Hook responsável por:

- Criar atraso na busca
- Evitar filtros excessivos a cada tecla digitada
- Melhorar performance e experiência do usuário

---

## Services

Responsáveis pela comunicação com APIs externas.

### fetchUsers

Centraliza a lógica de requisição HTTP.

Isso melhora:

- Reutilização
- Organização
- Manutenção

---

## Types

Responsáveis pelas tipagens da aplicação.

O projeto utiliza TypeScript para:

- Garantir previsibilidade
- Melhorar autocomplete
- Evitar erros
- Facilitar refatorações

---

# Conceitos importantes utilizados

## Controlled Components

Os inputs da aplicação são controlados pelo estado do componente pai.

Isso torna o fluxo:

- previsível
- reutilizável
- mais fácil de debugar

---

## Derived State

A lista filtrada NÃO é armazenada em estado.

Ela é derivada a partir de:

- users
- search
- sortOrder

Isso evita:

- sincronização manual
- inconsistência de dados
- estados duplicados

---

## Debounce

O projeto utiliza debounce para evitar processamento excessivo durante a digitação.

Fluxo:

```txt
Usuário digita
↓
Estado do input atualiza imediatamente
↓
Hook useDebounce aguarda 500ms
↓
Busca é executada
```

Benefícios:

- Melhor performance
- Melhor UX
- Menos processamento desnecessário

---

## useMemo

A lista filtrada é memoizada utilizando useMemo.

Objetivo:

- Evitar cálculos desnecessários
- Melhorar performance
- Tornar o código mais declarativo

---

# Como executar o projeto

## Clone o repositório

```bash
git clone https://github.com/Estangler/BuscaDeUsuarios.git
```

---

## Entre na pasta

```bash
cd BuscaDeUsuarios
```

---

## Instale as dependências

```bash
npm install
```

---

## Execute o projeto

```bash
npm run dev
```

---

# Scripts disponíveis

## Rodar ambiente de desenvolvimento

```bash
npm run dev
```

## Build de produção

```bash
npm run build
```

## Preview da build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

---

# API utilizada

O projeto utiliza:

- JSONPlaceholder

Link:

[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

---

# Melhorias futuras

Ideias para evolução do projeto:

- Paginação
- React Query / TanStack Query
- Testes com Vitest
- Testes com React Testing Library
- Skeleton Loading
- Dark Mode
- Favoritos
- Modal de detalhes do usuário
- Deploy na Vercel
- Acessibilidade (ARIA)
- Internacionalização

---

# Aprendizados durante o projeto

Este projeto foi importante para consolidar conceitos como:

- Hooks customizados
- Separação de responsabilidades
- Estado derivado
- Componentes controlados
- Debounce
- Renderização condicional
- Organização de aplicações React
- TypeScript aplicado no front-end

---

# Objetivo do projeto

O objetivo principal foi praticar fundamentos importantes do ecossistema React moderno através de uma aplicação simples, mas organizada de forma próxima ao mercado.

---

# Autor

Desenvolvido por Estangler.
