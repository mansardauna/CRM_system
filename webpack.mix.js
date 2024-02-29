const mix = require("laravel-mix");

mix
  .js("src/js/app.js", "js") // Compile your JavaScript
  .sass("src/sass/app.scss", "css") // Compile your Sass (assuming you're using Sass for Bootstrap)
  .options({ processCssUrls: true }) 
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: "pre",
          use: ["source-map-loader"],
        },
      ],
    },
    devServer: {
      open: true,
    },
  })
  .copyDirectory("src/html/", "dist") // Copy your HTML files
  .copyDirectory("src/images", "dist/images") // Copy your images
  .copyDirectory("src/fonts", "dist/fonts") // Copy your fonts
  .setPublicPath("dist") // Set the public path for your assets
  .disableNotifications(); // Disable notifications during compilation
