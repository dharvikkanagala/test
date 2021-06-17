const csv = require('csvtojson')
const fs = require("fs");
async function fetchData(matchPath,deliverPath) {
    const matchJson = csv().fromFile(matchPath)
    const deliverJson = csv().fromFile(deliverPath)

    const dataJson = Promise.all([matchJson, deliverJson])
     const data = await dataJson;
     return data;
}
module.exports = fetchData;