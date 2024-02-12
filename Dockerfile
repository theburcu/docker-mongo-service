FROM node:slim

WORKDIR /node-mongo-docker-project

COPY package.json .
RUN npm i

COPY . .
CMD npm start