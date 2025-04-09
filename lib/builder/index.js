const builder = require('@lek-js/xmlx/builder');
const path = require('path');

const input = path.resolve(process.cwd(), "index.jsx");
const output = path.resolve(process.cwd(), "bundle.js");

builder(input, output, {});