import { useState } from "react"

export function ShowToDoOne ({todoItemsOne}) {
    
    const [newToDoItems, setnewToDoItems] = useState(todoItemsOne)

    function handleMarkDone(idToMarkDone) {
       setnewToDoItems(newToDoItems.map((task) => 
       task.id===idToMarkDone ? {...task, isDone: true} : task))
    } 
    return(
        <section>
            <h1>Todo List One</h1>
            <ul>
                {
                    newToDoItems.map(({id, task, isDone}) => 

                    <li key={id} style={{color: !isDone ? "black" : "red", 
                    textDecoration: isDone ? "line-through" : "none"}}>{task} 
                        <button onClick={() => handleMarkDone(id)}>Mark Done</button>
                    </li>)
                }
            </ul>
        </section>
    )
}