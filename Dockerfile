# Name the node stage "builder"
FROM node:12 AS builder
# Set working directory
WORKDIR /finx-io/finx-io
# WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
#RUN npx browserslist@latest --update-db
#RUN yarn install && yarn build
RUN pwd && ls -alt
#RUN cd finx-io && yarn
## install PORTIS
