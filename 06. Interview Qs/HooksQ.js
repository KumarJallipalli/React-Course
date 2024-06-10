/**
 *          Previous work on the React Hook
*/

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



/**
 *  Interview Q --> What if we give multiple setCounter’s inside the addValue fn..?
*/
function addValue () {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
}
/**
 *  - The above code won’t work & still increases value of counter by 1 only
 *  - Since this is about `useState`, all the updates on the UI were sent in batches instead of updating each time
*/



/**
 *      Ans:
*/
function addValue () {
      setCounter( prevCount => prevCount +1 );
      setCounter( prevCount => prevCount +1 );
      setCounter( prevCount => prevCount +1 );
      setCounter( prevCount => prevCount +1 );
  }
/**
 * - setCounter accepts a callback fn → where the argument refers to the previous state of the counter variable
 *      - Since, setcounter refers to counter variable, the argument refers to the previous state value of the counter variable
 * - As these values are updated via callback, next callback will be executed only after completion of the previous callback
 * - Hence, the variables will be properly updated
 * - Now, when we click button, value added will be 4 as expected
 */