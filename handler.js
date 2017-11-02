'use strict';

module.exports.hello = (event, context, callback) => {
  const done = (err, res) =>
    callback(null, {
      statusCode: err ? '400' : '200',
      body: err ? err.message : res,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  switch (event.httpMethod) {
    case 'GET':
      console.log('GET method was called');
      done(null, 'GET method was called');
      break;
    default:
      console.log('Other http method was called - unsupported method');
      done(new Error(`Unsupported method "${event.httpMethod}"`));
  }
};
