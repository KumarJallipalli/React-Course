import React from 'react';

// import Todo from './Todo'
export default function Todo({children}) {
    return <li>{children}</li>;
}

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
  return (
    <div>
        {/* { DUMMY_TODOS.map( (items) => <Todo> {items} </Todo> ) } */}
        { DUMMY_TODOS.map( (items) => <Todo text={items} /> ) }
    </div>
  )
}
