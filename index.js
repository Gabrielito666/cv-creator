const xmlValidation = require('./modulos/xmlValidation');
const createPDF = require('./modulos/pdfCreation');
const path = require('path');

const [_, __, pathCvml, filename ] = process.argv;
const absolutePath = path.resolve(process.cwd(), pathCvml);
const absoluteFilename = path.resolve(process.cwd(), filename);

try
{
    (async() =>
    {
        const object = await xmlValidation(absolutePath);
        createPDF(absoluteFilename, object);
    })();
}
catch(err)
{
    console.log("CV-Creator error:");
    console.log(err.message);
}