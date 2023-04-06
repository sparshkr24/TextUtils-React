FROM node:alpine

WORKDIR /textUtils/myapp
COPY ./package.json ./

RUN npm install

COPY ./ ./

CMD ["npm", "start"]