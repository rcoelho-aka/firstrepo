import http from 'http'
import url from 'url'
import routes from './routes/routes.js'

const PORT = 3000


const server = http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url, true)
    let trimmedPath = parsedUrl.pathname.replace(/^\/|\/+$/g, '')

    let result
    try {
        if (!routes.hasOwnProperty(trimmedPath))
            throw new Error('Route not found: ' + trimmedPath)

        result = routes[trimmedPath]()
    } catch (e) {
        console.error(e)
    }

    result = result || 'That route has no power here.'

    res.setHeader('Content-Type', 'application/json')
    res.writeHead(200)
    res.end(JSON.stringify(result))
})

server.listen(PORT, function () {
    console.log('We have a server running on PORT:', PORT)
})