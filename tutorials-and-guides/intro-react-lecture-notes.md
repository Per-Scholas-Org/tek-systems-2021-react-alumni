<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 0.485 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β31
* Tue Aug 31 2021 09:34:04 GMT-0700 (PDT)
* Source doc: Copy of Transcript of React Lecture Week-3 Day-2
----->



## Transcript of React Lecture Week-3 Day-2


### Project starter



* **npx create-react-app myapp **- this command initializes a project with the name myapp, it installs npm packages and necessary dependencies
* **yarn - **another package manager


### After the set up



* **cd myapp ** - you have to cd into your project folder
* **yarn start **OR **npm start **to get the project started on the server
* node_modules contains the dependencies, package.json contains the scripts for the project 
* **Public -> index.html** - is the main page that is being served on the server
* **&lt;div id= “root”>&lt;/div>** inside index.html is how javascript cod is connected to index.html
* **ReactDOM **package inside App.js turns react code into html 


### Components



* Syntax: `<ComponentName />`
* Syntax for writing a component function:
```js
function MyComponent(props){
	return(
    // html that needs to be returned
    // NOTE: if there are multiple elements being returned, you should enclose them inside <> </>
	);
}
```

* **To use CSS inside the component **: create a file w component’s name and css extension. After that import it into the component using **import “./ComponentName.css”**
* To use other components**: `import OtherComponent from “./OtherComponent.js”;`
* **Shortcut to create a component within a new file: **type **rfc  **and press enter (works with ES7 for React/Redux extension)
* **Good practice:** create a new folder for each of the components


### Props



* Syntax: `<MyComponent propName={prop} />`
* In this context **propName **can be used within the **MyComponent **function and **prop **is a JSX attribute that will be the value of **propName**
* **If a prop of a component changes, React will re-render the component**

**CODE EXAMPLES FOR PROPS AND COMPONENTS(NOTE APP) CAN BE ACCESSED ON ADAM’S GITHUB: https://github.com/adamcee/notes-app**
