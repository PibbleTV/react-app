FROM nginx:alpine

# Replace default nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Run NGINX with the custom config
CMD ["/etc/nginx", "-c", "/etc/nginx/nginx.conf"]
