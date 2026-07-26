
// modules/ai-router.js

/**
 * API Tadeo - MCP
 * AI Router Module
 */


// Modelos disponibles
const models = {

    chatgpt: {
        name: "ChatGPT",
        type: "chat"
    },

    gemini: {
        name: "Gemini",
        type: "chat"
    },

    claude: {
        name: "Claude",
        type: "chat"
    }

};


/**
 * Obtener modelos disponibles
 */
export function getModels(){

    return Object.values(models);

}


/**
 * Buscar modelo por nombre
 */
export function getModel(name){

    return models[name] || null;

}


/**
 * Seleccionar modelo automáticamente
 */
export function selectModel(task){

    task = task.toLowerCase();


    if(
        task.includes("codigo") ||
        task.includes("programar") ||
        task.includes("javascript") ||
        task.includes("python")
    ){

        return models.chatgpt;

    }


    if(
        task.includes("imagen") ||
        task.includes("visual")
    ){

        return models.gemini;

    }


    if(
        task.includes("analisis") ||
        task.includes("documento")
    ){

        return models.claude;

    }


    return models.chatgpt;

}


/**
 * Crear solicitud IA
 */
export function createAIRequest({

    model,
    prompt,
    options = {}

}){

    return {

        model,

        prompt,

        temperature:
            options.temperature ?? 0.7,

        maxTokens:
            options.maxTokens ?? 2048

    };

}


/**
 * Ejecutar solicitud
 * (Conexión API se agrega después)
 */
export async function runAI(request){

    return {

        success:true,

        model:request.model,

        response:null,

        message:
        "AI Router preparado para conectar proveedores."

    };

}


/**
 * Registrar modelo personalizado
 */
export function addModel(

    id,
    name,
    type = "chat"

){

    models[id] = {

        name,

        type

    };


    return models[id];

}
