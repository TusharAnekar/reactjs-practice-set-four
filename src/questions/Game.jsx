import { useState } from "react"

export function Game () {
    let availableLives = 5
    const [life, setLife] = useState(availableLives)
    return (
        <section>
            <h1>Game</h1>
            <h2>Current Lives: {life}</h2>
            <button onClick={() => setLife((life) => life === 0 ? life : life - 1)}>Lose a life</button>
            {
                !life && <h3>Game Over</h3>
            }

        </section>
    )
}