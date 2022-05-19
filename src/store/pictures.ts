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

    //Text
    currentInputColor: "",
    currentCustomInputCity: "",
    currentCustomInputBefore: "",
    currentCustomInputBelow: "",
    current3DEffect: false,

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
    
    //Eigener Text
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
    setCurrent3DEffect (state, payload) {
      state.current3DEffect = payload
    }
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

    //Eigener Text
    async setPreSelectedFontColor(state, fontcolor) {
      state.commit("setCurrentPreSelectedFontColor", fontcolor);
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
    async display3DEffect(state, threedEffect) {
      state.commit("setCurrent3DEffect", threedEffect)
    }
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
