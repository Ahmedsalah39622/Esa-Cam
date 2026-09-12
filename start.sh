#!/bin/bash
# Hostinger Node.js startup script
# Installs pnpm via npm (since Hostinger doesn't ship pnpm),
# installs dependencies, builds the Next.js app, then starts it.

# Install pnpm globally if not available
if ! command -v pnpm &> /dev/null; then
  echo "pnpm not found – installing via npm..."
  npm install -g pnpm@12.3.4
fi

# Install dependencies
pnpm install --frozen-lockfile

# Build Next.js
pnpm build

# Start the server
pnpm start