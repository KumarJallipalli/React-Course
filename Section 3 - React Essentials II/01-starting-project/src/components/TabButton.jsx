function TabButton({ children, isSelected, ...props }) {
    console.log("TabButton Component is Rendered");

    return (
        <div>
            <button className={isSelected ? 'active' : undefined} {...props} >
                {children}
            </button>
        </div>
    )
}

export default TabButton;