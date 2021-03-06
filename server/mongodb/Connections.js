var Mongoose = require('mongoose').Mongoose
//mongoose.Promise = global.Promise
var environment = require('../environment')
var logger = require('../logger')
var db = new Mongoose;

var envType = process.env.APP_ENVIRONMENT || 'development'
db.connect(environment[envType].databaseurl, { useMongoClient: true })
var dbEvents = db.connection

dbEvents.on('error', console.error.bind(console, 'Database Connection Error:'))
dbEvents.once('open', function () {
    logger.debug('Connected to the database successfully.')

    var app = require('../app')
    var http = require('http')
    /**
     * Get port from environment and store in Express.
     */
    var port = normalizePort(process.env.PORT || 8080)
    app.set('port', port)
    /**
  * Create HTTP server.
  */
    server = http.createServer(app)
    var ipaddress = "0.0.0.0"
    /**
     * Listen on provided port, on all network interfaces.
     */
    server.listen(port, ipaddress, function () {
        // logger.debug("Listening on " + ipaddress + ", Port " + port)
    })
    server.on('error', onError)
    server.on('listening', onListening)
    logger.debug(`Worker ${process.pid} started`)

})

exports = module.exports = {
    db: db,
    Mongoose: Mongoose
}

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    return val
    var port = parseInt(val, 10)
    if (isNaN(port)) {
        // named pipe
    }
    if (port >= 0) {
        // port number
        return port
    }
    return false
}


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }
    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
    logger.debug('Listening on ' + bind)
}