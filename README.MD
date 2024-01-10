## Project Repository
This repository utilizes Bundler with Parcel for efficient web development and build processes.

    Table of Contents
    Introduction
    Execute a Package
    Parcel Features
    Usage
    Gitignore Configuration
    Introduction
    In the context of this project, the specified SHA-512 hash ensures the integrity of the development code version. It is crucial that the provided hash matches the development code version to maintain project consistency.

## Execute a Package
To install React and React-DOM, use the following commands:


    npm install react
    npm install react-dom

## Parcel Features -

Parcel simplifies the development workflow by providing various features, including:

    Dev Build: Parcel generates development builds for the project.
    Local Server: Parcel creates a local server on port 1234, hosting the app.
    Hot Module Replacement (HMR): Allows efficient updates without a full page reload.
    File Watching Algorithm: Utilizes a C++ written algorithm for efficient file watching.
    Caching: Parcel caches files for faster builds.
    Optimizations: Includes image optimization, minification, bundling, and compressing.
    Consistent Hashing: Ensures consistent hashing for reliable builds.
    Code Splitting: Supports code splitting for better organization.
    Differential Bundling: Supports older browser compatibility.
    Diagnostics: Provides diagnostic information.
    Error Handling: Efficient error handling.
    HTTPS: Supports HTTPS.
    Tree Shaking: Removes unused code for optimization.
    Dev and Production Bundles: Differentiates between development and production builds.
    
Usage

## When you execute npx parcel index.html, Parcel generates development builds for your project, hosting them on port 1234. The built files are placed in the "dist" folder. Browser refreshes update the code using the files in "dist," with HMR ensuring efficient updates.

## Gitignore Configuration
The repository .gitignore file excludes the following folders:

## dist folder: Contains output from the build process, unnecessary for version control.
.parcel-cache folder: Holds cached data specific to local development environments, not suitable for version control.
## By ignoring these folders, each developer can build the project locally without sharing or tracking unnecessary files, maintaining a clean repository focused on source code and configuration files.


## adding browerslist in package.json

## adding a script  as start in package.json to create a development build 

## adding a script  as build in package.json to create a production build 

-- how to start a program in development and production

npm run start //npm start
npm run build

