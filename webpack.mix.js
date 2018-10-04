let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/Admin/app.js', 'public/Admin/js')
   .sass('resources/assets/sass/Admin/app.scss', 'public/Admin/css');
mix.webpackConfig({
    output: {
        chunkFilename: 'js/lazy-js-components/[name].js'
        // chunkFilename: 'js/lazy-js-components/[name].[chunkhash].js'
    },
});