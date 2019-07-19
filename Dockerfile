FROM node:8-jessie
RUN git clone https://github.com/fec1-arwen/reviews.git
RUN cd ./reviews && npm install && cd ..
RUN git clone https://github.com/fec1-arwen/FeaturedFilm.git
RUN cd ./FeaturedFilm && npm install && cd ..
RUN git clone https://github.com/fec1-arwen/cast-and-crew.git
RUN cd ./cast-and-crew && npm install && cd ..
WORKDIR /proxy
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build
CMD ["node", "server/index.js"]