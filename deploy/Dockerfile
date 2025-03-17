FROM nginx

USER root
RUN apt update && apt install -yq --no-install-recommends \
    nginx

COPY deploy/config/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html
COPY site /var/www/html

RUN chown -R www-data /var/www/html
RUN chmod -R 755 /var/www/html
EXPOSE 80

RUN mkdir /root/admin
COPY deploy/start.sh /root/admin
RUN chmod +x /root/admin/start.sh
ENTRYPOINT ["/root/admin/start.sh"]