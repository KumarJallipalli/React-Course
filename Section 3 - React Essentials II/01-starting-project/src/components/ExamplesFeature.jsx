import TabButton from './TabButton';
import Section from './Section';
import { useState } from 'react';
import { EXAMPLES } from '../data';

function ExamplesFeature() {
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
        // console.log('Button clicked:', tabContent);
    }
    return (
        <Section id='examples' title="Examples">
            <menu>
                <TabButton
                    isSelected={tabContent === 'components'}
                    onClick={() => handleSelect('components')}>
                    Components
                </TabButton>
                <TabButton
                    isSelected={tabContent === 'jsx'}
                    onClick={() => handleSelect('jsx')}>
                    JSX
                </TabButton>
                <TabButton
                    isSelected={tabContent === 'props'}
                    onClick={() => handleSelect('props')}>
                    Props
                </TabButton>
                <TabButton
                    isSelected={tabContent === 'state'}
                    onClick={() => handleSelect('state')}>
                    State
                </TabButton>
            </menu>
            {conditionalContent}
        </Section>
    )
}

export default ExamplesFeature; 