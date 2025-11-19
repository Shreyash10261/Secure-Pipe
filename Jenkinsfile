pipeline {
    agent any

    stages {
        
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Shreyash10261/Secure-Pipe.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('SonarQube Scan') {
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh 'sonar-scanner'
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t securepipe-app .'
            }
        }
    }
}
