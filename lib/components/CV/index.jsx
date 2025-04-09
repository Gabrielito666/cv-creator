import Xmlx from "@lek-js/xmlx";
import {Box} from "../tools";
import Aside from "../aside";
import Main from "../main";

const CV = ({ width=816, height=1056, head, body})=>
{    
    const boxMargin = 50
    const [boxWidth, boxHeight] = [width - (boxMargin * 2), height - (boxMargin * 2)];
    const [boxX, boxY] = [boxMargin, boxMargin];

    const [asideWidth, asideHeight] = [boxWidth / 3, boxHeight];
    const [asideX, asideY] = [boxX, boxY];

    const [mainWidth, mainHeight] = [boxWidth - asideWidth, boxHeight];
    const [mainX, mainY] = [boxX + asideWidth, boxY];

    return '<?xml version="1.0" encoding="UTF-8" standalone="no"?>' +
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <Box width={boxWidth} height={boxHeight} x={boxX} y={boxY} color={head.color}>
            <Aside
                width={asideWidth}
                height={asideHeight}
                x={asideX}
                y={asideY}
                color={head.color}
                family={head.family}
                language={head.language}
                contact={body.contact}
                skills={body.skills}
            />
            <Main
                width={mainWidth}
                height={mainHeight}
                x={mainX}
                y={mainY}
                color={head.color}
                family={head.family}
                language={head.language}
                name={body.name}
                profile={body.profile}
                experience={body.experience}
                website={body.website}
                education={body.education}
            />
        </Box>
    </svg>
}
export default CV;