# ==========================================
# Multi-Stage Dockerfile for Quách Đại Dương Portfolio
# ==========================================

# --- Stage 1: Build React Frontend ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app/client

# Copy package files and install dependencies
COPY client/package*.json ./
RUN npm ci

# Copy client source code and build production assets
COPY client/ ./
RUN npm run build

# --- Stage 2: Production Server Environment ---
FROM node:20-alpine AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=5000

# Copy server package files and install production dependencies only
COPY server/package*.json ./server/
RUN cd server && npm ci --only=production

# Copy server application source
COPY server/ ./server/

# Copy built frontend assets from Stage 1 into client/dist
COPY --from=frontend-builder /app/client/dist ./client/dist

# Expose server port
EXPOSE 5000

# Healthcheck to ensure container is responsive
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5000/health || exit 1

# Start unified server
CMD ["node", "server/index.js"]
