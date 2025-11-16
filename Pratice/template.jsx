import { useState } from "react";

function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditClick() {
        // Toggling the isEditing state upon button click
        setIsEditing((!isEditing));

        // Logging the current isEditing state
        console.log(isEditing);
    }

    // If we are in editing mode, save the name from input field
    function handleChange(event) {
        console.log("Input changed:", event.target.value);
        setPlayerName(event.target.value);
    }

    // // Alternate way, To save the name from input field
    // if (isEditing) {
    //     const inputField = document.querySelector(`input.player-name`);
    //     console.log("Saved name:", inputField.value);
    //     console.log(inputField);
    //     setPlayerName(inputField.value);
    // }

    return (
        <li>
            <span className="player">
                {
                    !isEditing ?
                        <span className="player-name">{playerName}</span> :
                        <input type="text" className="player-name" placeholder={playerName} onChange={handleChange} />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            {isEditing.toString()}
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}