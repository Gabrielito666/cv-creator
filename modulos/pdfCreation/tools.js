const crearMarco = (doc, { x, y, width, height, stroke, color }) =>
{
    doc.lineWidth(stroke).strokeColor(color).rect(x, y, width, height).stroke();
}
const crearAside = (doc, { x, y, width, height, color }) =>
{
    doc.fillColor(color).rect(x, y, width, height).fill();
}
const crearTexto = (doc, texts) =>
{
    texts.forEach(({text, color, size, x, y, width, font="Arial" }) =>
    {
        doc.fillColor(color).fontSize(size).font(font).text(text, x, y, {width});
    });
}

module.exports = { crearAside, crearTexto, crearMarco };