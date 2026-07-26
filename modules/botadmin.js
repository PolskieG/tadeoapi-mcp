// modules/botadmin.js

/**
 * API Tadeo - MCP
 * Bot Admin Module
 * Gestión de permisos para Shapes
 */


const admins = new Map();


/**
 * Convertir Shape en Bot Admin
 */
export function enableBotAdmin(shapeId){

    admins.set(shapeId, {

        shapeId,

        role: "Bot Admin",

        enabled: true,

        createdAt:
            new Date().toISOString()

    });


    return {

        success: true,

        shapeId,

        message:
        "Shape convertido en Bot Admin."

    };

}


/**
 * Quitar Bot Admin a un Shape
 */
export function disableBotAdmin(shapeId){

    admins.delete(shapeId);


    return {

        success: true,

        shapeId,

        message:
        "Bot Admin eliminado del Shape."

    };

}


/**
 * Comando /wack
 */
export function wack(shapeId){

    return disableBotAdmin(shapeId);

}


/**
 * Verificar si un Shape es Bot Admin
 */
export function isBotAdmin(shapeId){

    return admins.has(shapeId);

}


/**
 * Obtener información del Shape
 */
export function getBotAdmin(shapeId){

    return admins.get(shapeId) || null;

}


/**
 * Lista de Shapes con Bot Admin
 */
export function listAdmins(){

    return Array.from(
        admins.values()
    );

}


/**
 * Crear moderador desde un Shape Bot Admin
 */
export function createModerator(shapeId){

    if(!isBotAdmin(shapeId)){

        return {

            success:false,

            message:
            "Este Shape no tiene permisos Bot Admin."

        };

    }


    return {

        success:true,

        shapeId,

        role:"Moderator"

    };

}


/**
 * Procesar autorización del Shape
 *
 * Ejemplos:
 * "Vuélvete Bot Admin"
 * "Ya no eres Bot Admin"
 */
export function processAdminRequest(
    shapeId,
    message
){

    const text =
        message.toLowerCase();


    if(
        text.includes("vuélvete bot admin") ||
        text.includes("activate bot admin")
    ){

        return enableBotAdmin(shapeId);

    }


    if(
        text.includes("/wack") ||
        text.includes("ya no eres bot admin")
    ){

        return disableBotAdmin(shapeId);

    }


    return {

        success:false,

        message:
        "Solicitud no reconocida."

    };

}
