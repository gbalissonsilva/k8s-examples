# jaeger

```
k3d cluster create \
    --config ../k3d-example.yaml

kubectl apply \
    --filename https://github.com/cert-manager/cert-manager/releases/download/v1.8.2/cert-manager.yaml

kubectl apply \
    --kustomize ./jaeger-operator

kubectl apply \
    --kustomize ./
```

## References

* [Jaeger Operator](https://www.jaegertracing.io/docs/1.37/operator/)
