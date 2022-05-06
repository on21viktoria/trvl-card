/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPicture: "LargeLetterDesign_Berlin.jpg",
    currentBackgroundColor: "#ffffff"
  },
  mutations: {
    setCurrentPicture(state, payload) {
      state.currentPicture = payload;
      console.log(state.currentPicture)
    },

    setCurrentBackgroundColor(state, payload) {
      state.currentBackgroundColor = payload;
      console.log(state.currentBackgroundColor)
    }
  },
  actions: {
      async setPicture(state, picture){
          state.commit('setCurrentPicture', picture);
      },
      async setBackgroundColor(state, color){
        console.log(color);
        console.log("Ich wurde aufgerufen");
        state.commit('setCurrentBackgroundColor', color);
    }


  },
  modules: {},
  getters: {
    getCurrentPicture: (state) => {state.currentPicture},
    getCurrentBackgroundColor: (state) => {state.currentBackgroundColor}
  },
});
