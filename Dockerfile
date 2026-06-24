# ──────────────────────────────────────────
# Stage 1: Build the Astro site
# ──────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# ──────────────────────────────────────────
# Stage 2: Serve with nginx (tiny image)
# ──────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Copy built site
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with our SPA-friendly config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
