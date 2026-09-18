#!/bin/bash
# Hostinger Node.js startup script
# Uses the user-local project-pinned pnpm and starts the already-built app.

export PATH="$HOME/.local/node_modules/.bin:$PATH"

if ! command -v pnpm >/dev/null 2>&1; then
	npm install --prefix "$HOME/.local" pnpm@11.3.0
fi

# Hostinger runs the build separately; startup only launches the production server.
pnpm start