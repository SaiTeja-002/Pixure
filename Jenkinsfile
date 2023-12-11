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
            steps {
                dir('backend') {
                    sh 'npm test' 
                }
                dir('frontend') {
                    sh 'npm test'
                }
            }
        }
        
    }
}
