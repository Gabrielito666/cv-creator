const getNewY = require('./getNewY');
const { labels, titles } = require('./consts.json');

const SIZE_TITLE = 15;
const SIZE_LABEL = 13;
const SIZE_NORMAL = 10;

const getAsideTexts = (MARCO, ASIDE, CINCO_MM_EN_PUNTOS, { email, phone, address, skills, language, font }) =>
{
    const x =         MARCO.x + CINCO_MM_EN_PUNTOS;
    const y =         MARCO.y + CINCO_MM_EN_PUNTOS;
    const width =     ASIDE.width - ( 2 * CINCO_MM_EN_PUNTOS );
    const color = "white";

    const sumar = getNewY(y)

    const ASIDE_TEXT =
    [
        { text : titles.contact[language],  color, size : SIZE_TITLE,  x, y : sumar(0 ), width, font },
        { text : labels.email[language],    color, size : SIZE_LABEL,  x, y : sumar(45), width, font },
        { text : email,                     color, size : SIZE_NORMAL, x, y : sumar(15), width, font },
        { text : labels.phone[language],    color, size : SIZE_LABEL,  x, y : sumar(35), width, font },
        { text : phone,                     color, size : SIZE_NORMAL,  x, y : sumar(15), width, font },
        { text : labels.address[language],  color, size : SIZE_LABEL,  x, y : sumar(35), width, font },
        { text : address,                   color, size : SIZE_NORMAL,  x, y : sumar(15), width, font },
        { text : titles.skills[language],   color, size : SIZE_TITLE, x, y : sumar(45), width, font },
        { text : "",                        color, size : SIZE_NORMAL, x, y : sumar(25), width, font },
        ...skills.map(txt => ({ text : txt, color, size : SIZE_NORMAL, x, y : sumar(25), width, font }))
    ];

    return ASIDE_TEXT;
};
module.exports = getAsideTexts;