const PDFDocument = require('pdfkit');
const fs = require('fs');

const getConsts = require('../consts/getConsts');
const { crearAside, crearTexto, crearMarco } = require('./tools');

const createPDF = (filename, data) =>
{
    const doc = new PDFDocument({ size: 'letter' });

    const { MARCO, ASIDE, ASIDE_TEXT, BODY_TEXT } = getConsts(doc, data);

    doc.pipe(fs.createWriteStream(filename));

    crearMarco(doc, MARCO);
    crearAside(doc, ASIDE);
    crearTexto(doc, ASIDE_TEXT);
    crearTexto(doc, BODY_TEXT);

    doc.end();
}
module.exports = createPDF;