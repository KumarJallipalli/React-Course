import { CORE_CONCEPTS } from './data.js';

function CoreConcept({title, description, image}) {
    return (
        <div>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image} />
            // Instead of passing props one by one, we can use spread operator
            // As the props names match exactly with object props names
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;