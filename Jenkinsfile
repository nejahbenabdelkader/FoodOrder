pipeline {
    agent any 
    environment {
		registryCredential = 'dockerHub_Id' 
		registry = "nejahbenabdelkader/test_react:1.0" 
	}
    stages {
		
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