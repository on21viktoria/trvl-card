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
    currentRecipient: {
      name: "",
      addition: "",
      streetAndNumber: "",
      postalcodeAndCity: "",
      country: ""
  },
    currentPreSelectedFontColor: "#ffffff",
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
    setCurrentCustomInputCity (state, payload) {
      state.currentCustomInputCity = payload
    },
    setCurrentCustomInputBefore (state, payload) {
      state.currentCustomInputBefore = payload
    },
    setCurrentCustomInputBelow (state, payload) {
      state.currentCustomInputBelow = payload
    },
    setCurrentRecipient(state, payload) {
      state.currentRecipient = payload;
    },
    // setCurrentPreSelectedFontColor(state, fontcolor) {
    //   state.currentPreSelectedFontColor = fontcolor;
    // }
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
    },
    async setRecipient(state, recipient) {
      state.commit("setCurrentRecipient", recipient);
    },
    // async setPreSelectedFontColor(state, fontcolor) {
    //   state.commit("setCurrentPreSelectedFontColor", fontcolor);
    // }
  },
  modules: {},
  getters: {
    getCurrentPicture: (state) => {
      return state.currentPicture;
    },
    getCurrentBackgroundColor: (state) => {
      return state.currentBackgroundColor;
    },
    getCurrentSticker: (state) => {
      return state.currentSticker;
    },
    getCurrentTemplate: (state) => {
      return state.currentTemplate;
    },
    getCurrentRecipient: (state) => {
      return state.currentRecipient;
    },
    // getCurrentPreSelectedFontColor: (state) => {
    //   state.currentPreSelectedFontColor;
    // }
  },
});
