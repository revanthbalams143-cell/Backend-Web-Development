/**
 * requestId middleware  [mount GLOBALLY in app.js]
 *
 * TODO: export a middleware function (req, res, next) that:
 *   - generates a UUID with crypto.randomUUID()
 *   - attaches it to req.id
 *   - sets it as the "X-Request-Id" response header
 *   - calls next()
 */

const { randomUUID } = require('crypto');

module.exports = function requestId(req, res, next) {
  const id = randomUUID();              // 1. Generate UUID
  req.id = id;                          // 2. Attach to request
  res.setHeader('X-Request-Id', id);    // 3. Set response header
  next();                               // 4. Continue request
};
