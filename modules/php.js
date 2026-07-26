
// modules/php.js

/**
 * API Tadeo - MCP
 * Generador PHP
 */

export function createPHP(filename = "index.php", code = "") {

    return {
        name: filename.endsWith(".php")
            ? filename
            : `${filename}.php`,
        content: code
    };

}

export function createDefaultPHP(){

    return `<?php

echo "Hello from API Tadeo - MCP";

function hello($name){

    return "Hello ".$name;

}

?>`;

}

export function createPHPProject(){

    return {
        name:"PHPProject",
        files:[
            {
                name:"index.php",
                content:createDefaultPHP()
            }
        ]
    };

}
