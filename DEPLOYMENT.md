# GitHub Pages Deployment Guide

## Automatic Deployment

This project uses GitHub Actions to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")

### 2. Configure Base Path

**Important:** If your repository name is NOT `username.github.io`, you need to configure the base path.

#### Option A: Repository named `my-portfolio` (or any other name)

Update `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: '/my-portfolio/', // Replace 'my-portfolio' with your repository name
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
```

Your site will be available at: `https://username.github.io/my-portfolio/`

#### Option B: Repository named `username.github.io` (user/organization page)

Keep the default base path (`/`):

```typescript
export default defineConfig({
  // base: '/' is the default, no need to specify
  plugins: [react(), tailwindcss(), tsconfigPaths()],
});
```

Your site will be available at: `https://username.github.io/`

### 3. Push to Main Branch

Once you push to the `main` branch, the GitHub Actions workflow will:
1. Checkout your code
2. Install dependencies
3. Build the project
4. Deploy to GitHub Pages

You can monitor the deployment progress in the **Actions** tab of your repository.

### 4. Verify Deployment

After the workflow completes:
1. Go to **Settings** → **Pages**
2. You should see a green checkmark and your site URL
3. It may take a few minutes for the site to be accessible

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify Node.js version compatibility (project uses Node 20)

### 404 Errors

- Verify the base path in `vite.config.ts` matches your repository name
- Clear browser cache
- Wait a few minutes after deployment (DNS propagation)

### Assets Not Loading

- Ensure the base path is correctly configured
- Check that all asset paths are relative (not absolute)
- Verify the build output in the `dist` folder

## Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# The dist folder contains the built files
# You can upload this folder to GitHub Pages manually
# or use a tool like gh-pages:
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && gh-pages -d dist"
```

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain:
   ```
   example.com
   ```

2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

