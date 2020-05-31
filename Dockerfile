FROM node:14.2.0-slim

WORKDIR /usr/src/app

COPY package.json .

COPY package-lock.json .

RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "start"]