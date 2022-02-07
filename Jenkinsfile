pipeline {
    agent any 
    environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerHub_Id')
	}
    stages {

		stage('Build') {

			steps {
				sh 'docker build -t nejahbenabdelkader/test_react:2.0 .'
			}
		}

		stage('Login') {

			steps {
				sh ' docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push nejahbenabdelkader/test_react:2.0'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}



}