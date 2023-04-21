import { useState } from "react";
import { books } from "../data/data";

export function Books () {

    const [selectGenre, setSelectGenre] = useState(books)

    function handleSelectGenre (userSelectedGenre) {
        setSelectGenre(books.filter(({genre}) => 
            genre === userSelectedGenre
        ))
    }
    return(
        <section>
            <h1>Books</h1>
            <button onClick={() => setSelectGenre(books)}>All Genres</button>
            <button onClick={() => handleSelectGenre("Classic")}>Classic</button>
            <button onClick={() => handleSelectGenre("Dystopian")}>Dystopian</button>
            <button onClick={() => handleSelectGenre("Young Adult")}>Young Adult</button>
            {
                selectGenre.map(({id, title, author, genre}) => 
                    <div>
                        <h3>{title}</h3>
                        <p>{author}</p>
                    </div>
                )
            }
        </section>
    )
}