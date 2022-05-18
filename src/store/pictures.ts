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
    currentInputColor: "",
    currentCustomInputCity: "",
    currentCustomInputBefore: "",
    currentCustomInputBelow: "",
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
    setCurrentInputColor(state, payload) {
      state.currentInputColor = payload
    },
    setCustomInputCity (state, payload) {
      state.currentCustomInputCity = payload
    },
    setCustomInputBefore (state, payload) {
      state.currentCustomInputBefore = payload
    },
    setCustomInputBelow (state, payload) {
      state.currentCustomInputBelow = payload
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
    async setInputColor(state, inputColor) {
      state.commit("setCurrentInputColor", inputColor)
    },
    async displayCustomLargeLetter(state, customInputCity) {
      state.commit("setCurrentCustomInputCity", customInputCity)
    },
    async displayCustomBefore(state, customInputBefore) {
      state.commit("setCurrentCustomInputBefore", customInputBefore)
    },
    async displayCustomBelow(state, customInputBelow) {
      state.commit("setCurrentCustomInputBelow", customInputBelow)
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
  },
});
