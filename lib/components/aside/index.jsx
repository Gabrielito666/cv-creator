import Xmlx from "@lek-js/xmlx"
import CONSTS from "../../consts"
import { TextLine } from "../tools"

const AsideTitle = ({children, x, y, family}) =>
<TextLine x={x} y={y} size={18} family={family} color="white" bold>
    {children}
</TextLine>

const Field = ({ label, value, x, y, family }) =>
{
    return <text x={x} y={y}>
        <tspan x={x} dy={0} font-family={family} font-size={16} fill="white" font-weight="bold">{label}</tspan>
        <tspan x={x} dy={20} font-family={family} font-size={16} fill="white">{value}</tspan>
    </text>
}

const AsideBox = ({ width, height, x, y, color, children }) => 
<>
    <rect x={x} y={y} width={width} height={height} fill={color}/>
    {children}
</>

const step = 80;

const Aside = ({ width, height, x, y, color, language, family, contact, skills }) =>
{
    const textX = x + 10;
    const startY = y + 50;

    return <AsideBox width={width} height={height} x={x} y={y} color={color}>
        <AsideTitle x={textX} y={startY} family={family}>{CONSTS.titles.contact[language]}</AsideTitle>
        
        <Field
            label={CONSTS.labels.email[language]}
            value={contact.email}
            x={textX}
            y={startY + (step * 1)}
            family={family}
        />

        <Field
            label={CONSTS.labels.address[language]}
            value={contact.address}
            x={textX}
            y={startY + (step * 2)}
            family={family}
        />

        <Field
            label={CONSTS.labels.phone[language]}
            value={contact.phone}
            x={textX}
            y={startY + (step * 3)}
            family={family}
        />

        <AsideTitle x={textX} y={height/2} family={family}>{CONSTS.titles.skills[language]}</AsideTitle>

        <text x={textX} y={(height/2) + 30} font-family={family} font-size={16} fill="white">
            {
                skills.map(skill =>
                    <tspan x={textX} dy={30} font-family={family} font-size={16} fill="white">
                        {skill}
                    </tspan>
                )
            }
        </text>

    </AsideBox>
}
export default Aside;