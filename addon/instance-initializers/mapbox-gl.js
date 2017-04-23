
export function initialize(applicationInstance) {
  let config = applicationInstance.application;

  if (!config.mapbox || !config.mapbox.accessToken) {
    console.error('Please specify your mapbox.accessToken in your config.');
    return;
  }

  mapboxgl.accessToken = config.mapbox.accessToken;
}

export default {
  name: 'mapbox-gl-access',
  initialize: initialize
};
