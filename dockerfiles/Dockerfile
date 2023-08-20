FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . ./
RUN yarn install

EXPOSE 4001
CMD ["yarn", "dev"]