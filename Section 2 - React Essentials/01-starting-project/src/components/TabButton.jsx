function TabButton ({children, onSelect}) {
    console.log("TabButton Component is Rendered");
    
    return (
        <div>
            <button onClick={onSelect} >{children}</button>
        </div>
    )
}

export default TabButton;