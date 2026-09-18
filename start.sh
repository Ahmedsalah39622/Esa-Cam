#!/bin/bash
# Hostinger Node.js startup script
# Installs the project-pinned pnpm via npm,
# installs dependencies, builds the Next.js app, then starts it.

# Always install the pinned version so a preinstalled pnpm version cannot override
# the packageManager declaration in package.json.
npm install -g pnpm@9.12.3
pnpm --version

# Install dependencies
pnpm install --frozen-lockfile

# Build Next.js
pnpm build

# Start the server
pnpm start