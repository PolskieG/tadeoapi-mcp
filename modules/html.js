
// modules/html.js

/**
 * API Tadeo - MCP
 * Generador de proyectos HTML
 */

export function createHTMLProject(projectName = "MyWebsite") {
    return {
        name: projectName,
        files: [
            {
                name: "index.html",
                content: createIndexHTML(projectName)
            },
            {
                name: "style.css",
                content: createStyleCSS()
            },
            {
                name: "script.js",
                content: createScriptJS()
            }
        ]
    };
}

export function createIndexHTML(title = "My Website") {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>

    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>${title}</h1>
</header>

<main>
    <h2>Welcome!</h2>

    <p>
        This project was generated with
        <strong>API Tadeo - MCP</strong>.
    </p>

    <button id="helloButton">
        Click me
    </button>
</main>

<script src="script.js"></script>

</body>
</html>`;
}

export function createStyleCSS() {
    return `*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    background:#f5f5f5;
    color:#222;
}

header{
    background:#222;
    color:white;
    padding:20px;
    text-align:center;
}

main{
    max-width:900px;
    margin:auto;
    padding:40px;
}

button{
    margin-top:20px;
    padding:12px 24px;
    cursor:pointer;
}`;
}

export function createScriptJS() {
    return `document
.getElementById("helloButton")
.addEventListener("click",()=>{

    alert("Hello from API Tadeo - MCP!");

});`;
}

/**
 * Genera un archivo HTML personalizado.
 */
export function createHTML(filename, html) {
    return {
        name: filename.endsWith(".html")
            ? filename
            : filename + ".html",
        content: html
    };
}

/**
 * Genera un proyecto HTML completo.
 */
export function generateWebsite(title) {
    return createHTMLProject(title);
}
