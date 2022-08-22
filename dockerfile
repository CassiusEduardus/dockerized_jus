FROM node:18-alpine3.15

WORKDIR /var/www/html

COPY . .

RUN npm install
RUN npm install -g nodemon