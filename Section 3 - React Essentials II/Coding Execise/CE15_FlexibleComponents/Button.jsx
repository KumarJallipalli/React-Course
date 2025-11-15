import './index.css'

export default function Button({ children, mode = 'filled', Icon, ...props }) {
    // Todo: Build this component!

    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
    // Also wrap the children prop with a <span>
    let clsName = 'button';

    if (mode == 'filled') {
        clsName = 'button filled-button';
    } else if (mode == 'outline') {
        clsName = 'button outline-button';
    } else if (mode == 'text') {
        clsName = 'button text-button';
    }

    if (Icon) {
        clsName = clsName + ' icon-button';
    }



    return (
        <button className={clsName} {...props}>
            {(Icon) ? <span className="button-icon"><Icon /></span> : null}
            <span>{children}</span>
        </button>
    )
}
