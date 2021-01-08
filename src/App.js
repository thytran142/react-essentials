import './App.css';
import React, {useState, useEffect} from 'react';
//https://api.github.com/users/thytran142

function App({login}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!login) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError);
    }, [login]); // everytime the value is changed we will call it
    if (loading) return <h1>Loading...</h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if (!data) return null;
    {
        return (
            <>
               <h1>{data.name}</h1>
                <p>{data.location}</p>
                <img alt={data.login} src={data.avatar_url}/>
            </>
        );
    }
}

export default App; // That I need to import that to my index.js
