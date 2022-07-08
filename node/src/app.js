const express = require("express");
const cors = require("cors");

//error handlers
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
//router paths

const app = express();

app.use(cors());
app.use(express.json());

//use routes
// app.use("/reservations", reservationsRouter);
// app.use("/tables", tablesRouter);

app.use(notFound);
app.use(errorHandler);

// ----- csv parse/sync code -------
import assert from 'assert';
import { parse } from 'csv-parse';

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

module.exports = app;