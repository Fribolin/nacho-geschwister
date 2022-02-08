FROM node:16

RUN apt-get -y install git

RUN git clone https://github.com/Fribolin/nacho-geschwister.git /app

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 8080

CMD [ "node", "server.js" ]