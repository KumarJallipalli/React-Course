import HomeIcon from './HomeIcon';
import PlusIcon from './PlusIcon';
import './index.css'

function Button({ children, mode = 'filled', Icon, ...props }) {
    let clsName = 'button';

    return (
        <button className={clsName} {...props}>
            {(Icon) ? <span className="button-icon"><Icon /></span> : null}
            <span>{children}</span>
        </button>
    )
}


function App() {
    return (
        <div id="app">
            <section>
                <h2>Buttons Should Support Any Props</h2>
                <p>
                    <Button mode="filled" disabled>
                        Disabled
                    </Button>
                </p>
                <p>
                    <Button onClick={() => console.log('Clicked!')}>
                    Click me</Button>
                </p>
            </section>

            <section>
                <h2>Button with Fevicons</h2>
                <p>
                    <Button Icon={HomeIcon}>Home</Button>
                </p>
                <p>
                    <Button Icon={PlusIcon} mode="text">
                        Add
                    </Button>
                </p>
            </section>
        </div>
    );
}

export default App;