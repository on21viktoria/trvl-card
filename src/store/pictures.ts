/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPicture: "LargeLetterDesign_Berlin.jpg",
    picture: [],
  },
  mutations: {
    setCurrentPicture(state, payload) {
      state.currentPicture = payload;
    },
  },
  actions: {
      async setPicture(state, picture){
          state.commit('setCurrentPicture', picture);
      }
  },
  modules: {},
  getters: {
    getCurrentPicture: (state) => {state.currentPicture, console.log("Test1: Ich wurde aufgerufen"), console.log(state.currentPicture)}
  },
});
