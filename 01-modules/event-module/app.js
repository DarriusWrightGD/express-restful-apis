const Logger = require('./logger');
const logger = new Logger();


logger.onLog( logEvent => {
  console.log(`The event message: ${JSON.stringify(logEvent)}`);
})

logger.log("Here's a message");
