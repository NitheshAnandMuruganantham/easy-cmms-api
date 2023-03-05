FROM node:18 as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node

COPY package*.json ./
COPY prisma ./prisma/


RUN yarn install && yarn prisma generate

COPY --chown=node:node . .

RUN yarn build

FROM node:18

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/package*.json ./
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/
 
CMD ["sudo node dist/main.js"]