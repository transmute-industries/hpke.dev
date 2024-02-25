const path = require("path");

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    return {
      ...config, 
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "hpke-js": path.resolve("./node_modules/hpke-js"),
        },
        fallback: {
          ...config.resolve.fallback,
          "crypto": false,
        },
      },
    }
  },
}