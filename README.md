# book-page

angular-frontend/
├── src/
│   ├── app/
│   │   ├── form/          # Form-specific component code
│   │   │   ├── form.component.ts
│   │   │   ├── form.component.html
│   │   │   ├── form.component.css
│   │   └── app.module.ts  # Main Angular module for app
│   └── index.html         # Entry point for the Angular app
├── angular.json           # Angular CLI config
├── package.json           # Node.js dependencies
├── tsconfig.json          # TypeScript config
├── Dockerfile             # Dockerfile for the frontend
------------------------------------------------------------------------------------------------------------------------------------
My app creation 
Dockerfile
# Stage 1: Build the Angular app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine

# Copy the build output to the Nginx HTML directory
COPY --from=builder /app/dist/angular-frontend /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
