import 'mapbox-gl/dist/mapbox-gl.css';

import mapboxgl from 'mapbox-gl';
import { PureComponent } from 'react';

import fetchBanks from '@/api/fetchBanks';
import createGeoControl from '@/utils/createGeoControl/createGeoControl';
import getPosition from '@/utils/getPosition';

import { Container } from './styled';

class Map extends PureComponent {
  constructor() {
    super();
    mapboxgl.accessToken = process.env.API_TOKEN;
    this.markers = [];
    this.banks = [];
    this.map = null;
    this.configureMap = this.configureMap.bind(this);
    this.addMarkers = this.addMarkers.bind(this);
  }

  componentDidMount() {
    this.configureMap();
  }

  componentDidUpdate() {
    this.addMarkers(
      this.banks.filter(bank => bank.currencies.includes(this.props.currency))
    );
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
      this.map = null;
    }
  }

  addMarkers(features) {
    this.markers.forEach(marker => marker.remove());
    features.forEach(feature => {
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

  configureGeoControl() {
    this.geoControl = createGeoControl(({ coords }) => {
      fetchBanks(coords.longitude, coords.latitude).then(banks => {
        this.banks = banks;
        this.addMarkers(
          banks.filter(bank => bank.currencies.includes(this.props.currency))
        );
      });
    });
    this.map.addControl(this.geoControl);
    this.map.on('load', () => {
      this.geoControl.trigger();
    });
  }

  configureMap() {
    getPosition(сoords => {
      this.map = new mapboxgl.Map({
        container: 'map',
        center: сoords,
        zoom: 7
      });
      this.configureGeoControl();
    });
  }

  render() {
    return <Container id="map" />;
  }
}

export default Map;
