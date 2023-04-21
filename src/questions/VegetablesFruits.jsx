import { useState } from "react"
import { itemList } from "../data/data"

export function VegetablesFruits () {

    const [itemType, setItemType] = useState([])

    function handleFruitsFilter () {
        setItemType(itemList.filter(({category}) => category==="Fruit"))
    }

    function handleVegetablesFilter() {
        setItemType(itemList.filter(({category}) => category==="Vegetable"))
    }
    return(
        <section>
            <h1>Items List</h1>

            <button onClick={() => setItemType(itemList)}>All</button>
            <button onClick={handleFruitsFilter}>Furits</button>
            <button onClick={handleVegetablesFilter}>Vegetables</button>
            
            {
                itemType && 
                <ul>
                {
                    itemType.map(({id, name, category}) => <li key={id} style={{color: category === "Fruit" ? "orange" : "green"}}>{name}</li>)
                }
            </ul>
            }
        </section>
    )
}