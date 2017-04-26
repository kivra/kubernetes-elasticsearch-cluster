#! /bin/bash

# Sets up proxy to enable the simple status-page

echo "Setting up elasticsearch statuspage on localhost:8001/status"
kubectl proxy --www=./status-page  --www-prefix=/status
