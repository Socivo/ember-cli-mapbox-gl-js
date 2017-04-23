/**
 * Created by sanketsharma on 2017/04/23.
 */
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addPackageToProject('mapbox-gl'); // is a promise
  }
};
