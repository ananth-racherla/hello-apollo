FROM node:10-alpine
WORKDIR /usr/src/app
EXPOSE 3000
COPY package.json yarn.lock ./
RUN yarn install --no-cache --frozen-lockfile
COPY src/ ./src/
USER 1000 
CMD ["npm", "start"]
