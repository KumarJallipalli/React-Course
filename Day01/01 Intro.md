# 01. Intro [ 08/08/2025 ]

---

<aside>
💡

Pre-Requisites:

- Basic Understanding of JS, HTML & CSS
</aside>

## What is React

- React is a JS Library
- React is used to build User Interfaces [ i.e., Front End Application ]
    - React is especially used to build SPA [ where performance & Responsiveness is Key ]
- React focuses just on the view layer

## What is SPA

- SPA → Single Page Applications
- SPA → Application that loads Single HTML Page
    - Navigation between "pages" & updates to contents happens Dynamically [ Using JS ] without reloading the entire page
- Adv → When moving from one page to another, Application doesn’t reload [ NASA website (vs) React website ]
- Concept
    1. Initial Load → Browser loads one main HTML file [ plus JavaScript and CSS assets ]
    2. Dynamic Content 
        - Navigation between "pages" happens via **JavaScript [ V.IMP ]**
        - JS updates parts of the page using data fetched from the server — without a full page refresh.
    3. Client Side Routing
        1. SPAs use **JavaScript-based routers** (like React Router) to switch views based on the URL
        2. In doing so, It doesn’t request a new page from the Server

## Key Features of React

1. **Component-Based**
    - Build UIs using **reusable components** that manage their own state.
2. **Declarative**
    - Define **what** the UI should look like && React updates it efficiently.
3. **Virtual DOM**
    - Uses a lightweight, in-memory DOM to update only what's needed — Making it fast
4. **One-Way Data Flow [ Binding ]**
    - Data flows **one direction [ parent → child ]**, making apps predictable and easier to debug.
5. **JSX**
    - A Syntax to Write **HTML-like code** directly in JavaScript [ for cleaner UI code ]

## React Setup

Pre req:

- Install `node`,
- Install `vs code`
- Install `Vite` [ `Vite` is also used to setup `vue.JS` & Others ]

React setup using `Vite`

1. `npm create vite` [ `@latest` is Optional ]
    - select required Library & Language
2. Run the displayed commands 

<aside>
💡

NOTE:

---

- Instead of installing React Locally
- We can use React without any Installation via `Vite` online setup
- URL → [https://stackblitz.com/edit/vitejs-vite-s1ztzweh?file=index.html&terminal=dev](https://stackblitz.com/edit/vitejs-vite-s1ztzweh?file=index.html&terminal=dev)
</aside>

## `Vite`

What is `Vite` ?

- **`Vite`** is a Next Gen **build tool** and **development server** for front-end web projects
- It was created by **Evan You**, the creator of Vue.js

`Vite` serves two main purposes:

1. **Dev Server**: Starts a local development server with Native ES Modules && **hot module replacement (HMR)** 
    - **Native ES Modules (ESM) →** `Vite` serves your code using native ESM in the browser — no bundling required upfront.
    - HMR → when you change your code, browser updates that part of the App instantly without a full page reload.
    - i.e., why, `Vite` is Faster for Development
2. **Build Tool**: Bundles your code for production using **Rollup** under the hood.
    - **Rollup** is a **JavaScript module bundler**
    - **bundler** is a tool that **takes many files** and **combines them into one or more optimized output files** — usually for use in a browser.
    - i.e., why `Vite` is Efficient for Production

Why we will use `Vite`..?

- Both `vite` & `parcel` are Frontend Build Tools [ recommended by React Officially ]
    - It is Very Popular, customizable, Efficient & Extremely fast [ during both development & Building ] → Used in Large Projects
    - Parcel is lightweight & zero-config→ used for light projects

---

## How HMR Works (Simplified)

1. You change a file (e.g., `Button.jsx`).
2. `Vite` detects the change and recompiles just that module.
3. It sends the updated module to the browser over WebSocket.
4. The browser updates the module **in place** — without a full reload.

## What a Bundler Does:

1. **Reads your entry file** (e.g., `main.js`)
2. **Follows all the imports** and builds a dependency graph
3. **Bundles everything** into one (or a few) output files
4. **Transforms code** (e.g., from JSX or TypeScript to JavaScript)
5. **Optimizes**: minifies, removes dead code (tree-shaking), etc.

## Library ( vs ) Framework

- `Library` → A **library** is a collection of pre-written code (functions, classes, etc.) used to perform specific tasks.
    - You control the flow of your application — you call the library whenever you need it
- `Framework` → A **framework** is a **platform** [ with predefined structure ] for building applications.
    - predefined structure  → It defines **how your code should be written and organized**.
    - **framework** control the flow of your application — it **calls your code** whenever needed  [ This is known as **Inversion of Control ]**

## Some Common Terminology

- `Fast Refresh` → Automatically updates the UI in the browser **instantly** as you save changes to your code.
- `JSX` → A syntax that lets you write **HTML-like code in JavaScript**
- `Babel` → A JavaScript compiler that transforms modern JS (ES6+) and JSX into browser-friendly code
- `SWC` [ Speedy Web Compiler ] → A much **faster alternative** to Babel, written in Rust
    - **Why it matters**: Use the latest JS features and JSX, even if the browser doesn’t support them directly.
- **`Flow`** → a **static type checker** for JavaScript developed by **Meta —** detects **type-related bugs**
    - Now Typescript is used