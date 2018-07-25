"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var lib_1 = require("../lib/");
var schemaText = fs_1.readFileSync(__dirname + "/example.avsc", "UTF8");
var schema = JSON.parse(schemaText);
console.log(lib_1.avroToTypeScript(schema));
