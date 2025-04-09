import Xmlx from "@lek-js/xmlx";
import getCharsWidth from "../../char-width";
export const Box = ({ width, height, x, y, color, children }) =>
<>
    <rect x={x} y={y} width={width} height={height} stroke={color} fill="none" stroke-width="3"/>
    {children}
</>

export const TextLine = ({ x, y, size, color, family, children, bold }) => 
<text x={x} y={y} font-family={family} font-size={size} fill={color} font-weight={bold ? "bold" : "normal"}>
    {children}
</text>

export const TextBox = ({ x, y, family, width, size, color, children, spacing }) =>
{
    const words = children.split(" ");
    const lines = [];
    const currentLine = [];
    for(const word of words)
    {
        const line = currentLine.concat(word).join(" ");
        const lineWidth = getCharsWidth(line, family, size);
        if(lineWidth > width)
        {
            lines.push(currentLine.join(" "));
            currentLine.length = 0;
        }
        currentLine.push(word);
    }
    lines.push(currentLine);
    return <text x={x} y={y} font-family={family} font-size={size} fill={color}>
        {lines.map(line => <tspan x={x} dy={spacing}>{line}</tspan>)}
    </text>
}