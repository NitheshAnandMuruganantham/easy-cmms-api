FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

ENV NODE_ENV production

RUN yarn install && yarn prisma generate

COPY . .

RUN yarn  build

EXPOSE 8000

CMD [ "node", "dist/main.js" ]
