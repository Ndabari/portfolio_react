# QnA
1. **NPM**: Node Package Manager is a package manager for JavaScript, used to install and manage dependencies ie. libraries, tools for Node.js projects.

2. **SPA**: Single Page Application is a web application that loads a single HTML page and only updates the section where content is changing as the user interacts with the application. This can achieved using js frameworks.

3. **Event Loop**: The event loop allows asynchronous operations to run without blocking other operations. 

4. **export x vs. export default x**: `export x` is used to export a specific variable, function, or object from a module, while `export default x` is used to export a single "default" entity from a module. When importing, you use `{}` for named exports and no braces for default exports.

5. **className vs. class in React**: React replaces `class` with `className` in JSX to avoid conflicts since `class` is a reserved keyword in JavaScript used for defining classes.

6. **Incorrect button onClick**: This will immediately call the function when the component renders, instead of waiting for a click. This will cause the counter to increment uncontrollably.

7. **Object deconstruction in React**: Object deconstruction is a feature in JavaScript that allows you to extract multiple properties from an object and assign them to variables. It could be used to extract props or state variables for easier access and readability.

8. **Using HTML and JavaScript in React Component**: In React components, you can write HTML-like syntax (JSX) to describe the structure of the UI. JavaScript expressions (including function calls) can be embedded within JSX using curly braces `{}`. React's JSX compiler translates this to regular JavaScript behind the scenes.

9. **Async/Await**: Javascript is synchronous in nature meaning it executes each line of of code one after another, if a delay occurs the whole execution has to wait for it to be resolved to continue. Async/await allows asynchronous code to work in a synchronous-like manner. It allows you to write asynchronous code that looks synchronous, making it easier to understand and maintain.


10. **Promise**: A Promise is an object representing the eventual completion or failure of an asynchronous operation. 

## GitHub pages link
https://ndabari.github.io/PortfolioProject/


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
