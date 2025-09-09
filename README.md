# 🖥️ Frontend - Calculadora de Períodos de Tempo

Aplicação frontend desenvolvida em **Next.js** com **TypeScript**, consumindo a API de cálculo de períodos de tempo. Utiliza **React Query** para gerenciamento de estado de dados, **Tailwind CSS** para estilização e **Material UI (MUI)** para componentes prontos.

---

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) - Framework React para SSR/SSG
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest) - Gerenciamento de estado e cache
- [Tailwind CSS](https://tailwindcss.com/) - Utilitário de CSS
- [Material UI](https://mui.com/) - Biblioteca de componentes React
- [PNPM](https://pnpm.io/) - Gerenciador de pacotes

---

## 📦 Pré-requisitos

Antes de rodar o projeto:

- [Node.js](https://nodejs.org/) (>= 18.x)
- [PNPM](https://pnpm.io/), ou npm/yarn
- API backend rodando (NestJS)

---

## ⚙️ Instalação

Clone o repositório e instale dependências:

```bash
git clone https://github.com/seu-usuario/frontend-calculadora-periodos.git
cd frontend-calculadora-periodos
pnpm install
```

## 🔧 Configuração do ambiente

Copie o arquivo de exemplo `.env.example` para `.env`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure as variáveis, por exemplo:

```
NEXT_PUBLIC_API_URL=http://api.example.com/api
```

---

## ▶️ Rodando a aplicação

### Ambiente de desenvolvimento

```bash
pnpm dev
```

Acesse: `http://localhost:3000`

### Build e produção

```bash
pnpm build
pnpm start
```

---

## 🌐 Consumindo a API

- `GET /periodos` → Listar períodos
- `POST /periodos` → Criar período
- `DELETE /periodos/:id` → Remover período

Exemplo usando React Query:

```ts
const { data, isLoading } = useQuery(["periodos"], fetchPeriodos);
```

---

## 🎨 Estilização

- Tailwind CSS para layout e responsividade
- Material UI para componentes prontos como `Button`, `Card`, `TextField`
