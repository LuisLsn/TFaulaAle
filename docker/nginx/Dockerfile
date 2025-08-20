FROM nginx:stable-alpine

# Instala envsubst para substituir variáveis no template
RUN apk add --no-cache gettext

# Remove a config padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia o template e o script de inicialização
COPY ./docker/nginx/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./docker/nginx/start.sh /start.sh
RUN chmod +x /start.sh

# Usa o script como entrypoint
CMD ["/start.sh"]