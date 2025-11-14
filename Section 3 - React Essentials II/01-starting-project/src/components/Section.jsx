// As the Section Element is Used on Multiple Components, We can keep it here as a Reusable Component

function Section ({title, children, ...props}) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

export default Section;