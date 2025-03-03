pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '7a397d07-6539-4b5a-a708-a282453345e4'
        NETLIFY_AUTH_TOKEN = credentials('netlify_token')

    }

    stages {
        stage('Build') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
                
            }
            steps {
                sh'''
                    ls -la
                    node --version
                    npm --version
                    npm ci --legacy-peer-deps
                    npm run build 
                    ls -la
                '''

            }
        }
        
        stage('Test') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
                
            }
            steps{
                sh '''
                    test -f build/index.html
                    npm install --save-dev @testing-library/react
                    npm test
                '''

            }

        }
        stage('Deploy') {
            agent{
                docker{
                    image 'node:18-alpine'
                    reuseNode true
                }
                
            }
            steps {
                sh'''
                    npm install netlify-cli --legacy-peer-deps
                    node_modules/.bin/netlify --version
                    echo "Deploying to production.Site ID:$NETLIFY_SITE_ID"
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod
                '''

            }
        }

    }

    post {
        always{
            junit 'test-results/junit.xml'

        }

    }
}
