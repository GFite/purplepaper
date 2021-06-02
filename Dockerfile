# Name the node stage "builder"
FROM node:12 AS builder
# Set working directory
WORKDIR /finx-io
COPY . .
