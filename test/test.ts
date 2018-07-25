import { writeFileSync, readFileSync } from 'fs';
import { avroToTypeScript, RecordType } from "../lib/"

const schemaText = readFileSync(__dirname + "/example.avsc", "UTF8");
const schema = JSON.parse(schemaText);
console.log(avroToTypeScript(schema as RecordType));

