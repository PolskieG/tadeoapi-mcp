
// modules/zip.js

/**
 * API Tadeo - MCP
 * ZIP Builder Module
 */

import AdmZip from "adm-zip";
import fs from "fs";


/**
 * Crear ZIP desde una lista de archivos
 *
 * Formato:
 * [
 *   {
 *     name: "index.html",
 *     content: "<html></html>"
 *   }
 * ]
 */
export function createZip(files = []) {

    const zip = new AdmZip();

    for (const file of files) {

        if (!file.name || file.content === undefined) {
            continue;
        }

        zip.addFile(
            file.name,
            Buffer.from(
                file.content,
                "utf8"
            )
        );
    }

    return zip;

}


/**
 * Crear ZIP de un proyecto completo
 *
 * Proyecto:
 * {
 *   name:"MiProyecto",
 *   files:[]
 * }
 */
export function createProjectZip(project) {

    const zip = new AdmZip();

    if (!project || !project.files) {
        throw new Error(
            "Proyecto inválido"
        );
    }


    for (const file of project.files) {

        zip.addFile(
            file.name,
            Buffer.from(
                file.content,
                "utf8"
            )
        );

    }


    return zip;

}


/**
 * Guardar ZIP en disco
 */
export function saveZip(zip, path) {

    zip.writeZip(path);

    return {
        success:true,
        file:path
    };

}


/**
 * Convertir ZIP a Base64
 * Útil para enviarlo mediante MCP
 */
export function zipToBase64(zip) {

    const buffer =
        zip.toBuffer();

    return buffer.toString(
        "base64"
    );

}


/**
 * Crear ZIP y devolver Base64
 */
export function createDownloadableZip(project) {

    const zip =
        createProjectZip(project);


    return {
        filename:
            `${project.name || "project"}.zip`,

        data:
            zipToBase64(zip)
    };

}


/**
 * Agregar archivo extra al ZIP
 */
export function addFile(zip, name, content) {

    zip.addFile(
        name,
        Buffer.from(
            content,
            "utf8"
        )
    );

}


/**
 * Agregar carpeta
 */
export function addFolder(zip, folderName) {

    zip.addFile(
        `${folderName}/.keep`,
        Buffer.from("")
    );

}


/**
 * Leer ZIP existente
 */
export function readZip(path) {

    if (!fs.existsSync(path)) {
        throw new Error(
            "Archivo ZIP no encontrado"
        );
    }


    return new AdmZip(path);

}
