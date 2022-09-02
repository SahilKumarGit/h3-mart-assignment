const { default: axios } = require("axios")

module.exports.getProductPrice = async (pName) => {
    try {
        const response = await axios.get(`https://api.storerestapi.com/products/${pName}`)
        // console.log(response)
        return response.data?.data?.price || 0
    } catch (e) {
        console.log('axios call error - ', e.message)
        return NaN
    }
}