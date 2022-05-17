/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPicture: "images-trvl-card/LargeLetterDesign_Berlin.jpg",
    currentBackgroundColor: "#ffffff",
    currentSticker: "",
    currentTemplate: "",
    currentRecipient: {
      name: "",
  addition: "",
  streetAndNumber: "",
  postalcodeAndCity: "",
  country: ""
  }
  },
  mutations: {
    setCurrentPicture(state, payload) {
      state.currentPicture = payload;
    },

    setCurrentBackgroundColor(state, payload) {
      state.currentBackgroundColor = payload;
    },

    setCurrentSticker(state, payload) {
      state.currentSticker = payload;
    },

    setCurrentTemplate(state, payload) {
      state.currentTemplate = payload;
    },
    setCurrentRecipient(state, payload) {
      state.currentRecipient = payload;
    },
  },
  actions: {
    async setPicture(state, picture) {
      state.commit("setCurrentPicture", picture);
    },
    async setBackgroundColor(state, color) {
      state.commit("setCurrentBackgroundColor", color);
    },
    async setSticker(state, sticker) {
      state.commit("setCurrentSticker", sticker);
    },
    async setTemplate(state, template) {
      state.commit("setCurrentTemplate", template);
    },
    async setRecipient(state, recipient) {
      state.commit("setCurrentRecipient", recipient);
      console.log(recipient)
    }
  },
  modules: {},
  getters: {
    getCurrentPicture: (state) => {
      state.currentPicture;
    },
    getCurrentBackgroundColor: (state) => {
      state.currentBackgroundColor;
    },
    getCurrentSticker: (state) => {
      state.currentSticker;
    },
    getCurrentTemplate: (state) => {
      state.currentTemplate;
    },
    getCurrentRecipient: (state) => {
      state.currentRecipient;
    },
  },
});
