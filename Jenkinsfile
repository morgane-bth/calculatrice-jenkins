pipeline {
  agent any
  stages {
    stage('Build'){
      steps {
        echo 'Building'
        bat 'node app.js'
      }
    }
    stage ('Check for existence of index.html') {
      steps {
          script {
              if (fileExists('index.html')) {
                  echo "File index.html found!"
              }
          }
      }
    }
  }
}