const withLinaria = require("next-linaria");
require("dotenv").config();

const repoName = "/nextjs-linaria";
module.exports = withLinaria({
  linaria: {
    /* linaria options here */
  },
  assetPrefix: process.env.GITHUB_PAGES ? repoName : "",
});
