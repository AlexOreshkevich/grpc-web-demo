# gRPC Web Server (Kotlin)

## Building
Run `gradle installDist`

## Running gRPC server
Run `run.sh` should be followed by `Server started, listening on 50051`.

## Verify client
Run
```
./build/install/examples/bin/hello-world-client
```
and you should see `Received: [Custom Kotlin GRPC] ->>> Hello world` message.