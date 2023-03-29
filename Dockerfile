FROM node:alpine

WORKDIR /textUtils/myapp
COPY ./ ./

RUN npm install

CMD ["npm", "start"]