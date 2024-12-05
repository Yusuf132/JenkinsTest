pipeline {
    agent any

    environment {
        // Specify the Node.js version and any other necessary environment variables
        NODE_HOME = '/usr/local/node'  // Path to Node.js if it's not automatically available
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install the necessary npm dependencies
                 dir("JenkinsTest/") {   // Here we are going inside the directory which got created using git clone
                     sh 'npm install'
                }
            }
        }

        stage('Run Linting') {
            steps {
                // Run linting (if you have ESLint configured in your project)
                script {
                    sh 'npm run lint'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run Jest tests
                script {
                    sh 'npm test -- --coverage --ci --watchAll=false'
                }
            }
        }

        stage('Build') {
            steps {
                // Build the React application for production
                script {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy (Optional)') {
            steps {
                // Deploy the build (this step can be skipped or customized based on your setup)
                script {
                    echo 'Deploying application...'
                    // Add your deployment steps here, such as using Docker or any cloud service
                    // Example:
                    // sh 'docker build -t my-react-app .'
                    // sh 'docker run -d -p 80:80 my-react-app'
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace after the build completes
            cleanWs()
        }

        success {
            // Notify when the build succeeds (optional)
            echo 'Build, tests, and linting were successful!'
        }

        failure {
            // Notify when the build fails (optional)
            echo 'Build, tests, or linting failed!'
        }
    }
}