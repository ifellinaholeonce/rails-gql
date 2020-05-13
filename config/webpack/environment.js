const { environment } = require('@rails/webpacker')

environment.loaders.append("graphql", {
  test: /\.(graphql|gql)$/,
  exlude: /node_modules/,
  loader: "graphql-tag/loader"
});

module.exports = environment
