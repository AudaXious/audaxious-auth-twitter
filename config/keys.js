const DBNAME = process.env.DBNAME;
const DBPASSWORD = process.env.DBPASSWORD;
const MONGODB = {
  MONGODB_URI: `mongodb+srv://audaxious:GwRTH3cGpCtE7X9Z@cluster0.jj7jufa.mongodb.net/?retryWrites=true&w=majority`,
  // MONGODB_URI: `mongodb+srv://${DBNAME}:${DBPASSWORD}.zpijeny.mongodb.net/`,
};

const SESSION = {
  COOKIE_KEY: "AudaXious",
};

const KEYS = {
  ...MONGODB,
  ...SESSION,
};

module.exports = KEYS;
