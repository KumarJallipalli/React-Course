import { useState } from 'react';

import Header from './components/Header';
import CoreConceptsFeature from './components/CoreConceptsFeature';
import ExamplesFeature from './components/ExamplesFeature';

function App() {
    return (
        <div>
            <Header />
            <main>
                <CoreConceptsFeature />
                <ExamplesFeature />
            </main>
        </div>
    );
}

export default App;
