FROM node:12.22.11 as build

WORKDIR /src

COPY . /src/

RUN npm i
RUN npm i --silent
RUN npm i react-scripts@3.0.1 -g --silent

RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /src/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]