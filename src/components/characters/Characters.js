import {useState} from "react";
import Character from "./Character";

function Characters() {

    const [characters, setCharacters] = useState([]);

fetch('https://rickandmortyapi.com/api/Character')
    .then(value => value.json())
    .then(value => {
        setCharacters(value.results);
    });

    return (<div>
        {
            characters.map(value => <Character character={value} key={value.id}/>)
        }
    </div>);
}

export default Characters;
