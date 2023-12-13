FROM node:20

WORKDIR /app

COPY package*.json ./ 

RUN npm install registry.npmjs.org

COPY . .

CMD ["npm", "start"]
