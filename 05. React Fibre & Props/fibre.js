/**

        --> Page Reload → browser is repainting the whole DOM.


Why Virtual DOM is needed..?

- WKT, the browser takes in HTML document → transforms it to DOM —> Paints the DOM on the screen/page to users
- DOM is a tree-like structure where each HTML element corresponds to a node in the tree
- Whenever DOM detects change [ even minute chnages ] in the DOM tree it repaints the entire page using new version of DOM
- Comparing the changes in DOM & only updating them is slower for browser than actually repainting the whole DOM
- But these re-renders are prohibitively costly in terms of performance & is NOT Optimal


        -->`createRoot()` → creates a DOM like structure in React


link → https://github.com/acdlite/react-fiber-architecture


What is React Fibre..?

- React Fiber is a re-implementation of React's core algorithm [ → Fiber is a ground-up rewrite of the reconciler ]
- Its headline feature is **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.
- primary goal of Fiber is to enable React to take advantage of scheduling. Specifically,
    - the ability to pause, abort, or reuse work as new updates come in;
    - the ability to assign priority to different types of updates → hydration [ Elements will be rendered but their functionalties not loaded yet ]
    - Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique.”
    - increase its suitability for areas like animation, layout, and gestures.

The key points are:

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
- A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.



What is reconciliation..?

- `Reconciliation` → The algorithm React uses to diff one tree with another to determine which parts need to be changed/updated in the most efficient way
- `diffing` → is the actual algorithm that diffs/compares one tree with another
- `update` → A change in the data which eventually results in a re-render. Usually the result of `setState`.
- Reconciliation is the algorithm behind the "virtual DOM.”
- React is designed so that reconciliation and rendering are separate phases.
    - The reconciler does the work of computing which parts of a tree have changed
    - the renderer then uses that information to actually update the rendered app.


Rendering in React

- when you render a React application, a tree of nodes that describes the app is generated and saved in memory.
- This tree is then flushed to the rendering environment
- When the app is updated (usually via `setState`), a new tree is generated.
- The new tree is diffed with the previous tree to compute which which parts of a tree have changed


What is VirtualDOM..?

- Virtual DOM is an in-memory representation of the DOM
- It is a lightweight copy [ exact copy ] of the actual DOM → since it does not have the power to render tje app
- Hence, **Manipulating DOM is slow, but manipulating Virtual DOM is fast** as nothing gets drawn on the screen
- React maintains two Virtual DOM at each time
    - whenever there is a change/update, a new Virtual DOM tree is created.
    - And an original VirtualDOM → which is the pre-update version of new VirtualDOM
    - This new Virtual DOM tree is then compared with the previous Virtual DOM tree to determine the changes in DOM
    - Now, only the updated elements will get rendered on the page again.
*/