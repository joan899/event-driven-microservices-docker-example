const config = {
  name: 'Authentication Service',
  baseAPIRoute: 'api',
  port: process.env.PORT || 8080,
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq',
  environment: process.env.ENVIRONMENT || 'dev',
  db: {
    uri: process.env.DB_URI || 'mongodb://localhost:27017/?ssl=false',
    username: process.env.DB_USERNAME || 'falcon',
    password: process.env.DB_PASSWORD || 'Falconerocks',
  },
  jwtsecret: 'yoursecretkey',
};

config.startedMessage = `${config.name} is running on port ${config.port}/`;

module.exports = config;
