# opentelemetry

```
k3d cluster create \
    --config ../k3d-example.yaml

kubectl apply \
    --filename https://github.com/cert-manager/cert-manager/releases/download/v1.8.2/cert-manager.yaml
```

## References

* [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/getting-started/)
* [OpenTelemetry Operator for Kubernetes](https://opentelemetry.io/docs/k8s-operator/)
* [Instrument Nginx with OpenTelemetry](https://opentelemetry.io/blog/2022/instrument-nginx/)
* [Nginx Instrumentation](https://github.com/open-telemetry/opentelemetry-cpp-contrib/tree/main/instrumentation/nginx)
