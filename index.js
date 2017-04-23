/* eslint-env node */
'use strict';
var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox-gl-js',

  treeForVendor: function (tree) {

    var mapboxglJS = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist', 'mapbox-gl.js');
    var vendorTree = new Funnel(mapboxglJS);
    return mergeTrees([tree, vendorTree]);
  },
  treeForStyles: function (tree) {
    var mapboxCSS = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist', 'mapbox-gl.css');
    var mapboxSVG = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist', 'svg');
    var cssTree = new Funnel(mapboxCSS);
    var svgTree = new Funnel(mapboxSVG, {
      include: ['*.svg'],
      destDir: 'svg'

    });
    return mergeTrees([tree, cssTree, svgTree]);

  }
};
