# Dockerized service

The goal of this project is to dockerize a simple Node.js service and deploy it to a remote server using GitHub Actions. You will also practice secrets management.

## Requirements

There are 4 parts to this project:

Step 1 — Creating a Node.js service

Step 2 — Dockerizing the Node.js service

Step 3 — Setup a remote Linux Server

Step 4 — Deploying the Dockerized Node.js service to a remote server using GitHub Actions

### Part 1: Creating a Node.js service

You are required to create a simple Node.js service with two routes:

- / route - which simply returns Hello, world!
- /secret route - protected by Basic Auth
- Project should have a .env file with the following variables:
- SECRET_MESSAGE - the secret message that the /secret route should return
- USERNAME - the username for the Basic Auth
- PASSWORD - the password for the Basic Auth

When user visits the /secret route, they should be prompted for the username and password. If the username and password are correct, they should be able to see the secret message. If the username and password are incorrect, they should see an error message.

#### Process

1. Navigate to the DockerizedService directory and initialize ```npm init -y```
2. install dependencies ```npm install express dotenv express-basic-auth```
3. Create index.js
4. Create .env
5. Add Start Script to package.json
6. Start the server ```npm start```
7. Test routes ```curl http://localhost:3002/```
8. Expected output: ```Hello, world!```

### Part 2: Dockerizing the Node.js service

Create a Dockerfile for the Node.js service that will build a Docker image. You should be able to run the Docker image locally. Make sure that the .env file is not included in the Docker image.

#### Action

- Build image ```docker build -t nodejs-service .```
- Run container: ```docker run -d -p 3002:3002 --env-file .env --name nodejs-app nodejs-service```
- Test routes: ```curl http://localhost:3002/```
- View logs: ```docker logs nodejs-app```
- Stop container: ```docker stop nodejs-app```
- Remove: ```docker rm nodejs-app```

### Part 3: Setup a remote Linux Server

Setup a remote Linux server on either DigitalOcean, AWS, or any other provider. You can either set it up manually by using SSH or use a mix of Ansible or Terraform from previous projects.

### Part 4: Deploy the Dockerized Node.js service

Create a workflow that will build a Docker image and push it to the container registry. The workflow should then deploy the Docker image to the remote server. Feel free to explore secrets management in GitHub Actions. 