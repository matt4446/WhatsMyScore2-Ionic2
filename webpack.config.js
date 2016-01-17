var path = require('path');


module.exports = {
  entry: [
    path.normalize('es6-shim/es6-shim.min'),
    'reflect-metadata',
    'web-animations.min',
    path.normalize('zone.js/dist/zone-microtask'),
    path.resolve('app/app'),
  ],
  output: {
    path: path.resolve('www/build/js'),
    filename: 'app.bundle.js',
    pathinfo: false // show module paths in the bundle, handy for debugging
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        //loader: 'ts-loader',
        loader: 'awesome-typescript-loader',
        query: {
          'doTypeCheck': false
        },
        include: path.resolve('app'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        include: path.resolve('node_modules/angular2'),
        loader: 'strip-sourcemap'
      },
      {
        test: /\angular2-google-maps.js$/,
        include: path.resolve('node_modules/angular2-google-maps/bundles'),
        loader: 'strip-sourcemap'
      },
      { 
          test: /kendo\-ui\-core[\///].*\.js$/, 
          loader: "imports?jQuery=jquery" 
      },
    ],
    noParse: [
      /es6-shim/,
      /reflect-metadata/,
      /web-animations/,
      /zone\.js(\/|\\)dist(\/|\\)zone-microtask/
    ]
  },
  resolve: {
    alias: {
      'web-animations.min': path.normalize('ionic-framework/js/web-animations.min'),
      "kendo": "kendo-ui-webpack"
    },
    extensions: ["", ".js", ".ts"]
  }
};
