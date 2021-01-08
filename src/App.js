import './App.css';
function SecretComponent() {
    return <h1>Super secret information for authorized users only.</h1>
}
function RegularComponent() {
    return <h1>Everyone can see this component.</h1>
}
function App({authorized}) {
    return (
        <>
            {authorized ? <SecretComponent/> : <RegularComponent/>}
            </>
    );
}

export default App; // That I need to import that to my index.js
