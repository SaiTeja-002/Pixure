pipeline {
    environment {
        registry = "SaiTeja-002/Pixure"
        dockerImage = ""
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
    }
}
