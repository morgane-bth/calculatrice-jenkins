pipeline {
    agent any
    stages {
      stage ('Check for existence of index.html') {
        steps {
            script {
                if (fileExists('index.html')) {
                    echo "File index.html found!"
                }
            }
        }
      }

      stage ('Cloner le code'){
        steps {
          git branch: 'main', url: 'https://github.com/morgane-bth/calculatrice-jenkins'
        }
      }

      stage ('Construire l\'image Docker'){
        script {
          bat 'docker build -t image-calcul .'
        }
    }

    stage ('Déployer en Test'){
      bat 'docker run -d -p 4001:4000 -e MESSAGE="Environnement de Test" --name image-calcul-test image-calcul'
    }

    stage ('Exécution des Tests Selenium') {
      steps {
              script {
                  if (fileExists('test_calculatrice.js')) {
                      echo "Fichier test_calculatrice.js trouvé!"
                      sh "npx http-server &"
                      sh "node test_calculatrice.js"
                  }
              }
          }
    }
  }
}