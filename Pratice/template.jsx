import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

import { useState } from 'react';

function App() {
    const [ selectedButton, setSelectedButton ] = useState('Components');
    function handleSelect(selectedButton) {
        setSelectedButton(selectedButton);
        console.log('Button clicked:', selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
                    </menu>
                </section>
                <h2>{tabContent}</h2>
            </main>
        </div>
    );
}

export default App;
