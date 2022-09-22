# jaeger

```
k3d cluster create \
    --config ../k3d-example.yaml

kubectl apply \
    --filename https://github.com/cert-manager/cert-manager/releases/download/v1.8.2/cert-manager.yaml

kubectl apply \
    --kustomize ./jaeger-operator

kubectl apply \
    --kustomize ../mongodb

kubectl apply \
    --kustomize ./
```

```
docker build ./app-example/src/orders \
    --tag app-example-orders

docker tag app-example-orders k3d-example-registry:5000/app-example-orders

docker push k3d-example-registry:5000/app-example-orders

kubectl apply \
    --kustomize ./app-example
```

## References

* [Jaeger Operator](https://www.jaegertracing.io/docs/1.37/operator/)
