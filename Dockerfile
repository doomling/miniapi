FROM node:10.15-alpine

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm config set unsafe-perm true

RUN npm install --production --silent

COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
