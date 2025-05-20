# Etapa 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Etapa 2: Servidor estático
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove o default.conf
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona uma nova config do Nginx
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]