import { useState } from "react"

export function FontSize () {
    const [newFontSize, setNewFontSize] = useState(18)
    return(
        <section>
            <p style={{fontSize: `${newFontSize}px`}}>Welcome</p>
            <button onClick={() => setNewFontSize(newFontSize+1)}>+</button>
            <button onClick={() => setNewFontSize(newFontSize-1)}>-</button>
        </section>
    )
}