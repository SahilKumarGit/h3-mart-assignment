const xlsx = require("xlsx");

function readXlsx(file) {
    const fileResp = xlsx.read(file.buffer);
    // get all sheets list
    const sheetArr = fileResp.SheetNames;
    const temp = {}
    // extract all sheet
    for (let each of sheetArr) {
        //add each sheet value as json array
        temp[each] = xlsx.utils.sheet_to_json(fileResp.Sheets[each]);
    }
    // console.log(temp)
    return temp
}


function writeXlsx(jsonData) {
    // create word book
    const wb = xlsx.utils.book_new()
    // generate each sheet
    for (let each in jsonData) {
        // create word sheet
        let ws = xlsx.utils.json_to_sheet(jsonData[each])
        // combine both with sheet name
        xlsx.utils.book_append_sheet(wb, ws, each)
    }
    // generate buffer
    const sheetBuffer = xlsx.write(wb, { bookType: 'xlsx', type: 'buffer' })
    return sheetBuffer
}

module.exports = { readXlsx, writeXlsx };
