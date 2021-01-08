# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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


#### Learning
##### Intro to React elements
How React render elements:
```
React.createElement("h1", null, "Heyy Engine!"),
```
First is what we want to put (h1), where we want to put(null), and content.
Add property:
```
React.createElement("h1", {style: {color: "blue"}}, "Heyy Engine!"),
```

Add a ul:
```
 React.createElement(
      "ul",
      null,
      React.createElement("li", null, "Monday"),
      React.createElement("li", null, "Tuesday"),
      React.createElement("li", null, "Wednesday"),
      React.createElement("li", null, "Thursday")
  ),
```
The above equivalents here:
```
ReactDOM.render(
<ul>
<li>Monday</li>
<li>Tuesday</li>
<li>Wednesday</li>
</ul>,
document.getElementById("root")
```

##### React Components
We have the following:
```
function App() {
  return (
    <div className="App">
        <h1>Header</h1>
        <h2>Main</h2>
        <h3>Footer</h3>
    </div>
  );
}
```
And when we export default App; // That I need to import that to my index.js, 
we will import app under index.js to display it.
```
ReactDOM.render(
  App(),
  document.getElementById('root')
);
```

Now we want to replace header as a component:
```
function Header() {
    return (
        <header>
            <h1>Eve's Kitchen</h1>
        </header>
    );
}
```

So under the app we can:
```
function App() {
  return (
    <div className="App">
        <Header/>
        <h2>Main</h2>
        <h3>Footer</h3>
    </div>
  );
}
```
At the end we can have something as below:
```
function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}
```
**How to add a property to your component**
It's always have a props (if nothing passed, it is an empty object):
```
function Header(props) {
    // Always have a props and maybe an empty object
    console.log(props);
    return (
        <header>
            <h1>{props.name}'s Kitchen</h1>
        </header>
    );
}
```
In order to pass the property:
```
 <Header name="Cindy"/>
```
In order to pass the data: 

```
 <section>
            <p>We serve the most {props.adjective} food around.</p>
            <ul style={{textAlign: "Left"}}>
                {props.dishes.map((dish) => (
                    <li>{dish}</li>
                ))}
            </ul>
        </section>
```
The javascript will have textAlign (instead text-align following css).

When we do that, we have an error in the console.log:
```
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Main`. See https://reactjs.org/link/warning-keys for more information.
    at li
    at Main (http://localhost:3000/static/js/main.chunk.js:182:46)
    at div
```

So add the id as below:
```
 <ul style={{textAlign: "Left"}}>
                {props.dishes.map((dish, i) => (
                    <li key={i}>{dish}</li>
                ))}
            </ul>
```

Use fragments:
```
ReactDOM.render(
    <div>
        <App/>,
        <AppTwo/>
    </div>
  ,
  document.getElementById('root')
);
```
(Wrapped them into a <div></div> so it won't have a problem). You can use fragment:
```
ReactDOM.render(
    <React.Fragment>
        <App/>,
        <AppTwo/>
    </React.Fragment>
  ,
  document.getElementById('root')
);
```
Or even no need the keyword "Fragment":
```
ReactDOM.render(
    <>
        <App/>,
        <AppTwo/>
    </>
  ,
  document.getElementById('root')
);
```
##### React State in the Component Tree
First way to render conditional rendering:
```
ReactDOM.render(
    <App authorized={true} />,
    document.getElementById('root')
)
```

```
function App(props) {
    if (props.authorized) {
        return <SecretComponent/>
    } else {
        return <RegularComponent/>
    }
}
```

Second way:
```
function App(props) {
    return (
        <>
            {props.authorized ? <SecretComponent/> : <RegularComponent/>}
            </>
    );
}
```
**Destructing arrays and objects**
```
const [mostImportantItem] = ["boots", "tent", "headlamp"];
console.log(mostImportantItem);
```
It will take the first item which is "boots"

**Understanding the useState hook**
```
import React, {useState} from 'react';
function App() {
    const [emotion, setEmotion] = useState("happy");
    return (
        <>
            <h1>Current emotion is {emotion}.</h1>
            <button onClick={() => setEmotion("happy")}>Happy</button>
            <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
            <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
            </>
    );
}
```
useState has 2 variables: 1 is state, 1 is the function.
**Working with useEffect**
Another important Hook that's part of the React library is useEffect. It's typically used to manage side effects that are not related to the components render. Things like console messages, loading data and sometimes animations can benefit from useEffect.

```
function App() {
    const [emotion, setEmotion] = useState("happy");
    useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    })
    return (
        <>
            <h1>Current emotion is {emotion}.</h1>
            <button onClick={() => setEmotion("happy")}>Happy</button>
            <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
            <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
            </>
    );
}
```
This allows us to do something that doesn't have to do with the render of the component, but it's just a side effect. useEffect takes in a second argument and this argument called the dependency array.
```
useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion])
```
I'm going to pass emotion into this dependency array to keep tracks of values. NOw I can see everytime this being updated. so useEffect is going to watch this state value if it changes it will call the function. 

**Incorporating useReducer**
Let's consider a checkbox and how we might manage it say using react.
```
function App() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );
    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle}/> // Instead set the whole function, we can send the name of the function here
            <p>
                {checked ? "checked" : "not checked"}
            </p>
            </>

    );
}
```
A reducer function's most simple definition is it takes in the current state and it returns a new state. If checked is false, it should return the opposite, which is true. 

##### Asynchronous React
**Fetching data with Hooks**
We're going to grab some data from Github API. If I go to api.github.com/users, this will give me a list of all the GitHub users and their data as JSON.

```
function App({login}) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData);
    }, []);
    if (data) {
        return (
            <>
                {JSON.stringify(data)}
            </>
        );
    } else {
        return (
            <> No data is found </>
        )
    }

}
```
