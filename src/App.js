import './App.css';
import map from './map.PNG';
function Header(props) {
    // Always have a props and maybe an empty object
    console.log(props);
    return (
        <header>
            <h1>{props.name}'s Kitchen</h1>
        </header>
    );
}
function Main(props) {
    return (
        <section>
            <p>We serve the most {props.adjective} food around.</p>
            <img src={map} height={200} alt={"map about the restaurant"}/>
            <ul style={{textAlign: "Left"}}>
                {props.dishes.map((dish) => (
                    <li key={dish.id}>{dish.title}</li>
                ))}
            </ul>
        </section>
    );
}
function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.year}</p>
        </footer>
    );
}
const dishes = [
    "Macaroni and Cheese",
    "Salmon",
    "Tofu with Vegetables"
];
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));
function App() {
  return (
    <div className="App">
        <Header name="Cindy"/>
        <Main adjective="good" dishes={dishObjects}/>
        <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App; // That I need to import that to my index.js
