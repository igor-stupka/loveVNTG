import GMapStyle from '../../map/googleMapStyle.json';

export default {
  namespaced: true,
  state: {
    activeTab: 0,
    mapStyle: {
      styles: GMapStyle,
      disableDefaultUI: true
    },
    places: [
      {
        name: 'Kyiv',
        coords: { lat: 50.489357, lng: 30.489508 },
        info: 'Global Message Services Ukraine LLC',
        address: 'Kuiv, Stepan Bandera, 33',
        index: '02066',
        country: 'Ukraine'
      },
      {
        name: 'New York',
        coords: { lat: 40.675823, lng: -73.972548 },
        info: 'Global Message Services New York LLC',
        address: 'New York, Brooklyn',
        index: '11217',
        country: 'USA'
      },
      {
        name: 'Guangzhou',
        coords: { lat: 23.127051, lng: 113.315865 },
        info: 'Global Message Services Guangzhou LLC',
        address: 'Guang Zhou Da Dao Zhong, 99',
        index: '9379992',
        country: 'China'
      },
      {
        name: 'barcelona',
        coords: { lat: 41.392622, lng: 2.201025 },
        info: 'Global Message Services Barcelona LLC',
        address: 'Barcelona, Plaça de Tirant lo Blanc',
        index: '4815162342',
        country: 'Spain'
      }
    ],
    markerIcon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34"%3E%3Cpath fill="%233db565" d="M17 0c9.389 0 17 7.611 17 17s-7.611 17-17 17S0 26.389 0 17 7.611 0 17 0z"/%3E%3C/svg%3E'
  },
  getters: {
    activeTab(state) {
      return state.activeTab;
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
    setIndex(state, index) {
      state.activeTab = index;
    }
  }
};
