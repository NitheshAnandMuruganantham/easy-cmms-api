FROM node:18

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

EXPOSE 8000

CMD ["yarn", "start:prod"]



# Dockerfile
From node:18
# Specify app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY prisma ./

# Install dependencies
RUN yarn install && yarn prisma generate

# Paste source
COPY . .

# Build
RUN yarn build

ENV NODE_ENV production

# Set port
EXPOSE 8000

# Run app
CMD [ "npm", "run", "start:prod"] 
