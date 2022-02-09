### STAGE 1: Build ###
FROM node:14 as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build
### STAGE 2: Production Environment ###
FROM nginx:1.15.12-alpine
COPY --from=builder /usr/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]