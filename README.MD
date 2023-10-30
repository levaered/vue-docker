# Vue.js Vite and Node.js Web App with Docker Compose

This is a Docker Compose configuration for building and running a Vue.js Vite frontend and a Node.js backend web application.

## Prerequisites

Before you begin, make sure you have Docker and Docker Compose installed on your system.

## Installation and Usage

1. Clone this repository

2. Install Modules

    cd frontend
    npm i

3. Build the Docker images:

    docker-compose build

4. Start the containers:

    docker-compose up -d

The frontend will be available at http://localhost:3000, and the backend will be available at http://localhost:3001.

## Open Database

1. To connect to the database you need to go to this port http://localhost:8080

2. You will be redirected to the database management environment given by ADMINER. 

3. You need to log in using these credentianals:
    System = MySQL
    Server = msql
    Username = admin
    Password = 1234
    Database = vueDockerDatabase

4. You can add/remove fields using the interface 

## Stop Database

    docker-compose stop

When you key the image again the data in the database will be saved
