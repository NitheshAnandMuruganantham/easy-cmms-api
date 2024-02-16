FROM node:18 as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./
COPY prisma ./prisma/


RUN npm install && npm run prisma generate

COPY --chown=node:node . .

RUN npm run build

FROM node:18

ENV NODE_ENV production
ENV TZ "Asia/Calcutta"

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

EXPOSE 8000

CMD ["node", "dist/src/main.js"]