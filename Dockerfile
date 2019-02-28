FROM node:10.15.1-alpine

COPY . /var/app

WORKDIR /var/app/client
RUN npm install --no-cache && npm run build && npm install -g serve


WORKDIR /var/app/server
RUN npm install --no-cache && npm i -g nodemon


EXPOSE 4000 

CMD [ "nodemon", "index.js" ]



