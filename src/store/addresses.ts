/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentRecipient: {
        name: "",
    addition: "",
    streetAndNumber: "",
    postalcodeAndCity: "",
    country: ""
    }
  },
  mutations: {
    setCurrentRecipient(state, payload) {
      state.currentRecipient = payload;
    },

    /* setCurrentAddition(state, payload) {
      state.currentAddition = payload;
    },
    setCurrentStreetAndNumber(state, payload) {
        state.currentStreetAndNumber = payload;
      },
    setCurrentPostalcodeAndCity(state, payload) {
      state.currentPostalcodeAndCity = payload;
    },

    setCurrentCountry(state, payload) {
      state.currentCountry = payload;
    },
  }, */
}, actions: {
    async setRecipient(state, recipient) {
        state.commit("setCurrentRecipient", recipient);
      }/* ,
      async setAddition(state, addition) {
        state.commit("setCurrentAddition", addition);
      },
      async setStreetAndNumber(state, streetAndNumber) {
        state.commit("setCurrentStreetAndNumber", streetAndNumber);
      },
      async setPostalcodeAndCity(state, postalcodeAndCity) {
        state.commit("setCurrentPostalcodeAndCity", postalcodeAndCity);
  },
  async setCountry(state, country) {
    state.commit("setCurrentCountry", country); */
},
  modules: {},
});
