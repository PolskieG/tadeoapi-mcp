// modules/css.js

/**
 * API Tadeo - MCP
 * Generador de proyectos CSS
 */

/**
 * Crea un archivo CSS personalizado.
 */
export function createCSS(filename = "style.css", css = "") {
    return {
        name: filename.endsWith(".css")
            ? filename
            : `${filename}.css`,
        content: css
    };
}

/**
 * CSS base para proyectos.
 */
export function createDefaultCSS() {
    return `*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

:root{
    --primary:#2563eb;
    --secondary:#1e40af;
    --background:#f5f5f5;
    --text:#222;
    --radius:10px;
}

body{
    font-family:Arial,Helvetica,sans-serif;
    background:var(--background);
    color:var(--text);
    line-height:1.6;
}

header{
    background:var(--primary);
    color:white;
    padding:20px;
    text-align:center;
}

main{
    max-width:1000px;
    margin:auto;
    padding:30px;
}

button{
    background:var(--primary);
    color:white;
    border:none;
    border-radius:var(--radius);
    padding:12px 20px;
    cursor:pointer;
    transition:.25s;
}

button:hover{
    background:var(--secondary);
}

input,
textarea,
select{
    width:100%;
    padding:10px;
    margin:8px 0;
    border:1px solid #ccc;
    border-radius:var(--radius);
}

.card{
    background:white;
    border-radius:var(--radius);
    padding:20px;
    box-shadow:0 2px 8px rgba(0,0,0,.1);
    margin:20px 0;
}

.container{
    width:90%;
    max-width:1200px;
    margin:auto;
}

.flex{
    display:flex;
    gap:20px;
}

.grid{
    display:grid;
    gap:20px;
}

.center{
    display:flex;
    justify-content:center;
    align-items:center;
}`;
}

/**
 * Genera un proyecto CSS.
 */
export function createCSSProject() {
    return {
        name: "CSS Project",
        files: [
            {
                name: "style.css",
                content: createDefaultCSS()
            }
        ]
    };
}

/**
 * Une varios archivos CSS.
 */
export function mergeCSS(files = []) {
    return files.join("\n\n");
}

/**
 * Minifica CSS.
 */
export function minifyCSS(css = "") {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, "")
        .replace(/\n/g, "")
        .replace(/\s+/g, " ")
        .replace(/\s*([{}:;,])\s*/g, "$1")
        .trim();
}

/**
 * Da formato al CSS.
 */
export function formatCSS(css = "") {
    return css.trim();
}
