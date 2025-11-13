function TabButton({ children, onSelect, isSelected }) {
    console.log("TabButton Component is Rendered");

    return (
        <div>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect} >
                {children}
            </button>
        </div>
    )
}

export default TabButton;