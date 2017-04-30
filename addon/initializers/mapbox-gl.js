/**
 * Created by sanketsharma on 2017/04/23.
 */
import MapboxGl from 'ember-cli-mapbox-gl-js/services/mapbox-gl';

export default {
  name: 'mapbox-gl-service',

  initialize: function(application) {
    application.register('service:mapbox-gl', MapboxGl);
  }
};
