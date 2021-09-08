// Cors configuration
const whitelist = process.env.WHITELISTED_DOMAINS
? process.env.WHITELISTED_DOMAINS.split(",")
: []

const opts = {
    origin: whitelist,
    credentials: true,
    withCredentials: true,
  };

  module.exports = opts;
  