const config = require('app/config')
const createStatic = require('app/static')
const Url = require('url')

const server = createStatic(config)

server.listen(config.static.url.port, function () {
  const staticUrl = Url.format(config.static.url)
  console.log(`static server listening at ${staticUrl}`)
})