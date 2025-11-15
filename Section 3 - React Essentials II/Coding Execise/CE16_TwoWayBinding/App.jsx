import React from 'react';

import Review from './Review';

// don't change the Component name "App"
function App() {
    const [textContent, setTextContent] = React.useState();
    const [name, setName] = React.useState();
    
    function handleFeedback (event) {
        setTextContent(event.target.value)
    }
    function handleInput (event) {
        setName(event.target.value);
    }
    
  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea onChange={handleFeedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleInput}/>
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={textContent} student={name}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;