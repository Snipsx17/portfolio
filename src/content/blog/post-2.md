---
title: 'How to Create a Monorepo with PNPM'
subtitle: 'Why Use a Monorepo?'
pubDate: 2025-01-31
description: 'Monorepos have become increasingly popular in modern development as they allow managing multiple packages within a single repository, making code reuse and dependency management easier.'
author: 'Uberth Hernandez'
profession: 'Fullstack developer'
image:
  url: 'https://i.ibb.co/84D1rrft/mono-repo.png" alt="How to Create a Monorepo with PNPM'
  alt: 'How to Create a Monorepo with PNPM"'
tags: ['frontend', 'backend', 'web', 'CI/CD']
---

# 🏗️ How to Create a Monorepo with PNPM

Monorepos have become increasingly popular in modern development as they allow managing multiple packages within a single repository, making code reuse and dependency management easier.

In this article, I'll show you how to set up a monorepo with pnpm, using two packages: backend and frontend. We'll also explore the powerful --filter flag and explain the pnpm-lock.yaml file, which plays a key role in dependency management with PNPM.

## 🚀 Why Use a Monorepo?

- ✅ Centralized codebase: Easier project organization without scattered repositories.
- ✅ Code reuse: Share modules between packages without publishing them to npm.
- ✅ Efficient dependency management: PNPM uses a global store to prevent duplication.
- ✅ Better performance: PNPM is faster and uses symlinks to optimize storage.

## 🔧 Installing PNPM

If you haven’t installed pnpm yet, you can do so with:

![Install pnpm](https://i.ibb.co/NdfjhSKZ/install-pnpm.png 'install pnpm')

Check if it’s installed correctly:

![Check pnpm version](https://i.ibb.co/R42HN4nw/pnpm-v.png 'Check pnpm version')

## 📁 Setting Up the Monorepo

### 1️⃣ Create the Project Structure

First, create the monorepo folder and initialize a project with pnpm:

![Create the project structure](https://i.ibb.co/SwdyXN5v/create-monorepo.png 'Create the project structure')

Now, create the frontend and backend folders inside **packages/**:

![Create packages](https://i.ibb.co/ccwqQvZZ/add-ppackages.png 'Create packages')

### 2️⃣ Configure pnpm-workspace.yaml

PNPM uses a file called pnpm-workspace.yaml in the root of the project to define which folders belong to the monorepo.

Create a **pnpm-workspace.yaml** file and add the following:

![pnpm workspace](https://i.ibb.co/xkCC1LV/pnpm-workspace-file.png 'pnpm workspace')

This tells PNPM that any folder inside packages/ should be treated as an independent package.

### 3️⃣ Initialize the frontend and backend Packages

Each package in the monorepo needs its own package.json.

Run these commands:

![Init packages](https://i.ibb.co/JRW9RkHx/init-packages.png 'Init packages')

Your project structure should now look like this:

![Project structure](https://i.ibb.co/4wMzjhSw/project-structure.png 'Project structure')

###  4️⃣ Installing Dependencies for Specific Packages

Let's install React for frontend and Express for backend.

From the monorepo root, run:

![Install dependencies](https://i.ibb.co/gFc6g78m/install-dependencies.png 'Install dependencies')

_📌 The --filter flag tells pnpm where to install the dependencies._

If you open each **package.json**, you'll see that the dependencies were added correctly.

### 5️⃣ What is **pnpm-lock.yaml** and Why is it Important?

When installing dependencies with pnpm, a file called pnpm-lock.yaml is generated in the project root. This file is essential because:

- ✔ Ensures consistency: It locks the exact version of each installed package, avoiding discrepancies across environments.
- ✔ Optimizes installations: PNPM uses symlinks and a global store (pnpm store) to prevent redundant files.
- ✔ Improves reproducibility: If someone clones the repository and runs pnpm install, they will get the exact same dependency versions.

Unlike package.json, which only stores version ranges (^1.2.0), the **pnpm-lock.yaml** file fixes the exact versions (1.2.3). This is crucial for production and CI/CD environments.

📌 Should I commit pnpm-lock.yaml to Git?

Yes! It's recommended to version control this file (git commit) to ensure that all developers and deployment environments use the same dependency versions.

### 6️⃣ Sharing Dependencies Between Packages

If the backend needs a module from frontend, we can add it as an internal dependency:

![Sharing dependencies](https://i.ibb.co/4nSS9Qxw/sharing-dependencies.png 'Sharing dependencies')

This creates a symbolic link between the packages instead of duplicating files.

### 7️⃣ Running Commands in Specific Packages

We can run scripts only in a specific package using **--filter**

If we add this script in **packages/frontend/package.json**:

![Adding commands](https://i.ibb.co/KjqtbWZn/runing-commands.png 'Adding commands')

We can run it from the root with:

![Running commands](https://i.ibb.co/TDRNGX0k/run-commands.png 'Running commands')

We can also execute scripts in all packages with:

![Running commands recursive](https://i.ibb.co/hxMxS3dH/running-commads-recursive.png 'Running commands recursive')

Where **-r** means recursive, applying the script to all packages.

## 🎯 Conclusion

We have successfully created a monorepo with pnpm, set up frontend and backend packages, learned how to manage internal dependencies, and explored the **pnpm-lock.yaml** file. We also saw how the **--filter** flag allows us to install dependencies and execute scripts in specific packages.

📌 To further optimize the monorepo, you can integrate tools like **Turborepo** or **Nx**.

📚 Reference Links

- 🔗 [Official PNPM Documentation](https://pnpm.io/)
- 🔗 [Managing Workspaces in PNPM](https://pnpm.io/workspaces)
- 🔗 [Monorepos with PNPM and Turborepo](https://turbo.build/repo/docs)
- 🔗 [PNPM vs. Yarn vs. NPM Comparison](https://www.syncfusion.com/blogs/post/pnpm-vs-npm-vs-yarn)

📩 Connect With Me
If you have any questions, suggestions, or just want to chat about web development, feel free to reach out! 🚀

- 📧 [Email: contact@uhernandez.com](mailto:contact@uhernandez.com)
- 💼 [LinkedIn: Uberth Hernández Pérez](https://www.linkedin.com/in/uberth-hernandez-perez-31815b146/)

See you in the next article. Happy coding! 💻✨
