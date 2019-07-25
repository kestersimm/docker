FROM golang:1.11


WORKDIR $GOPATH/src/github.com/callicoder/go-docker

COPY . .

# Download all the dependencies
RUN go get -d -v ./...

# Install the package
RUN go install -v ./...

EXPOSE 8886

# Run the executable
CMD ["go-docker"]