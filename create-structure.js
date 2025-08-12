// Project structure for User Service in Node.js with MongoDB

// 1. Create the main project directory
// 2. Inside the directory, create the following structure:

const fs = require('fs');
const path = require('path');

const createProjectStructure = () => {
    const structure = {
        'user-service': {
            'src': {
                'controllers': {}, // Contains the logic for handling requests
                'models': {}, // Defines the data models (MongoDB schemas)
                'routes': {}, // Defines the API routes
                'services': {}, // Contains business logic
                'middlewares': {}, // Contains middleware functions
                'config': {}, // Configuration files (e.g., database connection)
                'utils': {} // Utility functions
            },
            'tests': {}, // Test files for the service
            'package.json': {}, // NPM dependencies and scripts
            'server.js': {} // Entry point for the application
        }
    };

    const createDir = (dirPath) => {
        fs.mkdirSync(dirPath, { recursive: true });
    };

    const buildStructure = (obj, basePath) => {
        for (const key in obj) {
            const newPath = path.join(basePath, key);
            createDir(newPath);
            buildStructure(obj[key], newPath);
        }
    };

    buildStructure(structure, __dirname);
    console.log('Project structure created successfully!');
};

createProjectStructure();

// Run this script to create the project structure.