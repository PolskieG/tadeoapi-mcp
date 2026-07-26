// modules/cpp.js

/**
 * API Tadeo - MCP
 * Generador C++
 */

export function createCPP(filename="main.cpp", code=""){

    return {
        name: filename.endsWith(".cpp")
            ? filename
            : `${filename}.cpp`,
        content:code
    };

}

export function createDefaultCPP(){

    return `#include <iostream>

using namespace std;

int main(){

    cout << "Hello from API Tadeo - MCP";

    return 0;
}`;
}

export function createCPPProject(){

    return {
        name:"CPPProject",
        files:[
            {
                name:"main.cpp",
                content:createDefaultCPP()
            }
        ]
    };

}
