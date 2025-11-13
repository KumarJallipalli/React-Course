import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function App() {
    const [popUp, setPopUp] = React.useState();

    function handleDelete() {
        setPopUp(true);
    }
    function handleProceed() {
        setPopUp(false);
    }

    return (
        <div>
            {
                popUp ?
                    <div data-testid="alert" id="alert">
                        <h2>Are you sure?</h2>
                        <p>These changes can't be reverted!</p>
                        <button onClick={handleProceed}>Proceed</button>
                    </div> :
                    null
            }
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}