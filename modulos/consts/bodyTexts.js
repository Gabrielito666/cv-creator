const getNewY = require('./getNewY');
const { titles } = require('./consts.json');

const SIZE_NAME = 17;
const SIZE_TITLE = 15;
const SIZE_NORMAL = 12;

const getBodyTexts = (MARCO, ASIDE, CINCO_MM_EN_PUNTOS, { name, website, profile, experience, education, color, language, font }) =>
{

    
    const x =         MARCO.x + ASIDE.width + CINCO_MM_EN_PUNTOS;
    const y =         MARCO.y + CINCO_MM_EN_PUNTOS;
    const width =     MARCO.width - ASIDE.width - ( 2 * CINCO_MM_EN_PUNTOS );

    const sumar = getNewY(y)

    const BODY_TEXT =
    
    [
        { text : name,                       color : color,   size: SIZE_NAME, x, width, y : sumar(0 ), font },
        { text : website,                    color : "black", size: SIZE_NORMAL, x, width, y : sumar(25), font },
        { text : titles.profile[language],   color : color,   size: SIZE_TITLE, x, width, y : sumar(35), font },
        { text : profile,                    color : "black", size: SIZE_NORMAL, x, width, y : sumar(25), font },
        { text : titles.experience[language],color : color,   size: SIZE_TITLE, x, width, y : sumar(100), font },
        { text : experience,                 color : "black", size: SIZE_NORMAL, x, width, y : sumar(25), font },
        { text : titles.education[language], color : color,   size: SIZE_TITLE, x, width, y : sumar(100), font },
        { text : education,                  color : "black", size: SIZE_NORMAL, x, width, y : sumar(25), font }
    ]

    return BODY_TEXT;
};
module.exports = getBodyTexts;