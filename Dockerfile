FROM node:16.17.1-alpine as builder
RUN apk update && apk add python3-dev make alpine-sdk gcc g++ git build-base openssh openssl bash curl

RUN curl -s "https://gitlab.com/api/v4/projects/9905046/repository/files/gitlab%2Fsetup_key.sh/raw?ref=master&private_token=FjCQxPFMNXJwmaomMoKi" 2>&1 | sh
RUN ssh-keyscan -t rsa gitlab.com >> ~/.ssh/known_hosts
WORKDIR /srv/asp-backend
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install -f
COPY . .
RUN npm run build

# WORKDIR /srv/cart-order-proxy/web
# COPY ./package.json ./web
# COPY ./package-lock.json ./web
# RUN npm install --build-from-source
# RUN rm -rf ./node_modules



FROM node:16.17.1-alpine
WORKDIR /srv/asp-backend
COPY --from=builder /srv/asp-backend .
ENTRYPOINT ["node" ,"build/main.js"]