# The Sidecar Pattern

This repo contains the code and Kubernetes manifest, and slides markdown for Kim Schlesinger's August 2022 Temporal Interview

- [Video](https://youtu.be/8Uns4M5pdC8) 
- [Slides](https://speakerdeck.com/kimschles/sidecar-pattern)

## Goals 
1. Define "sidecar pattern" 
1. Explain how to identify the sidecar pattern in a code repo 

## Kubernetes Demo 
If you'd like to experiment with the sidecar pattern example, here's how: 

1. Spin up a Kubernetes cluster
1. Create the sidecar-demo pod by running

        kubectl apply -f deployment.yaml

1. Port forward the node.js server with the command
            
        kubectl port-forward pod/<sidecar-demo-pod-name> 3000:3000
1. Use your browser or cURL to make a `GET` request to [http://localhost:3000](http://localhost:3000)
1. Halt the port-forward process with `ctrl + c` 
1. Look at the helper-app logs with the command 

        kubectl logs <sidecar-demo-pod-name> -c helper-app

1. Pat yourself on the back for seeing how the sidecar pattern is implemented in Kubernetes! 
