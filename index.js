require("@babel/core").transformAsync("code", {
  plugins: ["@babel/plugin-proposal-class-properties"],
});

require("@babel/register")({
  extensions: [".js"],
});

require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

require("./src/app.js");
