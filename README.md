# Server Node, Express, Graphql, Typescript, Prisma on Github and Docker

This is an example of a NodeJS server using express, [graphql](https://graphql.org), typescript and [prisma](https://www.prisma.io).

The code was stored on github, To run the server locally, I recommend using a database instance in docker with help of a [bitnami](https://github.com/bitnami/bitnami-docker-postgresql) container.

### Install

```
npm i
```

## Database

To create the instance of the database download and install docker, then run:

```docker
docker run --name postgresql -e POSTGRESQL_USERNAME=admin -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=airbank -p 5432:5432 bitnami/postgresql:latest
```

### Environment Configuration

Copy the .env file based on the .env.template with the environment variables.

```.env
#Environment
NODE_ENV=development
PORT=4005

#Database
DATABASE_URL="postgresql://admin:docker@localhost:5432/airbank?schema=public"
SHADOW_DATABASE_URL="postgresql://admin:docker@localhost:5432/airbank?schema=public"
```

Model the database.

```
npm run migrate
```

Populate the database

```
npm run seed
```

### Local development

To develop locally:

```
npm run dev
```

### Deployment

Just make a direct commit to the main branch.

```
git add folder/file
git commit -m "Deploy changes"
git push origin main
```
