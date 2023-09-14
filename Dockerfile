FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

CPOY . .

ESPOSE 3000

CMD ["npm", "start"]

