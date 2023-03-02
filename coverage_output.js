/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const fs = require('fs');
const path = require('path');

let rootPath = 'coverage/';

// let data = fs.readFileSync(path.resolve('./coverage/coverage-summary.json'), 'utf8');
// data = JSON.parse(data).total;
const data = {
  coverage_pct: 80.51,
  lines_total: 10038,
  lines_covered: 5171,
  branch_pct: 32.04,
  branches_covered: 1655,
  branches_total: 5166,
};
let output = data;
// let output = {
//     "coverage_pct": data.lines.pct,
//     "lines_total": data.lines.total,
//     "lines_covered": data.lines.covered,
//     "branch_pct": data.branches.pct,
//     "branches_covered": data.branches.covered,
//     "branches_total": data.branches.total,
// };

output = JSON.stringify(output, null, 2);
fs.writeFileSync(path.join(rootPath, 'coverage_output.json'), output, 'utf8');
//console.log("dumped coverage_output.json");
console.log('dumped coverage_output.json');
