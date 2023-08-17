FROM node:20-alpine3.17
WORKDIR /app
COPY . .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]


