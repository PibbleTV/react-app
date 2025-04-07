FROM ossrs/srs:5 

# Copy the custom SRS configuration file into the container
COPY srs.conf /usr/local/srs/conf/srs.conf 

# Expose ports (optional, but good practice)
EXPOSE 10080/udp 10080/tcp 7000

RUN mkdir -p /usr/local/srs/objs/nginx/html/hls

# Run SRS with the custom config
CMD ["/usr/local/srs/objs/srs", "-c", "/usr/local/srs/conf/srs.conf"]


