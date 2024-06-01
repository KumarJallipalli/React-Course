/**
 *  We will Create a Custom React, using Only Vanilla JS
*/


// 1.1 we will create an Object for Element Creation in the near future
const reactElement = {
    tag: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    childNode: "Click here to re-direct to Google Page"
}

// 1.2 Select an Element to insert the new Element for rendering
const rootContainer = document.querySelector("#root");

// 2. Create custom render function, which expects an Object to create & inject an element & a node to render
function customeRender (element, node) {
    // create an element from Object
    const reactElement = document.createElement(element.tag);

    // setting the content inside the element
    reactElement.innerHTML = element.childNode;

    // setting the attributes fot the element
    reactElement.setAttribute("href", element.props.href);
    reactElement.setAttribute("target", element.props.target);

    
    // Append the element onto Browser's DOM, So that it will get rendered when we open HTML page in Browser
    node.appendChild(reactElement);
}

// 3. Call the render function to render & display the elements
customeRender (reactElement, rootContainer);


/** 
 *  - If we want to create elements using JS, we need to create each & every element everytime since they differ in many ways
 *  - Hence, we have created a re-usable function for Element creation from an Object & appended to DOM
 *  - But the major problem is that props (or) attributes of elements
 *          - We need to manually write each & every attribute using "setAttribute"
 *          - So, we will use a loop to set all attributes of an Object to created element
*/

// Version 2 of our custome render function
function customeRenderV2 (element, node) {
    // create an element from Object
    const reactElement = document.createElement(element.tag);

    // setting the content inside the element
    reactElement.innerHTML = element.childNode;

    // setting All the attributes fot the element
    for (let attribute in element.props) {
        // This "if" can be understood when we actually see How react creates an element
        if (attribute === "children") continue;
        reactElement.setAttribute(attribute, element.props[attribute]);
    }

    
    // Append the element onto Browser's DOM, So that it will get rendered when we open HTML page in Browser
    node.appendChild(reactElement);
}

customeRenderV2 (reactElement, rootContainer);


/**
 *  NOTE:
 *  ----
 *      - In the end, React.createElement() method --> returns an Object simillar to the above's reactELement Object 
 *      - In JS, we select an element as parent & append the created element as a child
 *      - In React, we select an element as root, make it a React Node & inject the react element/component to render & display
 *      - Hence, In the actual React too we are following the same steps that we follow in vanilla JS
*/