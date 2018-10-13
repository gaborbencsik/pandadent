FROM node:10-alpine

RUN mkdir /app
WORKDIR /app

ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json

ADD . /app

EXPOSE 4516
