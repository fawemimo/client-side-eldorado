# Stage 1: Build Stage
# Use the official Node.js 18 Alpine image as the base image for the build stage
FROM node:18-alpine AS build
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install all dependencies based on package-lock.json
RUN npm ci
# Install sharp for image optimization (if needed)
RUN npm install sharp  # Optional, adjust based on your project requirements
# Copy the rest of the application code to the working directory
COPY . .
# Build the Next.js application (assuming your build command is 'npm run build')
RUN npm run build

# Stage 2: Runtime Stage
# Use the official Node.js 18 Alpine image as the base image for the runtime stage
FROM node:18-alpine AS runtime
# Set the working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install only production dependencies based on package-lock.json
RUN npm ci --only=production
# Copy the built application and necessary static files from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
# Expose port 3000 to allow traffic to the Next.js application
EXPOSE 3000
# Use a non-root user to run the application for security reasons
USER node
# Start the Next.js application
CMD ["npm", "start"]
