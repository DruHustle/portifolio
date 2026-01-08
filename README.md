# Portifolio for Andrew Gotora

A professional, interactive personal portfolio website built with React, TypeScript, and Vite. This site showcases a collection of projects with detailed descriptions, technology stacks, and links to live demos and source code.

## 🎯 Features

*   **Dynamic Project Showcase**: Features a variety of projects, each with its own detailed page.
*   **Modern Dark Theme**: A sleek and professional dark theme UI built for a modern look.
*   **Responsive Layout**: Fully responsive design that works seamlessly on all devices, from mobile to desktop.
*   **Smooth Animations**: Engaging user experience with smooth transitions powered by Framer Motion.
*   **Detailed Project Pages**: Dedicated pages for each project including problem statements, architecture, and business impact.
*   **Production-Ready**: Built with React 19, Tailwind CSS 4, and shadcn/ui.

## 🚀 Quick Start

### Prerequisites

*   Node.js 18+ and pnpm
*   Git
*   GitHub account

### Local Development

1.  **Clone the repository**

```shell
git clone https://github.com/DruHustle/portifolio.git
cd portifolio
```

2.  **Install dependencies**

```shell
pnpm install
```

3.  **Start development server**

```shell
pnpm dev
```

4.  **Open in browser** Navigate to `http://localhost:3000`

### Build for Production

```shell
pnpm build
```

This creates an optimized production build in the `dist/public` directory.

## 📖 GitHub Pages Deployment Guide

### Step 1: Create a GitHub Repository

1.  Go to [github.com/new](https://github.com/new)
2.  Enter repository name: `portifolio`
3.  Choose "Public" (required for free GitHub Pages)
4.  Click "Create repository"

### Step 2: Configure GitHub Pages

1.  Go to your repository settings
2.  Navigate to **Settings** → **Pages**
3.  Under "Source", select **Deploy from a branch**
4.  Select branch: **gh-pages** (created by the deployment action)
5.  Select folder: **/(root)**
6.  Click "Save"

### Step 3: Prepare Your Project

1.  **Update package.json** to include the homepage:

```json
{
  "name": "portfolio",
  "homepage": "https://DruHustle.github.io/portifolio",
  "type": "module",
  ...
}
```

2.  **Install gh-pages package** (if not already installed):

```shell
pnpm add -D gh-pages
```

3.  **Update package.json scripts**:

```json
{
  "scripts": {
    "dev": "vite --host",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outfile=dist/index.js",
    "predeploy": "pnpm build",
    "deploy": "gh-pages -d dist",
    "preview": "vite preview --host"
  }
}
```

### Step 4: Build and Deploy

1.  **Build the project**:

```shell
pnpm build
```

2.  **Deploy to GitHub Pages**:

```shell
pnpm deploy
```

This command:

*   Builds your project (via predeploy script)
*   Pushes the `dist` folder to the `gh-pages` branch
*   GitHub Pages automatically serves the content

### Step 5: Verify Deployment

1.  Go to your repository on GitHub
2.  Navigate to **Settings** → **Pages**
3.  You should see a message: "Your site is published at `https://DruHustle.github.io/portifolio`"
4.  Click the link to view your live website

## 🔄 Continuous Updates

The portfolio is regularly updated with new projects and improvements. To stay current:

1.  **Check for updates**: `git pull origin master`
2.  **Review changes**: See commit history for recent updates
3.  **Report issues**: Use GitHub Issues to report bugs or suggest improvements

## 🤝 Contributing

We welcome contributions! To contribute:

1.  Fork the repository
2.  Create a feature branch: `git checkout -b feature/your-feature`
3.  Make your changes
4.  Commit: `git commit -m "Add your feature"`
5.  Push: `git push origin feature/your-feature`
6.  Open a Pull Request

## 🛠️ Technology Stack

*   **Frontend Framework**: React 19
*   **Styling**: Tailwind CSS 4 & shadcn/ui
*   **Animations**: Framer Motion
*   **Routing**: Wouter
*   **Build Tool**: Vite
*   **Package Manager**: pnpm
*   **Language**: TypeScript
*   **Backend**: Node.js & Express

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

*   **Issues**: Open an issue on GitHub
*   **Discussions**: Use GitHub Discussions for questions

## 👨‍💻 Author

Developed by **Andrew Gotora**

**Last Updated**: January 2026

For the latest updates and announcements, follow this repository or check the [Releases](https://github.com/DruHustle/portifolio/releases) page.
