const http = require("http")
const app = require("./app")

const server = http.createServer(app)

server.listen("3333", () => {
    console.log("reussis")
})