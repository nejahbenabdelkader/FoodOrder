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
22
            steps { 
23
                script { 
24
                    docker.withRegistry( '', registryCredential ) { 
25
                        dockerImage.push() 
26
                    }
27
                } 
28
            }
29
        } 	
	}
	post {
		always {
			sh 'docker logout'
		}
	}
}