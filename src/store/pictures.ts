/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Background + picture
    currentPicture: "images-trvl-card/LargeLetterDesign_Berlin.jpg",
    currentBackgroundColor: "#ffffff",

    //Sticker
    currentSticker: "",

    //Template
    currentTemplate: "",

    //Nachrichtenfeld
    currentText: "",
    textColor: "black",
    textFont: "Montserrat",
    textSize: "12pt",

    //Empfänger
    currentRecipient: {
      name: "",
      addition: "",
      streetAndNumber: "",
      postalcodeAndCity: "",
      country: "",
    },
    currentPreSelectedFontColor: "#ffffff",
  },

  mutations: {
    //Background + Foto
    setCurrentPicture(state, payload) {
      state.currentPicture = payload;
    },

    setCurrentBackgroundColor(state, payload) {
      state.currentBackgroundColor = payload;
    },

    //Sticker
    setCurrentSticker(state, payload) {
      state.currentSticker = payload;
    },

    //Sticker
    setCurrentTemplate(state, payload) {
      state.currentTemplate = payload;
    },

    //Nachrichtenfeld
    setCurrentText(state, payload) {
      state.currentText = payload;
    },
    setCurrentTextFont(state, payload) {
      console.log("Current Font: ", payload)
      state.textFont = payload;
    },
    setCurrentTextColor(state, payload) {
      state.textColor = payload;
    },
    setCurrentTextSize(state, payload) {
      state.textSize = payload;
    },

    //Empfänger
    setCurrentRecipient(state, payload) {
      state.currentRecipient = payload;
    },

    setCurrentPreSelectedFontColor(state, fontcolor) {
      state.currentPreSelectedFontColor = fontcolor;
    },
  },
  actions: {
    //Background + Fotos
    async setPicture(state, picture) {
      state.commit("setCurrentPicture", picture);
    },
    async setBackgroundColor(state, color) {
      state.commit("setCurrentBackgroundColor", color);
    },

    //Sticker
    async setSticker(state, sticker) {
      state.commit("setCurrentSticker", sticker);
    },

    //Template
    async setTemplate(state, template) {
      state.commit("setCurrentTemplate", template);
    },

    //Nachrichtenfeld
    async setText(state, text) {
      state.commit("setCurrentText", text);
    },

    async setTextColor(state, text) {
      state.commit("setCurrentTextColor", text);
    },

    async setTextFont(state, text) {
      state.commit("setCurrentTextFont", text);
    },

    async setTextSize(state, text) {
      state.commit("setCurrentTextSize", text);
    },

    //Empfänger
    async setRecipient(state, recipient) {
      state.commit("setCurrentRecipient", recipient);
    },
    async setPreSelectedFontColor(state, fontcolor) {
      state.commit("setCurrentPreSelectedFontColor", fontcolor);
    },
  },
  modules: {},
  getters: {
    //Background + Foto
    getCurrentPicture: (state) => {
      return state.currentPicture;
    },
    getCurrentBackgroundColor: (state) => {
      return state.currentBackgroundColor;
    },

    //Sticker
    getCurrentSticker: (state) => {
      return state.currentSticker;
    },

    //Template
    getCurrentTemplate: (state) => {
      return state.currentTemplate;
    },

    //Nachrichtenfeld
    getCurrentText: (state) => {
      return state.currentText;
    },
    getCurrentTextColor: (state) => {
      return state.textColor;
    },
    getCurrentTextFont: (state) => {
      return state.textFont;
    },
    getCurrentTextSize: (state) => {
      return state.textSize;
    },

    //Empfänger
    getCurrentRecipient: (state) => {
      return state.currentRecipient;
    },
    getCurrentPreSelectedFontColor: (state) => {
      state.currentPreSelectedFontColor;
    },
  },
});
