
// modules/jsx.js

/**
 * API Tadeo - MCP
 * Generador JSX / React
 */

export function createJSX(filename = "App.jsx", code = "") {
    return {
        name: filename.endsWith(".jsx")
            ? filename
            : `${filename}.jsx`,
        content: code
    };
}

export function createDefaultJSX() {
    return `import React from "react";

export default function App(){

    return (
        <div>
            <h1>
                API Tadeo - MCP
            </h1>

            <p>
                React JSX generated.
            </p>
        </div>
    );

}`;
}

export function createReactProject() {
    return {
        name: "ReactProject",
        files: [
            {
                name: "App.jsx",
                content: createDefaultJSX()
            }
        ]
    };
}
