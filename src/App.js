import './App.css';
import React, {useState} from 'react';
function App() {
    const [emotion, setEmotion] = useState("happy");

    console.log(emotion);
    return (
        <>
            <h1>Current emotion is {emotion}.</h1>
            <button onClick={() => setEmotion("happy")}>Happy</button>
            <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
            <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
            </>
    );
}

export default App; // That I need to import that to my index.js
