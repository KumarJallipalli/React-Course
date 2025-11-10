# 02. React Project Setup [ 27/10/2025 ]

---

## React Project Setup

- We can setup React in 2 Ways
    1. Remote Project Setup using Code Sandbox → `react.new`
    2. Local React Project Setup using Node & VS code
- If we want to create a New React Project Locally,
    - We need to Use some addition Tools [ like vite, parcel etc.. ]

## Why we need Additional Tools to Use React ?

- Why can’t we use just plain HTML & JS files & link together ?
    - React Code contains JSX
    - This is NOT understood by Browser [ Since Browser is the one which executes our code ]
    - This JSX code needs to be Transpiled in order to understand by Browser
    - Hence we need Additional Tools
- Moreover these Tools are called Build Tools → which helps to Optimize & improve the Performance

## What is Build Tool ?

- **`build tool`** → Software that **automates the process of building/Transforming** the Source code into a final Executable/Deployable thing
    - Building [ Build Process ] Involves
        1. compiling
        2. linking
        3. packaging
        4. Dependency Management
        5. Testing
        6. and sometimes deploying
- Basically It automates the Build Process
    - i.e., It Automates the Creation of Executable App from Source Code ( or )
    - i.e., Transforms Source Code to Executable App

---

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

- Instead of installing React Locally
- We can use React without any Installation via `Vite` online setup
- URL → [https://stackblitz.com/edit/vitejs-vite-s1ztzweh?file=index.html&terminal=dev](https://stackblitz.com/edit/vitejs-vite-s1ztzweh?file=index.html&terminal=dev)
</aside>

Why we will use `Vite`..?

- Both `vite` & `parcel` are Frontend Build Tools [ recommended by React Officially ]
    - It is Very Popular, customizable, Efficient & Extremely fast [ during both development & Building ] → Used in Large Projects
    - Parcel is lightweight & zero-config→ used for light projects

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