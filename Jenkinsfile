pipeline {
    agent any 
    environment {
		registryCredential = 'dockerHub_Id' 
		registry = "Nejahbenabdelkader/test_react" 
	}
    stages {

		stage('Build') {

			steps {
				dockerImage = docker.build registry + ":$BUILD_NUMBER" 
			}
		}
		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
		stage('Push') {

			steps {
				 docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
			}
			}
		}

		

		
	}

	post {
		always {
			sh 'docker logout'
		}
	}



}