const { httpGet } = require("./mock-http-interface");

async function arnieHttpGet(url) {
  const result = await httpGet(url);
  if (result.status === 200) {
    return {
      "Arnie Quote": JSON.parse(result.body).message,
    };
  }

  return {
    FAILURE: "Your request has been terminated",
  };
}

const getArnieQuotes = async (urls) => {
  const results = await Promise.all(urls.map((url) => arnieHttpGet(url)));
  return results;
};

module.exports = {
  getArnieQuotes,
};
