# effectus-dashboard
Main web UI - Dashboard

## Angular (7)
front end dashboard for effectus 

## Verticle
Vert.x java server to host the dashbpard

## Server
The docker packaging of the project 

# Build
> ./gradlew clean build

# Development
to start development environment you need the EffeCTus backend services like Ignite, GraphQL and the loader to load some data to the database.

To start the development env use the docker-compose-dev.yml

> docker-compose -f docker-compose-dev.yml

then cd to the dashboard angular folder
> cd effectus-dashboard-angular

then start the angular using the command (webpack)
> npm start 

this will include a proxy to connect to the backend on localost