const DBNAME = process.env.DBNAME;
const DBPASSWORD = process.env.DBPASSWORD;
const MONGODB = {
  MONGODB_URI: `mongodb+srv://${DBNAME}:${DBPASSWORD}.zpijeny.mongodb.net/`,
};

const SESSION = {
  COOKIE_KEY: "AudaXious",
};

const KEYS = {
  ...MONGODB,
  ...SESSION,
};

module.exports = KEYS;
