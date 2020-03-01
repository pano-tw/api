FROM node:12.16.1-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install --global pnpm && \
  pnpm install --prod

ENTRYPOINT [ "pnpm", "start" ]