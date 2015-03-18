// Configure the Build suite all from one place
// You will love it :)

// Certail Values will be passed on directly
// So you can add all the available options of those plugins
// This is true for:

// autoprefixer | https://www.npmjs.com/package/gulp-autoprefixer
// lint | https://www.npmjs.com/package/gulp-scss-lint

module.exports = {

  paths: {
    base: './'
  },

  sass: {
    src: './src/scss/**/*.scss',
    dest: './',
    style: 'compact',

    autoprefixer: {
      browsers: ['last 4 versions'],
      cascade: false
    },

    lint: {
      verbose: true,
      config: 'scsslint.yml'
    }
  },

  jade: {
    src: './src/jade/**/*.jade',
    dest: './',
    pretty: true
  }

}
