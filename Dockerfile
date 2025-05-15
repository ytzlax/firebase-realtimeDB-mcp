FROM node:lts-alpine

# Stage 1: Build the project
FROM node:lts-alpine AS builder
WORKDIR /app

# Copy dependency definitions
COPY package.json package-lock.json ./

# Install dependencies without running scripts
RUN npm install --ignore-scripts

# Copy all project files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Package the build
FROM node:lts-alpine
WORKDIR /app

# Copy only the production build and necessary files
COPY --from=builder /app/dist ./dist
COPY package.json ./

# Install only production dependencies
RUN npm install --production --ignore-scripts


# Run the MCP server
CMD ["node", "dist/index.js"]