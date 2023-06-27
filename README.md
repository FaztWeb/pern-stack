# PERN Stack

The PERN Stack is an acronym for Postgres, Express, React, Node. It's a set of tools to create a complete web application.

To understand this project, I recommend that you could know these tolls:

* Postgres
* Express
* React
* Node

And this other technologies and libraries That I Use in this project:

* Material UI
* Docker

### Installation

This project consists in a *Web Frontend Application* and a *Web Backend Application*.

First, clone the repo:

```bash
git clone https://github.com/FaztWeb/pern-stack
```

### Development

In order to execute the project in development, you can use docker-compose to create the postgresql database and the pgadmin client:

to run the database you can use docker:

```
docker compose up -d
```

this command will create the database and the pgadmin client in the following ports:

- Database: localhost:5432
- Pgadmin: localhost:8080

Then to run the frontend:

```
cd client
npm run dev
```
