FROM node as build

WORKDIR /build
RUN npm install -g @angular/cli@14.0.3
COPY package.json package-lock.json* ./
RUN npm ci && npm cache clean --force
COPY . .

RUN ng build

FROM nginx

COPY --from=build /build/dist/angular-countdown/* /usr/share/nginx/html/
RUN ls /usr/share/nginx/html
