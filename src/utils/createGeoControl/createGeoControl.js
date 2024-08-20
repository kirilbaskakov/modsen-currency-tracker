import mapboxgl from 'mapbox-gl';

const createGeoControl = onGeolocate => {
  const geocontrol = new mapboxgl.GeolocateControl(
    {
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    },
    'top-right'
  );

  geocontrol.on('geolocate', onGeolocate);
  return geocontrol;
};

export default createGeoControl;
