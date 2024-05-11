FROM node:22-alpine
WORKDIR /usr/src/app

ENV NEW_RELIC_NO_CONFIG_FILE=true
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true
ENV NEW_RELIC_LOG=stdout

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "node", "src/server.js" ]
