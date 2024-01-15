# Project Overview

Pixure is an image sharing website where users can share, explore, and download various images. It is a community-driven and community-centric application, shaped by the active contribution and engagement of the users. It evolves and grows through collective effort.

## Features

- **Authentication:** Users can either login to their existing account or create a new account.
- **Upload Image:** Users can publish new images with titles and hashtags.
- **Image Management:** Users can also update/delete images uploaded by them.
- **Download Image:** Users can also download any image on the website.
- **Search:** Users can also search for images based on title or hashtags.
- **Hashtags:** Users can also explore various images of a specific type.
- **Follow/Unfollow:** Users can also follow their favorite content creators or unfollow them.
- **Profile Management:** Users can edit their profile information such as profile picture, Username, and Bio.
- **Profile Exploration:** Users can explore other users' profiles by clicking on usernames or user-images within uploaded images or by using the search bar in the header.

## TechStack

- **Front-End:** React JS
- **Back-End:** Express JS, Node JS
- **Database:** MongoDB
- **Version Control:** Git
- **Reverse Proxy Tool:** ngrok
- **CI/CD:** Jenkins
- **Testing:** Jest, SuperTest
- **Containerization:** Docker
- **Deployment:** Ansible
- **Continuous Monitoring:** ELK Stack
- **Visualizations:** Kibana

## Frontend

Frontend code is organized into various directories as per industry standards. Below is the image of the directory structure.

### Directories

- **__tests__:** Consists of various test cases to rigorously test the working and performance of various components used in the application.
- **Actions:** They serve as a bridge between Frontend components and the reducers.
- **API:** The API functions within this folder handle the responsibility of making HTTP requests to the backend server.
- **Redux:** The Reducers in the Redux folder specify how the application's state should be updated or changed.
- **Components:** This folder consists of reusable UI elements.
- **Pages:** This folder consists of various JSX files, such as HomePage, ProfilePage, etc.
- **Styles:** This folder consists of all the CSS files used to style the pages and components of the application.
- **DockerFile:** Used to set up a Docker Image based on the instructions written in the file.

### Login Flow [Example Flow]

The login flow in our application involves taking user input, triggering the login action, making an API request to authenticate the user, handling the API response, and redirecting the user based on the success or failure of the login process.

#### Detailed Flow:

1. **LoginPage.jsx:** This page renders a react component, a login form, and takes in the user input for username and password.
2. **authActions.js:** The login function in this action file is an asynchronous function responsible for handling the login process.
3. **authAPI.js:** The login function in the authAPI is used to send an API call to the backend using axios.post.
4. **Backend Processing:** The backend server processes the login request, validates the provided credentials, and responds with a status code and data upon successful login.
5. **Handling API Response:** If the login is successful, the session storage is updated with the received cookie, and the user is redirected to the HomePage. If there's an error, it logs the error message to the console.

### UI

- **Signup Page**
- **Login Page**
- **Home Page**
- **Upload Image**
- **User Profile**
- **Followers**
- **Following**
- **Hashtag Search**
- **Title Search**
- **Username Search**
- **Update Image**

## Backend

Backend code is organized into various directories as per industry standards. Below is the image of the directory structure.

### Components

- **Controllers:** Functions that interact with the database directly.
- **Middleware:** Used to authenticate a user’s cookie and extract userID from it.
- **Models:** Database schema objects through which controllers interact with the database.
- **Routes:** Responsible for mapping client requests to the corresponding controller functions.

### API Documentation

All the methods, aside from the auth method, expect a cookie to be a query parameter. Not sending a cookie results in an authentication error. This is handled by the middleware function validCookie.

| Method | URL                 | Body                  | Response/Action         |
| ------ | ------------------- | --------------------- | ------------------------ |
| GET    | /user/info          | -                     | User name, pfp & Bio     |
| GET    | /user/social        | -                     | User Followers & Following |
| GET    | /user/posts         | -                     | User Posts               |
| GET    | /user/profile/:name | -                     | Searches User Profiles By Name |
| GET    | /tag/search         | tag                   | Searches Posts Based on Tag |
| GET    | /post/search/:title | -                     | Searches Posts Based on Title |
| GET    | /user/feed          | -                     | User Feed                |
| GET    | /auth/login         | name, password        | Returns Cookie           |
| PATCH  | /user/update        | name/photo/bio        | Updates User Info        |
| PATCH  | /user/follow        | name                  | Follows User             |
| PATCH  | /user/unfollow      | name                  | Unfollows User           |
| PATCH  | /user/post/:index   | title                 | Updates Specified Post   |
| POST   | /post/add           | photo, title, tags    | Adds Post                |
| POST   | /auth/sign          | name, password        | Adds User to Db          |
| DELETE | /user/post/:index   | -                     | Deletes Specified Post   |

