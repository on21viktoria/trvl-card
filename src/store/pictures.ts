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
    currentPreSelectedFontColor: "#ffffff",
    currentPostcard: '',
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
    setCurrentPreSelectedFontColor(state, fontcolor) {
      state.currentPreSelectedFontColor = fontcolor;
    },
    setCurrentPostcard(state, postcard) {
      state.currentPostcard = postcard;
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
    async setPreSelectedFontColor(state, fontcolor) {
      state.commit("setCurrentPreSelectedFontColor", fontcolor);
    },
    async setPostcard (state, postcard) {
      state.commit("setCurrentPostcard", postcard);
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
    getCurrentText: (state) => {
      state.currentText
    },
    getCurrentPreSelectedFontColor: (state) => {
      state.currentPreSelectedFontColor;
    },
    getCurrentPostcard: (state) => {
      return state.currentPostcard;
    }
  },
});
