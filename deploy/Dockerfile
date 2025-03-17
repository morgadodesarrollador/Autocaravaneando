ARG AUTOR
FROM ${AUTOR}/ubuntubase


ARG USUARIO
ARG CONTEXT
ARG PROYECTO
ARG TZ
ENV USUARIO="pepe"
ENV PASSWORD="abc"

USER root
RUN apt update && apt install -yq --no-install-recommends \
    nginx

COPY ./proyectos/${PROYECTO}/deploy/config/default.conf /etc/nginx/conf.d/default.conf

RUN mkdir -p /var/www/html
COPY ./proyectos/${PROYECTO}/site/* /var/www/html

RUN chown -R www-data /var/www/html
RUN chmod -R 755 /var/www/html
EXPOSE 80

USER root
RUN mkdir /root/admin
COPY start.sh /root/admin
RUN chmod +x /root/admin/start.sh
ENTRYPOINT ["/root/admin/start.sh"]