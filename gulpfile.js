var elixir = require('laravel-elixir');

elixir(function(mix) {
  // CSS
  mix.copy('resources/assets/css', 'public/css');
  mix.sass('style.scss', 'css/style.css');

  // JS
  mix.scripts([
    './node_modules/lazysizes/lazysizes.min.js',
    'script.js'
  ], 'js/script.js');

  // Image
  mix.copy('resources/assets/img', 'public/img');

  mix.browserSync({
    proxy: 'responsive-zorrosvg.app',
    files: [
      '**/*.css',
      '**/*.html',
      '**/*.js'
    ]
  });
});