## Database Schema

Database has 3 collections viz. Users, Posts, Tags. Posts are separated from the user because of the limitation of document size in MongoDB.

#### User Schema

- **name:** Name of The User
- **mail:** Email of The User
- **photo:** Profile Photo
- **bio:** Bio of the Account
- **password:** Hashed Password Using Bcrypt
- **followers:** References To Account’s Followers in Users Collection
- **following:** References to Account’s Following in Users Collection
- **posts:** References To Users Posts in Posts Collection

#### Post Schema

- **image:** Base64 String of the posted image
- **owner:** Reference to the owner of the Post in Users Collection
- **title:** Title of The Post
- **tags:** List of Tags of The Post

#### Tag Schema

- **name:** Hashtag String
- **images:** References to Posts in Posts Collection

## DevOps

DevOps represents a set of practices and cultural philosophies aimed at developing collaboration and synergy between the software development team (Devs) and the IT operations team (Ops). Its primary goal is to streamline and automate the software development lifecycle, facilitating rapid and continuous delivery of high-quality software.

### Jenkins

Jenkins is used to automate the CI/CD pipeline. It supports various plugins and facilitates integration with various tools and frameworks. It manages building, testing, and deployment processes, providing a clear insight and results of each step.

#### Folder Structure

PORT, DB_URL, SECRET_KEY are environment variables needed while testing and deployment. So, they are defined as environment variables in Jenkins. DB_URL & SECRET_KEY are sensitive info, one shouldn’t directly paste them into the Jenkinsfile. They are saved as “Secret Text” credentials on the Jenkins server.

As for the build triggers, they will be explained later on.

### Git

Git is a version control tool. Its decentralized structure allows developers to work on projects locally and collaboratively. It maintains a detailed history of changes, offering branching and merging capabilities that facilitate parallel development without conflicts.

In the context of the pipeline, Jenkins server clones the repo with the fresh code. When a new change is committed to the main branch, GitHub automatically notifies the Jenkins server. To expose the Jenkins server outside, a reverse-proxy tool called Ngrok is used.

```
stage('Stage 1: Git Clone') {
    steps {
        git branch: 'main',
        url: 'https://github.com/SaiTeja-002/Pixure.git'
    }
}
```

### Jest

Jest is a JavaScript testing framework. It has various features including snapshot testing that allows for the comparison of rendered outputs, ensuring UI consistency and preventing unintended changes.

On the backend, Supertest is used as the Node.js testing library. It is used for the testing of HTTP servers. Together, Jest in the frontend and Supertest in the backend form a robust testing toolkit.

```
stage('Stage 2: Testing') {
    steps {
        dir('backend') {
            sh 'npm install'
            sh 'npm test'
        }
        dir('frontend') {
            sh 'npm install'
            sh 'npm test'
        }
    }
}
```

### Docker

Docker simplifies the process of packaging the software and deploying it through containerization, encapsulating applications and their dependencies into portable and isolated containers.
These containers offer consistent environments across development, testing, and production, ensuring that applications run consistently regardless of the environment. Docker's efficiency lies in its lightweight nature and the ability to package an entire application with all its dependencies and make it portable and easily transferable across different infrastructures.

#### Docker Pipeline Stages

1. **Building:** Take all the necessary files and dependencies and create an image.
2. **Pushing:** The freshly created images are pushed onto Docker Hub. They will be pulled back and run during the deployment stage.

```
stage('Stage 3: Docker Build') {
  steps {
      dir('backend') {
          script{
              serverImage = docker.build SERVER_IMAGE + ":latest"
          }
      }
      dir('frontend') {
          script{
              clientImage = docker.build CLIENT_IMAGE + ":latest"
          }
      }
  }
}
```
In stage 4, Jenkins will push the created images onto Docker Hub using the credentials given to it. Looking at this stage, the reason for declaring serverImage and clientImage should be clear. They are declared so as to be used by this stage.

```
stage('Stage 4: Docker Push'){
    steps{
        script{
            docker.withRegistry( '', 'DockerHubCred') {
                serverImage.push()
                clientImage.push()
            }
        }
    }
}
```

### Ansible

