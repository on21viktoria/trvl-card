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
    currentText: "",
    textColor: "black",
    textFont: "Montserrat",
    textSize: "12px",
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
    setCurrentText(state, payload) {
      state.currentText = payload;
    },
    setCurrentRecipient(state, payload) {
      state.currentRecipient = payload;
    },
    setCurrentPreSelectedFontColor(state, fontcolor) {
      state.currentPreSelectedFontColor = fontcolor;
    }
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
    async setText(state, text) {
      state.commit("setCurrentText", text);
    },
    async setRecipient(state, recipient) {
      state.commit("setCurrentRecipient", recipient);
    },
    async setPreSelectedFontColor(state, fontcolor) {
      state.commit("setCurrentPreSelectedFontColor", fontcolor);
    }
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
    getCurrentText: (state) => {
      state.currentText
    },
    getCurrentPreSelectedFontColor: (state) => {
      state.currentPreSelectedFontColor;
    }
  },
});
