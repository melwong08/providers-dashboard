const express = import("express");
const cors = import("cors");

//error handlers
const errorHandler = import("./errors/errorHandler");
const notFound = import("./errors/notFound");
//router paths

const app = express();

app.use(cors());
app.use(express.json());

app.use(notFound);
app.use(errorHandler);


// ----- csv parse/sync code -------
// import assert from 'assert';
// import { parse } from 'csv-parse';

// const input = `
// "key_1","key_2"
// "value 1","value 2"
// `;
// const records = parse(input, {
//   columns: true,
//   skip_empty_lines: true
// });
// assert.deepStrictEqual(
//   records,
//   [{ key_1: 'value 1', key_2: 'value 2' }]
// );

module.exports = app;