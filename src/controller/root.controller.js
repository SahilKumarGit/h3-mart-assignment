const { getProductPrice } = require("../utility/axios-api-call");
const { readXlsx, writeXlsx } = require("../utility/read-write-xl");

module.exports.xl_To_xl_Generate = async (req, res) => {
    try {

        // get files from request
        const files = req.files
        if (files.length == 0) return res.status(400).send({ status: !true, message: 'Please select a xlsx file' })

        // select 1st file
        const file = files[0]
        if (file.mimetype != 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') return res.status(400).send({ status: !true, message: 'Please select a valid XL file that ends with **.xlsx' })

        // get json obj from xlsx file
        const jsonData = readXlsx(file)

        // console.log(jsonData)

        // extract json and add price
        for (let sheet in jsonData) {
            for (let eachRow of jsonData[sheet]) {

                if (!eachRow.product_code) return res.status(400).send({ status: !true, message: `Error - there is a missing key name 'product_code' in ${sheet}` })
                eachRow.price = await getProductPrice(eachRow.product_code)
                // console.log(eachRow)

            }
        }

        // now convert json (obj) to xlsx (buffer)
        const xlsxBuffer = writeXlsx(jsonData);

        // set content type , disposition and send buffer data 🤯
        res.set({
            "Content-Type": 'xlsx',
            "Content-Disposition": `attachment; filename=${file.originalname}`
        });
        res.end(xlsxBuffer);

    } catch (e) {
        console.log('⚠️', e.message)
        return res.status(500).send({ status: !true, message: e.message })
    }
};
