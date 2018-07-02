FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

COPY . .

# Bundle app source
RUN npm install


RUN npm install nodemon -g

EXPOSE 6969

CMD [ "npm", "start" ]
