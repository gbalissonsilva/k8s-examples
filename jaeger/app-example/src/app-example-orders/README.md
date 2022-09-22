# app-example-orders

## Build and Run

```
docker build . --tag app-example-orders

docker run --rm \
    --env 'PORT=3000' \
    --env 'OTEL_EXPORTER_OTLP_ENDPOINT=http://jaeger:4318' \
    --env 'OTEL_SERVICE_NAME=app-example-orders' \
    app-example-orders
```

## Push

```
docker tag app-example-orders k3d-example-registry:5000/app-example-orders

docker push k3d-example-registry:5000/app-example-orders
```

## Development

```
docker-compose run --rm app-example-orders install

docker-compose up --detach
```
