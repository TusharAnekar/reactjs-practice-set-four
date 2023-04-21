import { useState } from "react";
import { characters } from "../data/data";

export function ShowCharacters () {

    const [charactersList, setCharactersList] = useState([])

    return(
        <section>
            <h1>Characters</h1>
            <button onClick={() => setCharactersList(characters.heroes)}>
                Show Heroes</button>

            <button onClick={() => setCharactersList(characters.villains)}>Show Villains</button>

            {
                charactersList && 
                <section>
                    <h2>{charactersList === characters.heroes ? "Heroes":
                    charactersList === characters.villains ? "Villian" : ""}</h2>
                    {charactersList.map(({name, powers, costume}) => 
                    <div>
                        <h3>{name}</h3>
                        <p>Powers: {powers}</p>
                        <p>Costume: {costume}</p>
                    </div>)}
                </section>
            }
        </section>
    )
}