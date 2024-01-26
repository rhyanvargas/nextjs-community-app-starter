# A Community Application starter template project bootstrapped with [`nextjs13-starter-template`](https://github.com/rhyanvargas/nextjs13-starter-template). ✨

## What's included? 🚀

This project comes pre-configured with the following tech:

- [eslint-config-standard](https://github.com/standard/eslint-config-standard): JavaScript Standard Style
- [eslint-plugin-tailwindcss](https://github.com/nuxt/eslint-plugin-tailwindcss): ESLint plugin for Tailwind CSS
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier): ESLint rules for Prettier integration
- [Prettier](https://prettier.io/): Opinionated code formatter
- [ClerkJs](https://clerk.com/): Uesr Management & Authentication [see `Authentication` section](#authentication)

🎨 UI / Design
- [Shadcn UI](https://ui.shadcn.com/): Light and fully-customizable UI component library

🔌 Tailwind Plugins:

- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin): Easy type control (ie. `prose`)
- [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate): Shorter tailwind classes to animate
- [postcss-import](https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports): Cleaner CSS organization
- [tailwindcss/nesting](https://tailwindcss.com/docs/using-with-preprocessors#nesting): Detects `@apply` and `@screen` tailwind directives within `imported` files

## Getting Started 🛠️

To get started with this project, follow these steps:

1. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions from the VSCode Marketplace.

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Authentication
### Updating Public Routes

```
// ./middleware.ts
//
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about
// configuring your middleware

export default authMiddleware({
  publicRoutes: ["/"],
});
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

```
