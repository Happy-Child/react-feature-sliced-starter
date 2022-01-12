FROM node:14-alpine
WORKDIR /app
COPY yarn.lock package.json ./
COPY ./ ./
RUN yarn
CMD yarn start
