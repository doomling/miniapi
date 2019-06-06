FROM node:10.15-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm config set unsafe-perm true
RUN npm install --production --silent
RUN npm install -g pm2 --silent
COPY . .
EXPOSE 3005
CMD ["pm2-runtime", "bin/www"]