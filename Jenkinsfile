pipeline {
    environment {
        SERVER_IMAGE = 'laxmisreenivas/pixture-server'
        CLIENT_IMAGE = 'laxmisreenivas/pixture-client'
        serverImage = ""
        clientImage = ""
    }
    agent any
    stages {
        stage('Stage 1: Git Clone') {
            steps {
                git branch: 'main',
                url: 'https://github.com/SaiTeja-002/Pixure.git'
            }
        }
        stage('Stage 2: Testing') {
            environment {
                DB_URL = "mongodb+srv://LaxmiGenius:HdvoWTWpZ6QaKewh@cluster0.zehgzrl.mongodb.net/?retryWrites=true&w=majority"
                PORT = 5000
                SECRET_KEY = "shhh..."
            }
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
        stage('Stage 3: Docker Build') {
            steps {
                dir('backend') {
                    script{
                        serverImage = docker.build SERVER_IMAGE  + ":latest"
                    }
                }
                dir('frontend') {
                    script{
                        clientImage = docker.build CLIENT_IMAGE + ":latest"
                    }
                }
            }
        }
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
        stage('Stage 5: Ansible Deployment'){
            steps{
                ansiblePlaybook colorized: true, 
                disableHostKeyChecking: true, 
                installation: 'Ansible', 
                inventory: 'inventory', 
                playbook: 'playbook.yml'
            }
        }
    }
}
