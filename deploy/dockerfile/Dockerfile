ARG AUTOR
FROM ${AUTOR}/nginx:latest

ENV USUARIO="pepe"
ENV PASSWORD="abc"
ENV GITHUB=""
ARG CONTEXT
ARG PROYECTO
ARG TZ

# Actualiza los paquetes e instala herramientas necesarias
RUN apt-get update && apt-get install -y curl gnupg software-properties-common

# Añade el repositorio oficial de Node.js (versión 16 LTS o ajusta a tu necesidad)
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash -

# Instala Node.js (esto incluye npm)
RUN apt-get install -y nodejs

RUN npm install -g npm@latest

USER root
RUN mkdir /root/admin/react
COPY ./dockerfiles/js/react /root/admin/react
RUN chmod +x /root/admin/react/admin/start.sh

WORKDIR /var/www/html
# COPY ./proyectos/${PROYECTO}/app /var/www/html

# RUN npm install
# RUN chown -R www-data /var/www/html
EXPOSE 3000

WORKDIR /root/admin/react
ENTRYPOINT ["./admin/start.sh"]