import './App.css';

import { ShowCharacters } from './questions/ShowCharacters';
import { FontSize } from './questions/FontSize';
import { VegetablesFruits } from './questions/VegetablesFruits';
import { ShowToDo } from './questions/ShowToDo';
import { ShowToDoOne } from './questions/ShowToDoOne';
import { Books } from './questions/Books';
import { Game } from './questions/Game';

const todoItems = [
  {id: 1, task: "Writing 1-page poem", isDone: true},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: true},
]

const todoItemsOne = [
  {id: 1, task: "Writing 1-page poem", isDone: false},
  {id: 2, task: "Gym", isDone: false},
  {id: 3, task: "Shopping", isDone: false},
  {id: 4, task: "Standup call", isDone: false},
]

function App() {
  return (
    <div className="App">
      <ShowCharacters />

      <FontSize />

      <VegetablesFruits />

      <ShowToDo todoItems={todoItems} />

      <ShowToDoOne todoItemsOne={todoItemsOne}/>

      <Books />

      <Game />
    </div>
  );
}

export default App;
