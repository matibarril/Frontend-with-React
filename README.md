# Frontend-with-React
Local Gin Productor

Pasos desde el Inicio del Proyecto:

1- Git clone an empty repo to start & then git init
2- npm init // To initialize the package.json, and the configuration of Author, license, repository, etc. The instruction npm init -y load the default configuration
3- We alredy have NodeJs installed
4- Install React  npm i react react-dom -S  // -S it´s to install as a production dependencie
5- Create the structure of the project and folders
    src (Folder)
        Componentes (Subfolder of src)
            App.jsx
        index.js (Inside src) // Será el que expondrá el sitio.
    Public (Same level than src)
            index.html
        
    node_modules (this folder was created in step number 3 )


6- Configuration to use Babel and Webpack, we execute the following installations:
    A) npm install @babel/core @babel/preset-env @babel/preset-react // Babel nucleus, next one for JS in every browser and the last one for React in any browser.
    B) npm install webpack webpack-cli webpack-dev-server // Proyect Bundler and to initialize the server in local mode.
    C) npm install babel-loader html-loader html-webpack-plugin // Sirven para optimizar o extrar html de los archivos 

    Instead of this configuration, item 6, we could use npx create-react-app test  // Thats create the test folder and installing react, react-dom, and react-scripts with cra-template...and the folder node_modules.Also create a package.json inside test folder.
    The difference is that doing the A), B), C), steps we can have our own personalize configuration.

7- First lines in index.js, Import React, reactDom and ReactDOM.render, this one to put de components in the HTML. Then in App.jsx we can create a stateless component as an example.

8- Create the .gitiginore file and add node_modules to it. All the files that start with a . are hidden files.
9- Create a file .babelrc and insert the presets of babel on it. Here we add all the configuration to use de presets that we add.



