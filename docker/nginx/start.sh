#!/bin/sh

# Substitui variáveis de ambiente no template do nginx
envsubst '$NODE_HOST' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# Inicia o nginx em foreground
nginx -g 'daemon off;'