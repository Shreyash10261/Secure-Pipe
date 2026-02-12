pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'node18'
        SONAR_TOKEN = credentials('sonar-token')
    }

    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh """
                    export PATH=$NODEJS_HOME/bin:$PATH
                    npm install
                """
            }
        }

        stage('SonarQube Scan') {
            environment {
                SCANNER_HOME = tool 'sonar-scanner'
            }
            steps {
                withSonarQubeEnv('sonarqube') {
                    sh """
                       ${SCANNER_HOME}/bin/sonar-scanner \
                       -Dsonar.projectKey=SecurePipe \
                       -Dsonar.sources=. \
                       -Dsonar.host.url=http://sonarqube:9000 \
                       -Dsonar.login=${SONAR_TOKEN}
                    """
                }
            }
        }

        stage('Docker Build') {
            steps {
                sh """
                    docker build -t securepipe-app .
                """
            }
        }
    }
}

