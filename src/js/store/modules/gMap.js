import GMapStyle from '../../map/googleMapStyle.json';

export default {
  namespaced: true,
  state: {
    currentPosition: { lat: 50.41, lng: 30.45 },
    mapStyle: {
      styles: GMapStyle,
      disableDefaultUI: true
    },
    places: [
      {
        name: 'Kyiv',
        coords: { lat: 50.41, lng: 30.45 },
        selected: true
      },
      {
        name: 'NY',
        coords: { lat: 30.41, lng: 20.45 },
        selected: false
      },
      {
        name: 'Paris',
        coords: { lat: 55.41, lng: 31.45 },
        selected: false
      }
    ],
    markerIcon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"%3E%3Cpath fill="%233db565" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0z"/%3E%3C/svg%3E'
  },
  getters: {
    currentPosition(state) {
      return state.currentPosition;
    },
    mapStyle(state) {
      return state.mapStyle;
    },
    places(state) {
      return state.places;
    },
    markerIcon(state) {
      return state.markerIcon;
    }
  },
  mutations: {
    setCoords(state, place) {
      state.places.forEach((item) => {
        item.selected = false;
      });
      place.selected = true;
      state.currentPosition = place.coords;
    }
  },
  actions: {
    changeCoords(store, place) {
      store.commit('setCoords', place);
    }
  }
};