Ansible uses an agentless architecture and declarative language, enabling easy automation of infrastructure tasks. It offers various modules to manage configurations, deploy applications, and orchestrate complex workflows. Ansible ensures consistent states across different infrastructures, simplifying management and scaling while reducing human error.

In the context of the pipeline, we use Ansible to deploy images to the remote host machine. This is the last stage of the pipeline. Explanation of Parameters:

- **Colorized:** true - Enables colorized output when Ansible is run.
- **credentialsId:** 'localhost' - The ID parameter of credentials which Ansible needs to connect to the target host.
- **disableHostKeyChecking:** true - With this set to true, Ansible doesn’t perform host key checking (checking if the connected host is the intended host). This shouldn’t be an issue in our case since we are only deploying to our localhost.
- **installation:** 'Ansible' - This is the name with which Ansible is installed and configured in Jenkins.
- **inventory:** 'inventory' - Location of the inventory file, which has a list of target hosts.
- **playbook:** 'playbook.yml' - Location of the playbook to run; the playbook has a series of tasks to run on target hosts.
- **extraVars:** Extra variables passed to Ansible; in our case, we are passing DB_URL, PORT & SECRET_KEY required during deployment.

```
stage('Stage 5: Ansible Deployment'){
    steps{
        ansiblePlaybook colorized: true, 
        credentialsId: 'localhost',
        disableHostKeyChecking: true, 
        installation: 'Ansible', 
        inventory: 'inventory', 
        playbook: 'playbook.yml',     
        extraVars: [
            DB_URL: DB_URL,
            PORT: PORT,
            SECRET_KEY: SECRET_KEY
        ]
    }
}
```

The following tasks are executed are in above shown playbook : 
- First, we copy the docker-comose.yml from the host machine to the remote host. Note, here src refers to docker-compose file location in the host whereas dest-> denotes where to place the docker-compose file.
- After this, we pull the necessary images using docker-compose pull.
- Now, we run the docker containers. -d flag means detached mode, with this enabled, containers are run as background processes  &  - - build tells docker-compose to rebuild if necessary.

### Docker Compose
Docker Compose configuration defines a multi-service application, in this case - frontend and backend components. It orchestrates the containerized deployment by specifying Docker images (Frontend - laxmisreenivas/pixture-client:latest, Backend- laxmisreenivas/pixture-server:latest), each exposing specific ports (3000 for frontend and 5000 for backend) to the host machine. Additionally, the backend service utilizes environment variables (DB_URL, PORT, SECRET_KEY) for dynamic configuration, allowing flexible customization of database URLs, ports, and secret keys during runtime. This configuration streamlines the deployment of the application's components, enabling seamless interaction between the frontend and backend containers while providing a means for environment-specific configuration through external variables.

```
version: '3.5'
services:
  frontend:
    image: laxmisreenivas/pixture-client:latest
    ports:
      - '3000:3000'
  backend:
    image: laxmisreenivas/pixture-server:latest
    ports:
      - '5000:5000'
    environment:
      - DB_URL=${DB_URL}
      - PORT=${PORT}
      - SECRET_KEY=${SECRET_KEY}
```
- **Version:** Syntax Version of the DockerCompose file
- **Services:** Defines individual services (containers) within the application. Each service represents a component (frontend and backend).
- **Image:** Specifies the Docker image to be used for each service, fetched from Docker Hub (laxmisreenivas/pixture-client:latest and laxmisreenivas/pixture-server:latest).
- **Ports:** Maps ports from the host machine to the containers. In the Frontend, port 3000 on the host is forwarded to the frontend container's port 3000.
- **Environment Variables:** Sets environment variables required by the backend service (DB_URL, PORT, SECRET_KEY).

### ELK Stack
#### Logging
- Logging in the backend is done by using “winston-logger”. All the logs are stored inside the logs folder inside the backend folder.
- Logs log info when an api is called. If the api call is operation intensive, the logs also contain info about the processing time.
- Apart from this logs also contain info on popular hashtag searches, title searches and profile views.
- API Call Log Format - {timestamp, level info, message}
- Time intensive API Call Log Format - {timestamp, level info, message, processing time}
Error Log Format - {timestamp ,level info, error location, error}
Search Data Log Format : {timestamp, level info, message, time, search info}

### Kibana
Kibana is a powerful visualization tool that lets us visualize, and understand vast amounts of log data and other time-series data. With Kibana, we can create various visualizations such as line charts, pie graphs, heat maps, etc. This enables easy data interpretation and analysis.

### Visualizations







