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

## JSX
            Understanding JSX and React
    JSX vs HTML
-JSX is not HTML; it is more similar to XML.
-React uses JSX as a syntax extension to JavaScript for describing what the UI should look like.
-JSX is a way to write React elements in a syntax that closely resembles HTML.
## React and JSX Relationship
-React and JSX are closely intertwined but are different concepts.
-JSX is a syntax used in React to define components and their structure.
-JSX gets transpiled before reaching the JavaScript engine.
##    JSX Transpilation
-JSX code is transpiled into React elements, which are essentially JavaScript objects.
-The transpilation process converts JSX into code that browsers can understand.
-Transpilation is typically handled by tools like Babel, not directly by the JavaScript engine.
## Role of JSX in React
- JSX is a syntax used to define the structure of React components.
- React components can be written without using JSX, but JSX provides a more concise and readable way.
## JavaScript and JSX
- JavaScript engines understand ECMAScript 6 (ES6) syntax.
- JSX is not directly understood by JavaScript engines; it undergoes transpilation to become standard JavaScript.
## Transpilation Process
- Transpilation is the conversion of code to a form that the browser can understand.
- Tools like Parcel and Babel are often used for transpiling JSX into JavaScript.
## React Elements and Components
- React elements are the building blocks of React applications, represented as JavaScript objects.
- React components are more complex, starting with a capital letter, and can be composed of other components.
## Component Composition
- React allows for component composition, where components can be nested within each other.
- This allows for a modular and reusable structure in building user interfaces.
## React Function Components
- React components can be functional, returning JSX code.
- Components should start with a capital letter to differentiate them from regular HTML elements.



## Exporting Components in JavaScript Modules

When exporting components in JavaScript modules, it's essential to distinguish between default exports and named exports.

### Default Export
Use `export default` when you have to export only one component from a file.

**Import for Default Export:**
import YourComponent from './path/to/YourComponent';


### Named Export

Use named exports when you have to export more than one component from a file.
**Import for Named Export:**
import { Component1, Component2 } from './path/to/YourComponent';

# React State Management and Virtual DOM

In React, state management and the Virtual DOM play crucial roles in optimizing performance and managing UI updates efficiently.

## State Variable (Super Powerful Variable)

In React, state variables hold data that can change over time, and they are super powerful because they trigger component re-renders when they are updated. They are typically defined using the `useState` hook.


const [resObj, setResObj] = useState([]);
Here, resObj is the state variable, and setResObj is the function used to update it.

##Local State Variable-
Local state variables are declared within a component and are managed using the useState hook. They can be updated using the provided setter function.
Example-
 In javascript

//Local state variable - 
const[resobj] = useState([]);
 //useState("inital value" )

//Normal JS Variable - 
let resObj = []

Regular JavaScript variables are also used for storing data, but they don't trigger re-renders in React components like state variables do.

--Rendering
When a state variable is updated, React re-renders the component to reflect the changes in the UI. This happens efficiently due to the Virtual DOM.

 --Virtual DOM and Diff Algorithm
React's Virtual DOM is a lightweight representation of the actual DOM. It allows React to perform efficient updates by comparing the previous and updated versions of the Virtual DOM.

The diff algorithm is responsible for finding the differences between the previous and updated Virtual DOM trees. This enables React to update only the parts of the UI that have changed, leading to faster rendering.

--Example Usage
// Define state variable
const [resObj, setResObj] = useState([]);

// Update state variable
const updateData = newData => {
  setResObj(newData);
};

// Call update function with new data
updateData(newData);
By leveraging state variables, the Virtual DOM, and the diff algorithm,
React ensures fast and efficient UI updates, making it a powerful tool for building dynamic web applications.


## 🌟 Monolithic Architecture vs. Microservices Architecture

# Monolithic Architecture:

In the old days of coding, we crammed everything into one big project. Imagine a messy room where your UI, notifications, and even SMS features were all mixed together. Want to change the color of a button? You'd have to recompile the entire project! Plus, everything had to use the same language.

# Microservices Architecture:

Fast forward to today, where we've organized our coding better. Say hello to microservices! Instead of one big mess, we've split our app into smaller teams. Now, we have separate teams for backend work, making the UI look good, sending SMS messages, handling emails, and making sure only the right people get in. Each team uses their own tech tools, making teamwork smoother.

## 🔗 How Do These Services Communicate?

Think of each service as a star in its own galaxy, with its own unique address (port). But here's the cool part: by giving these addresses easy-to-remember names, they can talk to each other like neighbors, sending signals and data through their own "portals." It's like a futuristic space story!


## Making API Calls: Pick Your Way!

When you want your webpage to show stuff, there are two ways to do it. Let's look at both:

# Way 1: Get Data First, Then Make Things Look Nice

**Step 1: Call the API**  
Right when the page shows up, we ask the server for all the stuff we need. It's like sending out scouts to gather information before a big event!

**Step 2: Make Things Look Good**  
Once the info comes back, we make the webpage look lively, adding all the fresh info we got. It's like painting details onto a picture to make it colorful!

# Way 2: Make Things Look Nice First, Then Get Data

**Step 1: Make Things Look Nice**  
Instead of a boring blank screen, we quickly sketch out the basic layout of the webpage, giving folks an idea of what's coming. It's like setting up the stage before a play!

**Step 2: Call the API**  
Behind the scenes, we ask the server for more info to make the webpage even better. It's like adding extra layers to a drawing to make it really stand out!





