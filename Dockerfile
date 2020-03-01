FROM node:12.16.1-alpine

WORKDIR /app

COPY . .

RUN npm install --global pnpm && \
  pnpm install

ENTRYPOINT [ "pnpm", "start" ]