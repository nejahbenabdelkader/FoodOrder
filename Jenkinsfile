pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub-id')
	}
    stages {
        stage("test") {
            steps {
            sh "docker --version"
            sh "echo $DOCKERHUB_CREDENTIALS_PSW "
        }
        }
        
    }


}