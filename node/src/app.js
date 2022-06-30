const express = require("express");
const cors = require("cors");

//error handlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
//router path

const app = express();

/* ----- csv parse/sync code -------
import assert from 'assert';
import { parse } from 'csv-parse/sync';

const input = `
"key_1","key_2"
"value 1","value 2"
`;
const records = parse(input, {
  columns: true,
  skip_empty_lines: true
});
assert.deepStrictEqual(
  records,
  [{ key_1: 'value 1', key_2: 'value 2' }]
);
*/ 

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });