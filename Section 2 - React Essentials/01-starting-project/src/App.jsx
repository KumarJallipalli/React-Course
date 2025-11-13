import { useState } from 'react';

import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {
    const [tabContent, setTabContent] = useState();

    let conditionalContent = <p>Please select a concept to see an example.</p>
    if (tabContent) {
        conditionalContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[tabContent].title}</h3>
                <p>{EXAMPLES[tabContent].description}</p>
                <pre>{EXAMPLES[tabContent].code}</pre>
            </div>
        )
    }

    function handleSelect(selectedButton) {
        setTabContent(selectedButton);
        console.log('Button clicked:', tabContent);
    }

    console.log("App Component is Rendered");

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map( (conceptItems) => <CoreConcept key={conceptItems.title} {...conceptItems} /> )}
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={tabContent === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={tabContent === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={tabContent === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={tabContent === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                </section>
                {conditionalContent}
            </main>
        </div>
    );
}

export default App;
