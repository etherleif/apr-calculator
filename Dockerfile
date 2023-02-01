# base image
FROM node:gallium

# set working directory
RUN mkdir /app && chown -R node:node /app
RUN npm install -g npm@8.3.0
COPY package.json /app/
COPY package-lock.json /app/
COPY .npmrc /app/
# make everthiny writeable by every use on this machine
# not sure why this is necessary, but without we get a permission error while installing node modules 🤷‍
RUN chmod -R 777 /app

WORKDIR /app

USER node

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies using npm
RUN npm install

# Copy all frontend stuff to new "app" folder
COPY . /app/

VOLUME ["/app/node_modules"]