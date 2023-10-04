const app = require("./dist/api/index")
const serverless = require("serverless-http")

exports.handler = serverless(app.default)

