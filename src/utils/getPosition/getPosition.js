const getPosition = callback => {
  navigator.permissions.query({ name: 'geolocation' }).then(({ state }) => {
    const coords = [-74.5, 40];
    if (state !== 'denied') {
      return navigator.geolocation.getCurrentPosition(
        position => {
          callback([position.coords.longitude, position.coords.latitude]);
        },
        () => {},
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 4000
        }
      );
    }
    callback(coords);
  });
};

export default getPosition;
