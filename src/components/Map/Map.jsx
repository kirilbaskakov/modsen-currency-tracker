import { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { Container } from './styled';
import 'mapbox-gl/dist/mapbox-gl.css';
import mockBanks from '@/utils/mockBanks';

class Map extends Component {
  constructor() {
    super();
    this.markers = [];
    this.banks = [];
    this.map = null;
    this.configureMap = this.configureMap.bind(this);
    this.buildMap = this.buildMap.bind(this);
    this.fetchBanks = this.fetchBanks.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
  }

  addMarkers(features) {
    this.markers.forEach(marker => marker.remove());
    features.map(feature => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        feature.properties.name
      );
      this.markers.push(
        new mapboxgl.Marker()
          .setLngLat(feature.geometry.coordinates)
          .setPopup(popup)
          .addTo(this.map)
      );
    });
  }

  fetchBanks(longitude, latitude) {
    fetch(
      `https://api.mapbox.com/search/searchbox/v1/category/bank?access_token=pk.eyJ1Ijoia2lyaWxsYmFza2Frb3YxMiIsImEiOiJjbHl6djk3bjgybjI3Mm1xbDcwdGlqdzQ4In0.hNzpxUmwjuOiYyVVxBWN9w&limit=25&proximity=${longitude}%2C${latitude}`
    )
      .then(res => res.json())
      .then(({ features }) => (this.banks = mockBanks(features)));
  }

  configureMap(coords) {
    mapboxgl.accessToken =
      'pk.eyJ1Ijoia2lyaWxsYmFza2Frb3YxMiIsImEiOiJjbHl6djk3bjgybjI3Mm1xbDcwdGlqdzQ4In0.hNzpxUmwjuOiYyVVxBWN9w';
    this.map = new mapboxgl.Map({
      container: 'map',
      center: coords,
      zoom: 7
    });

    this.geolocate = new mapboxgl.GeolocateControl(
      {
        positionOptions: {
          enableHighAccuracy: true,
          timeout: 8000
        },
        trackUserLocation: true,
        showUserHeading: true
      },
      'top-right'
    );
    this.map.addControl(this.geolocate);
    this.map.on('load', () => {
      this.geolocate.trigger();
    });
    this.geolocate.on('geolocate', ({ coords }) => {
      this.fetchBanks(coords.longitude, coords.latitude);
    });
  }

  buildMap() {
    navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
      const coords = [-74.5, 40];
      if (state !== 'denied') {
        return navigator.geolocation.getCurrentPosition(
          position => {
            this.configureMap([
              position.coords.latitude,
              position.coords.longitude
            ]);
          },
          () => {},
          {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 27000
          }
        );
      }
      this.configureMap(coords);
    });
  }

  componentDidMount() {
    this.buildMap();
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  componentDidUpdate() {
    this.addMarkers(
      this.banks.filter(bank => bank.currencies.includes(this.props.currency))
    );
  }

  render() {
    return <Container id="map"></Container>;
  }
}

export default Map;
