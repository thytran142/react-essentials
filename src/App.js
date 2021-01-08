import './App.css';
import React, {useReducer} from 'react';
function App() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );
    return (
        <>
            <input type="checkbox" value={checked} onChange={toggle}/>
            <p>
                {checked ? "checked" : "not checked"}
            </p>
            </>

    );
}

export default App; // That I need to import that to my index.js
