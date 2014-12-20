module.exports = {
  unit: {
    options: {
      basePath: '.',
      frameworks: ['qunit'],
      colors: true,
      singleRun: true,
      autoWatch: false,
      browsers: ['PhantomJS'],
      files: [
        'test/*-tests.js'
      ],
      reporters: ['paine'],
      plugins: [
        'karma-qunit',
        'karma-phantomjs-launcher',
        require('../lib/index')
      ]
    }
  }
};
