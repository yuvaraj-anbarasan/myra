FROM node:current-slim

WORKDIR /myra/

COPY package.json .

RUN npm install

EXPOSE 3000

COPY . .

CMD [ "node", "./bin/server.js" ]