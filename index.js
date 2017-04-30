/* eslint-env node */
'use strict';
var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-mapbox-gl-js',
  included: function(app) {
    this._super.included.apply(this, arguments);
    //auto import required files for mapbox
    let mapboxglJS = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist');
    let mapboxSVG = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist', 'svg');
    let svgTree = new Funnel(mapboxSVG, {
      include: ['*.svg'],
      destDir: 'svg'

    });

    this.app.import(path.join(mapboxglJS, 'mapbox-gl.js'));
    this.app.import(path.join(mapboxglJS, 'mapbox-gl.css'));
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
      files: ['mapbox-gl.js']
    });

    return mergeTrees([vendorTree]);
  },
  treeForStyles: function (tree) {
    var mapboxCSS = path.join(this.app.project.root, 'node_modules', 'mapbox-gl', 'dist');

    var cssTree = new Funnel(mapboxCSS, {
      files: ['mapbox-gl.css']
    });

    return mergeTrees([cssTree, svgTree]);

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
