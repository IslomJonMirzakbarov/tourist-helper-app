pipeline {
  agent any
  
  stages {
    stage('maven install') {
      steps {
        withMaven(globalMavenSettingsConfig: 'null', jdk: 'null', maven: 'Maven', mavenSettingsConfig: 'null', traceability: false) {
          sh 'mvn clean install'
        }
      }
    }
  }
}
