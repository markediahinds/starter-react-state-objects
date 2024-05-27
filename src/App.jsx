import { dogsData } from './data' 
// console.log(dogsData)
import { useState } from 'react'
import { v1 as generateUniqueID } from "uuid";

function App() {
  // State variable for our dogs data;
  const [dogs, setDogs] = useState(dogsData);

  // State variable for our current dog 
  const [currentDog, setCurrentDog] = useState('Please select a dog');

  const addDog = () => {
    // console.log('Scooby') -- making sure the button works 

    // Create a new dog named Rover
    // give the dog a "unique" id
    // normally a database would handle the unique id logic for you
    
    const rover = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };

    // make a copy of the dogs array using destructuring
    // add rover, in this case the dog is added to the first array position
    // what would you need to change to add him as the last array item?

    setDogs([rover, ...dogs]);
  }
// console.log(rover)
// if I setDogs(rover), it's not adding to my state, it's replacing it
// setDogs([rover, ...dogs]) - reverse it to add dog as the last array item

  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <aside></aside>
      <main>
      <p>Current Dog</p>
      <button onClick={addDog}>Add a new dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
              <span>{dog.name}</span>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
