import Xmlx from "@lek-js/xmlx";
import fs from "fs";
import CV from "./lib/components/CV";
import { execSync } from "child_process";
import getJSON from "./lib/get-json";


const path = require('path');

const [_, __, pathCvml, filename ] = process.argv;

const input = fs.readFileSync(path.resolve(process.cwd(), pathCvml), "utf-8");
const temp = path.resolve(process.cwd(), "temp.svg");
const output = path.resolve(process.cwd(), filename);

try
{
    const object = getJSON(input);
    fs.writeFileSync(temp, <CV head={object.head} body={object.body}/>, "utf-8");
    execSync(`rsvg-convert ${temp} -f pdf -o ${output}`);
    fs.unlinkSync(temp);
}
catch(err)
{
    console.log("CV-Creator error:");
    console.log(err.message);
}