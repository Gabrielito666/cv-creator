const getAsideTexts = require('./asideTexts');
const getBodyTexts = require('./bodyTexts');

const QUINCE_MM_EN_PUNTOS = 15 * 2.83465;
const UN_MM_EN_PUNTOS = 1 / 0.3528;
const CINCO_MM_EN_PUNTOS = UN_MM_EN_PUNTOS * 5;

const getConsts = (doc, data) =>
{

    const {
        language,   color,      font,       name,       website,        email,
        phone,      address,    skills,     profile,    experience,     education
    } = data;

    const MARCO =
    {
        x :         QUINCE_MM_EN_PUNTOS,
        y :         QUINCE_MM_EN_PUNTOS,
        width :     doc.page.width - 2 * QUINCE_MM_EN_PUNTOS,
        height :    doc.page.height - 2 * QUINCE_MM_EN_PUNTOS,
        stroke :    UN_MM_EN_PUNTOS,
        color
    }
    const ASIDE =
    {
        x :         QUINCE_MM_EN_PUNTOS,
        y :         QUINCE_MM_EN_PUNTOS,
        width :     MARCO.width / 3,
        height :    MARCO.height,
        color
    }

    const ASIDE_TEXT = getAsideTexts(
        MARCO, ASIDE, CINCO_MM_EN_PUNTOS, { email, phone, address, skills, language, font }
    );
    const BODY_TEXT = getBodyTexts(
        MARCO, ASIDE, CINCO_MM_EN_PUNTOS, { name, website, profile, experience, education, color, language, font }
    );
    
    return { MARCO, ASIDE, ASIDE_TEXT, BODY_TEXT };
};
module.exports = getConsts;