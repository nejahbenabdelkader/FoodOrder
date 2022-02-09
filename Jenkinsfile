pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub_Id')
	}
    stages {

		stage('Build') {

			steps {
				sh 'docker build -t "nejahbenabdelkader/react_app" . '
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		

		
	}

	post {
		always {
			sh 'docker logout'
		}
	}



}