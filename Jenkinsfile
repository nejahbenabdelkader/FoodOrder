pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub_Id')
	}
    stages {

		stage('Build') {

			steps {
				sh 'sudo docker run hello-world'
			}
		}

		

		
	}

	post {
		always {
			sh 'docker logout'
		}
	}



}