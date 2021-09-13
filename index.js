const axios = require("axios").default;
/** 
 * @param {string} long - The long url to shorten
 * @param {string} [short] - The part after `1pt.co/` that will redirect to your long URL. If this paramter is not provided or the requested short URL is already taken, it will return a random 5-letter string
 * @returns {Promise<{status: number, message: string, short: string, long: string}>}
 * @example
 * const shorten = require("1pt.js");
 * shorten("https://www.google.com/", "google").then(({status, message, short, long}) => {
 * console.log(status, message, short, long);
 * });
 */
module.exports = async(long, short) => {
    return axios({
        method: "GET",
        url: `https://api.1pt.co/addURL?long=${encodeURI(long)}${(short) ? `&short=${short}` : ""}`,
    }).then(({data}) => {
        return data;
    }).catch((err) => {throw new Error(err)});
}