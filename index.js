/* eslint-env node */
'use strict';
var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox-gl-js',
  included: function(app) {
    this._super.included.apply(this, arguments);
    let mapboxSVG = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist', 'svg');
    let svgTree = new Funnel(mapboxSVG, {
      include: ['*.svg'],
      destDir: 'svg'

    });
    //JS files are automatically moved to vendor folder

    this.app.import(path.join('vendor/mapbox-gl.js'));
    this.app.import(path.join('vendor/mapbox-gl.css'));
    this.app.import(svgTree);



  },
  /**
   * Make JS files available for importing.
   * @param tree
   * @returns Vendor Tree
   */

  treeForVendor: function (tree) {

    var mapboxglJS = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist');
    var vendorTree = new Funnel(mapboxglJS, {
      files: ['mapbox-gl.js', 'mapbox-gl.js.map']
    });
    return vendorTree;
  },
  treeForStyles: function (tree) {
    var mapboxCSS = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist');

    var cssTree = new Funnel(mapboxCSS, {
      files: ['mapbox-gl.css'],
      destDir: 'vendor'
    });
    return cssTree;

  },
  treeForPublic: function(tree) {
    let mapboxSVG = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist', 'svg');
    let svgTree = new Funnel(mapboxSVG, {
      include: ['*.svg'],
      destDir: 'svg'

    });
    return svgTree;

  }
};
