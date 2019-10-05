
export default {
  namespaced: true,
  state: {
    fieldsOptions: [
      {
        type: 'text',
        value: '',
        vRule: 'required|alpha_spaces|min:2',
        name: 'name',
        label: 'Name'
      },
      {
        type: 'phone',
        value: '',
        vRule: { required: true, regex: /^((8|\+)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ },
        name: 'phone',
        label: 'Phone'
      },
      {
        type: 'email',
        value: '',
        vRule: 'required|email',
        name: 'email',
        label: 'E-mail'
      }
    ]
  },
  getters: {
    options(state) {
      return state.fieldsOptions;
    }
  },
  mutations: {},
  actions: {}
};
