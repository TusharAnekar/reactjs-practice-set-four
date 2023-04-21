import { useState } from "react"

export function ShowToDo ({todoItems}) {
    const [removeTask, setRemoveTask] = useState(todoItems)

    function handleClose (idToRemoveTask) {
        setRemoveTask(removeTask.filter(({id}) => !(id === idToRemoveTask)))
    }
    return(
        <section>
            <h1>Todo List</h1>
            <ul>
                {
                    removeTask.map(({id, task, isDone}) =>
                    <li key={id} style={{textDecoration: isDone ? "line-through" : "none"}}> {task} {id}
                    <button onClick={()=>handleClose(id)}>X</button></li>)
                }
            </ul>
        </section>
    )
}