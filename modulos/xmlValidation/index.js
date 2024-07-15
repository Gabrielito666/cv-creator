const fs = require('fs');
const libxmljs = require('libxmljs2');
const path = require('path');
const getJson = require('./xmlToJson');

const xsdPath = path.resolve(__dirname, "./schema.xsd");

const xsdContent = fs.readFileSync(xsdPath, 'utf8');
const xsdDoc = libxmljs.parseXml(xsdContent);

const validateXML = async(xmlPath) =>
{
    const xmlContent = fs.readFileSync(xmlPath, 'utf8');
    const xmlDoc = libxmljs.parseXml(xmlContent);

    const isValid = xmlDoc.validate(xsdDoc);


    if (isValid) {
        return await getJson(xmlDoc);
    } else {
        const errors = xmlDoc.validationErrors.map((err) => err.message).join('\n\t');
        throw new Error('CVML sintaxis error:\n\n\t' + errors)
    }
}
module.exports = validateXML;