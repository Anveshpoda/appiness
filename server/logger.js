var log4js = require('log4js');
  
  log4js.configure({
  appenders: {
  out:{ type: 'console' },
  app:{ type: 'file', filename: 'logs/anv.log' }
  },
  categories: {
  default: { appenders: [ 'out', 'app' ], level: 'debug' }
  }
  });
  var logger = log4js.getLogger('ANVESH');
exports = module.exports = logger;