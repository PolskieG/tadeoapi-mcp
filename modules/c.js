// modules/c.js

/**
 * API Tadeo - MCP
 * Generador C
 */

export function createC(filename="main.c", code=""){

    return {
        name: filename.endsWith(".c")
            ? filename
            : `${filename}.c`,
        content:code
    };

}

export function createDefaultC(){

    return `#include <stdio.h>

int main(){

    printf("Hello from API Tadeo - MCP");

    return 0;
}`;
}

export function createCProject(){

    return {
        name:"CProject",
        files:[
            {
                name:"main.c",
                content:createDefaultC()
            }
        ]
    };

}
