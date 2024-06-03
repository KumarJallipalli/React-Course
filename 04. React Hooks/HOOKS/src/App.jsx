import {useState} from 'react'

function App() {
  // Declaring a State varibale using reack hook --> useState()
  let [ counter, setCounter ] = useState(10);

  // function to incraeese the counter value
  function addValue () {
    // fixing the upper limit to 20
    if (counter < 20) {
      // Through normal updation, state variables won't be updated
      counter = counter + 1;

      // state varibales can only be updated using setFunctions
      setCounter(counter);
    }
  }

  function removeValue () {
    // fixing the lower limit to 0
    if (counter > 0) {
      counter = counter-1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Thi is Why we need Hooks in React</h1>

      {/* counter variable added as evaluated expression using JSX */}
      <h3>Counter : {counter} </h3>

      {/* button to increase the counter value using onclick event */}
      <button onClick={addValue}>addValue</button>

      {/* button to increase the counter value using onclick event */}
      <button onClick={removeValue}>removeValue</button>
    </>
  );
}

export default App;
