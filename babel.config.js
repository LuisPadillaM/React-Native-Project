module.exports = function(api) {
  api.cache(true);
  return {
    presets : ['module:metro-react-native-babel-preset'],
    plugins: [
      ["module-resolver", {
        alias: {
          "components": "./Components",
          "scenes": "./Scenes",
          "navigation" : "./Navigation",
          "styles": "./Styles",
          "store": "./Store",
          "reducers": "./Store/Reducers",
        }
      }]
    ]
  };
};
