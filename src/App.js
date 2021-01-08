import './App.css';
import React, {useState, useEffect} from 'react';
function App() {
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");
    useEffect(() => {
        console.log(`It's ${emotion} around here!`);
    }, [emotion])
    useEffect(() => {
        console.log(`It's ${secondary} around here!`);
    }, [secondary]);
    return (
        <>
            <h1>Current emotion is {emotion} {secondary}.</h1>
            <button onClick={() => setSecondary("crabby")}>Make crabby</button>
            <button onClick={() => setEmotion("happy")}>Happy</button>
            <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
            <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
            </>
    );
}

export default App; // That I need to import that to my index.js
