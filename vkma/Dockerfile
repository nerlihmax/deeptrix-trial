FROM node:alpine as build
LABEL stage=build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
