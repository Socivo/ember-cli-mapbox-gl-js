/* eslint-env node */
'use strict';
var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox-gl-js',
  mapboxModulePath: path.join(this.project.root, 'node_modules', 'mapbox-gl', 'dist'),
  mapboxglJS: path.join(mapboxModulePath, 'mapbox-gl.js'),
  mapboxCSS: path.join(mapboxModulePath, 'mapbox-gl.css'),
  mapboxSVG: path.join(mapboxModulePath, 'svg'),
  treeForVendor: function (tree) {
    var vendorTree = new Funnel(mapboxglJS);
    return mergeTrees([tree, vendorTree]);
  },
  treeForStyles: function (tree) {
    var cssTree = new Funnel(mapboxCSS);
    var svgTree = new Funnel(mapboxSVG, {
      include: ['*.svg']

    });
    return mergeTrees([tree, cssTree, svgTree]);

  }
};
