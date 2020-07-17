import Vue from 'vue';
import Vuex from 'vuex';
import axiosInstance from '../services/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    locations: [],
    episodes: []
  },

  getters: {
    getAllCharacters: state => {
      return state.characters;
    }
  },

  mutations: {
    'SET_ALL_CHARACTERS': (state, payload) => {
      state.characters = payload;
    }
  },

  actions: {
    async setAllCharacters({ commit }) {
      try {
        const data = await axiosInstance.get('character/');
        console.log(data);
        commit('SET_ALL_CHARACTERS', data)
      } catch(e) {
        console.log(e);
      }
    }
  }
});
