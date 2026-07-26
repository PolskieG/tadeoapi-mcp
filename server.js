
// server.js

/**
 * API Tadeo - MCP
 * Main Server
 */


import express from "express";
import cors from "cors";

import { Server } from "@modelcontextprotocol/sdk/server/index.js";


// Modules

import {
    createHTMLProject
} from "./modules/html.js";

import {
    createCSSProject
} from "./modules/css.js";

import {
    createJavaScriptProject
} from "./modules/javascript.js";

import {
    createReactProject
} from "./modules/jsx.js";

import {
    createTSProject
} from "./modules/typescript.js";

import {
    createPHPProject
} from "./modules/php.js";

import {
    createCProject
} from "./modules/c.js";

import {
    createCPPProject
} from "./modules/cpp.js";

import {
    createDownloadableZip
} from "./modules/zip.js";

import {
    deepSearch
} from "./modules/deepsearch.js";

import {
    generateImage
} from "./modules/image.js";

import {
    generateVideo
} from "./modules/video.js";

import {
    getModels,
    selectModel,
    runAI
} from "./modules/ai-router.js";

import {
    enableBotAdmin,
    disableBotAdmin,
    isBotAdmin
} from "./modules/botadmin.js";



const PORT = 3000;



// =====================
// MCP SERVER
// =====================

const mcp = new Server({

    name:
    "API Tadeo - MCP",

    version:
    "1.0.0"

});



// =====================
// CODE GENERATOR
// =====================


mcp.tool(

    "generate_code_project",

    {
        description:
        "Genera proyectos de código."
    },

    async ({type})=>{


        let project;


        switch(type){

            case "html":
                project =
                createHTMLProject();
                break;


            case "css":
                project =
                createCSSProject();
                break;


            case "javascript":
                project =
                createJavaScriptProject();
                break;


            case "jsx":
                project =
                createReactProject();
                break;


            case "typescript":
                project =
                createTSProject();
                break;


            case "php":
                project =
                createPHPProject();
                break;


            case "c":
                project =
                createCProject();
                break;


            case "cpp":
                project =
                createCPPProject();
                break;


            default:

                return {

                    content:[
                        {
                            type:"text",
                            text:
                            "Lenguaje no soportado."
                        }
                    ]

                };

        }



        return {

            content:[

                {
                    type:"text",
                    text:
                    JSON.stringify(project)

                }

            ]

        };


    }

);



// =====================
// ZIP BUILDER
// =====================


mcp.tool(

    "create_zip",

    {
        description:
        "Crea un ZIP de un proyecto."
    },

    async ({project})=>{


        const zip =
        createDownloadableZip(project);



        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(zip)

                }

            ]

        };


    }

);



// =====================
// DEEP SEARCH
// =====================


mcp.tool(

    "deep_search",

    {
        description:
        "Realiza búsqueda profunda."
    },


    async ({query})=>{


        const result =
        await deepSearch(query);



        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(result)

                }

            ]

        };


    }

);



// =====================
// IMAGE
// =====================


mcp.tool(

    "generate_image",

    {
        description:
        "Genera imágenes."
    },


    async(args)=>{


        const result =
        await generateImage(args);


        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(result)

                }

            ]

        };

    }

);



// =====================
// VIDEO
// =====================


mcp.tool(

    "generate_video",

    {
        description:
        "Genera videos."
    },


    async(args)=>{


        const result =
        await generateVideo(args);


        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(result)

                }

            ]

        };


    }

);



// =====================
// AI ROUTER
// =====================


mcp.tool(

    "ai_models",

    {
        description:
        "Lista modelos IA."
    },


    async()=>{


        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(
                        getModels()
                    )

                }

            ]

        };

    }

);



mcp.tool(

    "ai_request",

    {
        description:
        "Ejecuta una solicitud IA."
    },


    async(args)=>{


        const model =
        selectModel(
            args.task || ""
        );


        const result =
        await runAI({

            model,

            prompt:
            args.prompt

        });



        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(result)

                }

            ]

        };

    }

);



// =====================
// BOT ADMIN
// =====================


mcp.tool(

    "bot_admin",

    {
        description:
        "Administra permisos Bot Admin de Shapes."
    },


    async({

        action,

        shapeId

    })=>{


        let result;


        if(action==="enable"){

            result =
            enableBotAdmin(shapeId);

        }


        if(action==="disable"){

            result =
            disableBotAdmin(shapeId);

        }


        if(action==="check"){

            result = {

                admin:
                isBotAdmin(shapeId)

            };

        }



        return {

            content:[

                {

                    type:"text",

                    text:
                    JSON.stringify(result)

                }

            ]

        };


    }

);




// =====================
// EXPRESS STATUS
// =====================


const app = express();


app.use(cors());

app.use(express.json());



app.get("/",(req,res)=>{


    res.json({

        name:
        "API Tadeo - MCP",

        version:
        "1.0.0",

        status:
        "online"

    });


});



app.listen(PORT,()=>{


    console.log(
        "API Tadeo - MCP running on port",
        PORT
    );


});
