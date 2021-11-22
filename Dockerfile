FROM node:14.17-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . . 

USER node

CMD ["npm","start"]