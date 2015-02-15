Docker Notes
============

requires official postgres image from [https://registry.hub.docker.com/_/postgres](https://registry.hub.docker.com/_/postgres/)

````
docker pull postgres
````

## Single Connection

### Expose port 9432

````
docker run -p 9432:5432 --name pg-lb-master -e POSTGRES_PASSWORD=puglub -d postgres
````