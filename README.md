# Test Task

This is my solution for modeling a _single user credit/debit transaction system, without allowing concurrent transactions for the user (to avoid race conditions)_.

* Time invested in first version: ~3.5 hours.
* Time invested in revision: ~1.5 hour.

## :rocket: Run Project 

```
docker-compose up --build -d
```
This will build and run the docker containers with all we need: Node HTTP Server, MySQL Database and react-app development server.

Make sure you have __ports 3000 & 3001 open and available__, they are mapped to respective containers' ports to facilitate testing. This is not necessary if you don't want to interact with the server nor the web through _localhost_, and you can just remove port mappings from docker configuration.

### :gear: Project configuration

You can tweak project configuration:

* `server/config/.env`: Node HTTP Server environment variables.
* `docker-compose.yml`: database configuration, volumes, port mapping, etc.

### :clipboard: Test Suite

#### :blue_book: Backend

You can run the current test suites both inside the server container or from the `server` project folder, in the last case, please remember to install all dependencies first with `npm install`.

You can run backend tests in its container: 
```
docker-compose exec server sh
npm run test
```

Or from project folder:
```
cd server
npm install
npm run test
```

#### :green_book: Frontend

Same as before, you can run test suites both inside the ui container or from the `ui` project folder.

From container:
```
docker-compose exec ui sh
npm run test
```

From project folder:
```
cd ui
npm install
npm run test
```

## :construction: Infrastructure

Everything is running in the following docker containers orchested by docker-compose:

1. Web Service (Node HTTP Server): `http://localhost:3001`
2. Database (MySQL)
3. Frontend (React.js): `http://localhost:3000`

## :notebook: Available Requests

[Postman Collection here](https://documenter.getpostman.com/view/7772202/Szmk1G1e?version=latest)!

## :open_file_folder: Core Dependencies

* [express](https://expressjs.com): lightweight web framework for Node.js.
* [cors](https://www.npmjs.com/package/cors): express middleware to enable CORS.
* [mysql2](https://www.npmjs.com/package/mysql2): MySQL driver.
* [sequelize](https://www.npmjs.com/package/sequelize): ORM.
