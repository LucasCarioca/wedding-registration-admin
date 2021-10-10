FROM nginx
WORKDIR /usr/share/nginx/html

COPY nginx.config /etc/nginx/conf.d/default.conf
COPY ./build ./