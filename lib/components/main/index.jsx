import Xmlx from "@lek-js/xmlx";
import { TextBox, TextLine } from "../tools";
import CONSTS from "../../consts";

const step = 50;
const Main = ({ width, height, x, y, color, family, language, name, profile, experience, website, education }) =>
{
    const textX = x + 20;
    const nameY = y + 40;
    const profileY = nameY + 150;
    const experienceY = height/2;
    const educationY = height - (height/8)

    return <>
        <TextLine x={textX} y={nameY} size={30} family={family} color={color} bold>
            {name}
        </TextLine>
        <TextLine x={textX} y={nameY + 40} size={25} family={family} color="black">
            {website}
        </TextLine>
        <TextLine x={textX} y={profileY} size={25} family={family} color={color} bold>
            {CONSTS.titles.profile[language]}
        </TextLine>
        <TextBox x={textX} y={profileY+step} family={family} width={width - 40} size={20} color="black" spacing={30}>
            {profile}
        </TextBox>

        <TextLine x={textX} y={experienceY} size={25} family={family} color={color}  bold>
            {CONSTS.titles.experience[language]}
        </TextLine>
        <TextBox x={textX} y={experienceY + step} family={family} width={width - 40} size={20} color="black" spacing={30}>
            {experience}
        </TextBox>

        <TextLine x={textX} y={educationY} size={25} family={family} color={color}  bold>
            {CONSTS.titles.education[language]}
        </TextLine>
        <TextBox x={textX} y={educationY + step} family={family} width={width - 40} size={20} color="black" spacing={30}>
            {education}
        </TextBox>
    </>
}

export default Main;