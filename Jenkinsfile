pipeline {
  agent any
  
  stages {
    stage('maven install') {
      steps {
        withMaven(maven: 'Maven') {
          sh 'mvn clean install'
        }
      }
    }
  }
}
