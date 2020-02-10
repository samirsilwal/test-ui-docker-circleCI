FROM node:alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install


COPY . .

RUN chmod a+x /app/node_modules/.bin/react-scripts  

RUN npm run build

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html




