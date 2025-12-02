# Use official Node.js LTS image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production && \
    # Clean npm cache to reduce image size
    npm cache clean --force

# Create non-root user and change ownership
RUN groupadd -r -g 1001 nodejs && \
    useradd -r -u 1001 -g nodejs nodejs && \
    chown -R nodejs:nodejs /app


# Switch to non-root user
USER nodejs

# Copy application source code
COPY index.js ./

# Expose the port the app runs on
EXPOSE 3002

# Set environment variables with default values
ENV PORT=3002 \
    NODE_ENV=production

# Start the application
CMD ["node", "index.js"]