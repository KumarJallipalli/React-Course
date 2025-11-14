import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js';
import Section from './Section.jsx';

function CoreConceptsFeature() {    
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map(
                    (conceptItems) => <CoreConcept key={conceptItems.title} {...conceptItems} />
                )}
            </ul>
        </Section>
    )
}

export default CoreConceptsFeature;