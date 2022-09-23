# jaeger

```
k3d cluster create \
    --config ../k3d-example.yaml

kubectl apply \
    --filename https://github.com/cert-manager/cert-manager/releases/download/v1.8.2/cert-manager.yaml

kubectl apply \
    --kustomize ./jaeger-operator

kubectl create \
    --kustomize ../prometheus/prometheus-operator

kubectl apply \
    --kustomize ../prometheus

kubectl apply \
    --kustomize ./
```

```
docker build ./app-example/orders \
    --tag app-example-orders

docker tag app-example-orders k3d-example-registry:5000/app-example-orders

docker push k3d-example-registry:5000/app-example-orders
```

```
docker build ./app-example/items \
    --tag app-example-items

docker tag app-example-items k3d-example-registry:5000/app-example-items

docker push k3d-example-registry:5000/app-example-items
```

```
kubectl apply \
    --kustomize ../mongodb

kubectl apply \
    --kustomize ./app-example
```

## References

* [Jaeger Operator](https://www.jaegertracing.io/docs/1.37/operator/)
