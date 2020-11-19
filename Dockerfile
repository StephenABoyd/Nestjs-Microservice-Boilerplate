FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM node:14.15-alpine
WORKDIR /app
COPY --from=builder /app/dist ./
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "main"]