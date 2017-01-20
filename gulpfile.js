var elixir = require('laravel-elixir');

elixir(function(mix) {
  mix.sass('./sass/style.scss', 'css/style.css');

  mix.browserSync({
    proxy: 'responsive-zorrosvg.app',
    files: [
      '**/*.css',
      '**/*.html',
      '**/*.js'
    ]
  });
});
