@Library("Shared") _
pipeline {
    agent { label 'aditya' }

    stages {
        stage('Clone') {
            steps {
                script{
                    Clone("https://github.com/nandkhile1111/html-cicd-project.git" ,"master")
                }
            }
        }
        
        stage('Build'){
            steps {
                script{
                    build("html-app","latest","adityanandkhile")
                }
            }
        }
        
        stage('Docker Login and Build') {
            steps {
             script{
                    docker_push("html-app","latest" ,"adityanandkhile")
                }
            }
        }
      
        
        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d --build'
            }
        }
    }
}
