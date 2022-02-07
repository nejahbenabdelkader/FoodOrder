pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub_Id')
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