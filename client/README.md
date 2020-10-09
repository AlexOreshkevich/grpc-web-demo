# gRPC-Web Client Guide

This project is based on gRPC-Web 
Hello World example. For more information about the gRPC-Web project as a
whole, please visit the [main repo](https://github.com/grpc/grpc-web).

All initial code for this example can be found in this current directory.

```sh
$ cd net/grpc/gateway/examples/helloworld
```

## Building the client

### Install Protobuf

To generate the protobuf messages and client service stub class from your
`.proto` definitions, we need:
 - the `protoc` binary, _and_
 - the `protoc-gen-grpc-web` plugin.

> You can download the `protoc-gen-grpc-web` protoc plugin from our
> [release](https://github.com/grpc/grpc-web/releases) page.
>
> If you don't already have `protoc` installed, you will have to download it
> first from [here](https://github.com/protocolbuffers/protobuf/releases).
>
> Make sure they are both executable and are discoverable from your PATH.
>
> For example, in MacOS, you can do:
>
> ```sh
> $ sudo mv ~/Downloads/protoc-gen-grpc-web-1.2.0-darwin-x86_64 \
>   /usr/local/bin/protoc-gen-grpc-web
> $ sudo chmod +x /usr/local/bin/protoc-gen-grpc-web
> ```

### Build
Run `build.sh`. Make sure you have Node version less than 14.

### Run 

Run the simple Web Server using `run.sh`

When these are all ready, you can open a browser tab and navigate to

```
localhost:8081
```