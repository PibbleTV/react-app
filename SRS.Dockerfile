FROM ossrs/srs:5 

# Copy the custom SRS configuration file into the container
COPY srs.conf /usr/local/srs/conf/srs.conf 

EXPOSE 10080/udp

# Run SRS with the custom config
CMD ["/usr/local/srs/objs/srs", "-c", "/usr/local/srs/conf/srs.conf"]


# docker build -t ghcr.io/pibbletv/srs:latest -f SRS.Dockerfile .
# docker run -d --name srs -p 10080:10080/udp ghcr.io/pibbletv/pibbletv-srs:latest


