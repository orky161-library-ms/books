FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production --silent

COPY . .

EXPOSE 30001
CMD [ "node", "src/server.js" ]
