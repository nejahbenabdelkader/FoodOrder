pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub_Id')
	}
    stages {

		stage('Build') {

			steps {
				sh 'docker build -t "react_app" . '
				sh 'docker login'
			}
		}

		

		
	}

	post {
		always {
			sh 'docker logout'
		}
	}



}