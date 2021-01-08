import './App.css';
import React, {useState, useEffect} from 'react';
//https://api.github.com/users/thytran142

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
               <h1>{data.name}</h1>
                <p>{data.location}</p>
                <img alt={data.login} src={data.avatar_url}/>
            </>
        );
    } else {
        return (
            <> No data is found </>
        )
    }

}

export default App; // That I need to import that to my index.js
