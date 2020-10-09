#!/usr/bin/env bash
docker run -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
  -p 8080:8080 -p 9901:9901 \
  --env AWS_REGION="us-west-2" \
  --env APPMESH_RESOURCE_ARN="arn:aws:appmesh:us-west-2:111122223333:mesh/meshName/virtualNode/virtualNodeName" \
  840364872350.dkr.ecr.us-west-2.amazonaws.com/aws-appmesh-envoy:v1.15.0.0-prod