Steps to setup and run :

step 1 : build your docker file and prvide the container name

```
docker build -t nodeapp030 .
```

step 2 : provide the tag name for your container and provide username (ex: docker tag container_name username/container_name:tag_name)

```
docker tag nodeapp030 ashvegeta/nodeapp030:nodeapp030
```

step 3: login to your dockerHub account and provide credentials

```
docker login
```

step 4: push your local docker image to your dockerHub repo

```
docker push ashvegeta/nodeapp030:nodeapp030
```



