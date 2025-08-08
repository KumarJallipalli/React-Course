/**

Pre-Requisites

    - Editor → VS-Code
    - NodeJS



NOTE:
----
        Reatc has 2 official websites for documentations
            → Old website (or) Legacy one → https://legacy.reactjs.org/
            → New Website [ Use this ]→ https://react.dev/



NPM (vs) NPX

    - npm → Deafult package manager for NodeJS
        - NPM is a package management that is used to install, uninstall, and update Javascript packages on your workstation,
        - If we need to execute a package using NPM,
            1. we first need to install it → `npm install package-name`
            2. and then we can execute it → `npm run package-name` [ need to add/enlist it in script Object to run ]
    - npx [ Node Package eXecute ] → It is npm package runner/executer
        - NPX is a package executer that is used to directly execute Javascript packages without installing them.
        - You can execute your package without installation → `npx package-name`



What is a build tool..?

    - Build tool → A program that automates the process of compiling, packaging, testing and deploying of source code in the most efficient manner.
    - Build tools automates the creation of executable application from source code
    - Basically build automation is the act of scripting or automating a wide variety of tasks that software developers do in their day-to-day activities like:
        1. Downloading dependencies.
        2. Compiling source code into binary code.
        3. Packaging that binary code.
        4. Running tests.
        5. Deployment to production systems.
    - It improve the productivity of developers. Hence developers can focus the saved time on actual software development activities like coding instead of doing the drudge work.



What is a bundler..?

    - A bundler is a tool that takes all your code [ along with any other assets like images, scipt files ] and combines them into a single file (or a few files) that can be served to the browser.


NOTE:
----
    These modern build tools are also called bundlers
        → The primary function of a build tool is to combine multiple JavaScript files into one single file or bundle that can be used in the browser to load your application.



Creating React Project:
-----------------------

    - Creating a React application requires you to set up build tools such as Babel and Webpack.
    - These build tools are required because React's JSX syntax is a language that the browser doesn't understand.
    - To run your React application, you need to turn your JSX into plain JavaScript, which browsers understand.

    There are 2 ways to create a React Application

    1. Create React App (CRA) is a build tool used to setup a development environment for creating single-page React applications
        - CRA still uses Babel and Webpack under the hood
            - Although you can't see Babel or Webpack listed as dependencies in the generated `package.json` file
            - It's just that the configurations are hidden from you inside the `react-scripts` package.
        - command → "npx create-react-app Prject-Name"
    2. Using vite (or) parcel
        - Vite is a next gen front-end build tool
        - Vite JS is majorly used to setup a development environment for various frameworks like React and Vue, and even for a Vanilla JavaScript app with a dev server and hot reloading
        - command → "npm create vite@latest"
            - And then follow the steps to craete the React App

*/