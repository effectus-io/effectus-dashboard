# effectus-dashboard
Main web UI - Dashboard

## Angular (7)
front end dashboard for effectus 

## Verticle
Vert.x java server to host the dashbpard

## Server
The docker packaging of the project 

# Build
```
./gradlew clean build
```

# Development
to start development environment you need the EffeCTus backend services like Ignite, GraphQL and the loader to load some data to the database.

To start the required services run the following command:
```
docker-compose -f docker-compose-dev.yml up -d
```

Then navigate into the angular folder, install node packages and start webpack:
```
cd effectus-dashboard-angular
npm install
npm start 
```

this will include a proxy to connect to the backend on localhost
