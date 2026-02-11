# My Portfolio

A modern, responsive portfolio website built with React, TypeScript, Vite, Chakra UI, and Tailwind CSS.

## Features

- 🎨 Modern and animated UI with Chakra UI v3
- 📱 Fully responsive design
- ✨ Smooth animations and transitions
- 🎯 Multiple sections: Hero, About, Education, Experience, Awards, Projects, Gallery, Videos, Skills, and Contact
- 🚀 Deployed on GitHub Pages

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

- Install Git CLI: https://git-scm.com/install/windows

- Install npm: https://nodejs.org/en/download/

```bash
git clone https://github.com/yourusername/yourrepo.git
cd my-portfolio
```

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Push code to GitHub

```bash
git status
git add .
git commit -m "make a change"
git branch -M main
git remote add origin https://github.com/yourusername/yourrepo.git
git push -u origin main
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Configure Base Path (if needed):**
   - If your repository is named `my-portfolio` (not `username.github.io`), you need to set the base path in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/my-portfolio/',
     plugins: [react(), tailwindcss(), tsconfigPaths()],
   });
   ```
   - If your repository is `username.github.io`, the base should be `/` (default)

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your site when you push to the `main` branch
   - You can also manually trigger deployment from the "Actions" tab

4. **Access your site:**
   - Your site will be available at `https://username.github.io/my-portfolio/` (or `https://username.github.io/` if using a user/organization page)

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
# Then upload the dist folder to GitHub Pages
```

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Chakra UI v3** - Component library
- **Tailwind CSS** - Utility-first CSS
- **React Icons** - Icon library

## Project Structure

```
src/
├── components/       # React components
│   ├── ui/          # Chakra UI wrapper components
│   ├── About.tsx
│   ├── Awards.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Gallery.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Videos.tsx
├── assets/          # Images and static assets
└── App.tsx          # Main app component
```

## License

MIT

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
