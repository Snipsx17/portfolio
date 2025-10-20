FROM node:22.20.0-alpine3.21 AS deps

# enable pnpm
RUN corepack enable
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

FROM node:22.20.0-alpine3.21 AS builder

# enable pnpm
RUN corepack enable
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY . .

RUN pnpm build

FROM node:22.20.0-alpine3.21 AS prod-deps

# enable pnpm
RUN corepack enable
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install --prod --frozen-lockfile

FROM node:22.20.0-alpine3.21 AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=prod-deps /app/node_modules ./node_modules

ENV HOST=0.0.0.0

EXPOSE 4321

CMD [ "node", "./dist/server/entry.mjs" ]