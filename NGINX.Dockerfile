FROM nginx:alpine

# Replace default nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Port for Nginx (host:container)
EXPOSE 80

CMD ["/etc/nginx", "-c", "/etc/nginx/nginx.conf"]
