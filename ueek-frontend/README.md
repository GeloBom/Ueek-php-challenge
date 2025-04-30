# Projeto Next.js

Este é um projeto desenvolvido com [Next.js](https://nextjs.org), utilizando o comando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Como Iniciar

Para rodar o servidor de desenvolvimento, utilize o comando:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o resultado.

Você pode começar a editar a página modificando o arquivo `app/page.tsx`. As alterações serão aplicadas automaticamente.

## Componentes

### ThemeProvider

O componente `ThemeProvider` é utilizado para gerenciar temas no frontend, utilizando a biblioteca [`next-themes`](https://github.com/pacocoursey/next-themes). Ele permite alternar entre temas claros e escuros, ou outros temas personalizados.

#### Localização
O arquivo está localizado em:
```
src/components/theme-provider.tsx
```

#### Exemplo de Uso
```tsx
import { ThemeProvider } from "./components/theme-provider";

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
```

#### Dependências
- [`next-themes`](https://github.com/pacocoursey/next-themes): Biblioteca para gerenciamento de temas no Next.js.

Certifique-se de configurar o atributo `class` no `ThemeProvider` e de incluir as classes de tema no arquivo `tailwind.config.ts` para que o Tailwind CSS aplique os estilos corretamente.
