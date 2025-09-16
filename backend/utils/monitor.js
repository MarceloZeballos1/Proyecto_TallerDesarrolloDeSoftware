const axios = require('axios');
const cheerio = require('cheerio');

async function checkService(url) {
  try {
    const response = await axios.get(url, { timeout: 5000 });
    const $ = cheerio.load(response.data);

    // Ejemplo: verificar que la página tenga un <title>
    if ($('title').length > 0) {
      return "online";
    } else {
      return "error";
    }
  } catch (error) {
    return "offline";
  }
}

module.exports = { checkService };
