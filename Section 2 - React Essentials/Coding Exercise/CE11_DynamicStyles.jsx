import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [ style, setStyle ] = React.useState();
    
    function handleToggle () {
        setStyle('active');
    }
    
    return (
        <div>
            <p className={style}>Style me!</p>
            <button onClick={handleToggle}>Toggle style</button>
        </div>
    );
}
