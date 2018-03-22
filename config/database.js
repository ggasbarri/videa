if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mongodb://gincos:26654860@ds221609.mlab.com:21609/videa-prod' };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/vidjot-dev' };
}
