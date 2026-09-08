import fs from "node:fs";

const sourcePath = "/home/ubuntu/upload/apartmentcorp_portfolio_bundle.js";
const outputPath = "/home/ubuntu/aptcorp-orgchart/public_portfolio_links.json";
const source = fs.readFileSync(sourcePath, "utf8");
const arrayStart = source.indexOf("const rr=[");
const arrayEnd = source.indexOf("],cE=", arrayStart);

if (arrayStart < 0 || arrayEnd < 0) {
  throw new Error("Could not locate the public portfolio records in the downloaded bundle.");
}

const arrayText = source.slice(arrayStart, arrayEnd + 1);
const records = arrayText
  .split("},{name:")
  .map((record, index) => (index === 0 ? record : `{name:${record}`))
  .map((record) => {
    const readString = (key) => {
      const match = record.match(new RegExp(`${key}:"((?:\\\\.|[^"\\\\])*)"`));
      return match ? JSON.parse(`"${match[1]}"`) : "";
    };
    return {
      name: readString("name"),
      address: readString("address"),
      state: readString("state"),
      type: readString("type"),
      externalLink: readString("externalLink"),
    };
  })
  .filter((record) => record.name);

fs.writeFileSync(outputPath, `${JSON.stringify(records, null, 2)}\n`);
console.log(`Extracted ${records.length} public portfolio records.`);
console.log(`Records with official websites: ${records.filter((record) => record.externalLink).length}`);
for (const record of records.filter((record) => record.externalLink)) {
  console.log(`${record.name}\t${record.externalLink}`);
}
