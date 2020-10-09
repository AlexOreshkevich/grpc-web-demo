#!/usr/bin/env bash

if [ ! -f "helloworld_pb.js" ]; then
    echo "Generate gRPC client stub..."
    protoc -I=. helloworld.proto \
  --js_out=import_style=commonjs:. \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
fi

if [ ! -d "node_modules" ]; then
    npm install
fi

if [ -d "dist" ]; then
    rm -rf dist
fi

npx webpack client.js