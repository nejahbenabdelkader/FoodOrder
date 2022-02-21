pipeline {
    agent any 
    environment {
		registryCredential = 'dockerHub_Id' 
		registry = "Nejahbenabdelkader/test_react" 
	}
    stages {
		stage('Cloning our Git') { 
            steps { 
                git 'https://github.com/nejahbenabdelkader/test_react.git' 
            }
        } 
		stage('Build') {
			steps {
				 script { 
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                }
			}
		}
		stage('Deploy our image') { 
            steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
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