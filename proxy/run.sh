#!/usr/bin/env bash
docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
  -p 8080:8080 -p 9901:9901 \
  envoyproxy/envoy:v1.15.0