# Fast UI - The Ultimate UI Component Library

Fast UI is a modular and customizable UI component library designed for modern React applications. It provides pre-built, highly accessible components with support for Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

Before installing Fast UI, ensure you have a React or Next.js project set up with Tailwind CSS. You can follow the official Tailwind CSS installation guide for React or Next.js:

- [Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

### Installation

You can install the Fast UI CLI using `npm`, `yarn`, or `pnpm`:

#### Using npm:

```sh
npm install -g fast-gen/cli
```

#### Using yarn:

```sh
yarn global add fast-gen/cli
```

#### Using pnpm:

```sh
pnpm add -g fast-gen/cli
```

Alternatively, you can run it directly using `npx`:

```sh
npx fast-gen/cli add button
```

## 📦 Adding Components

Once the CLI is installed, you can use it to add UI components to your project.

For example, to add a `button` component:

```sh
fast-ui add button
```

This will download and install the `button` component inside your project's `components/ui/` directory.

## 📌 Dependencies

Before using Fast UI components, ensure you have the following dependencies installed:

```sh
npm install clsx class-variance-authority tailwind-merge
```

or

```sh
yarn add clsx class-variance-authority tailwind-merge
```

or

```sh
pnpm add clsx class-variance-authority tailwind-merge
```

### Utility Functions

Fast UI relies on a utility function for merging class names efficiently:

```ts
// lib/util.ts
```

```ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
```

## 🎨 Tailwind CSS Setup

Fast UI supports Tailwind CSS 4 and older versions with different configurations.

### Adding Colors

Fast UI uses a set of predefined colors for various component states like `primary`, `secondary`, `outline`, `ghost`, and `danger`. You can customize these colors using Tailwind CSS.

#### Tailwind CSS 4+

For Tailwind CSS v4 or later, you can define your color palette in your CSS file using the `@theme` directive.

Ensure your global `styles.css` includes:

```css
@import "tailwindcss";

@theme {
  --color-primary: #3b82f6;
  --color-secondary: #10b981;
  --color-outline: #d1d5db;
  --color-ghost: #9ca3af;
  --color-danger: #ef4444;
}
```

#### Tailwind CSS <4

For Tailwind versions below 4, you can define your color palette in `tailwind.config.ts`.

Ensure your `tailwind.config.ts` includes:

```ts
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#10b981",
        outline: "#d1d5db",
        ghost: "#9ca3af",
        danger: "#ef4444",
      },
    },
  },
  plugins: [],
};
```

## 🛠️ Contributing

Contributions are welcome! Feel free to fork the repository and submit a pull request.

## 📜 License

Fast UI is open-source under the MIT License.

Now you're ready to start using Fast UI in your React projects! 🚀
