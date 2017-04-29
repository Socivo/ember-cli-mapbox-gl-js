/**
 * Created by sanketsharma on 2017/04/23.
 */

import Ember from 'ember';

const {
  Service
} = Ember;

export default Service.extend({
  maps: {},

  setupMap: function(mapId, mapSettings) {
    let maps = this.get('maps');

    if(maps[mapId]){
      return;
    }

    maps[mapId] = new mapboxgl.Map({
      container: mapId,
      style: mapSettings.style,
      center: {'lat': mapSettings.lat, 'lng': mapSettings.lng},
      zoom: mapSettings.zoom,
      interactive: mapSettings.interactive,
      bearing: mapSettings.bearing,
      minZoom: mapSettings.minZoom,
      maxZoom: mapSettings.maxZoom,
      maxBounds: mapSettings.maxBounds
    });

    this.set('maps', maps);
  }
});
