module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {},
  },
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx",
        ],
        root: ["./app"],
        alias: {
          store: "./app/redux-store",
          assets: "./app/assets",
          components: "./app/components",
          i18n: "./app/i18n",
          models: "./app/models",
          navigation: "./app/navigation",
          screens: "./app/screens",
          services: "./app/services",
          theme: "./app/theme",
          utils: "./app/utils",
          hooks: "./app/hooks",
          storybook: "./storybook",
        },
      },
    ],
    ["@babel/plugin-proposal-optional-catch-binding"],
  ],
}
