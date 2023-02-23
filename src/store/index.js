import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          commit("SET_USERS", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  modules: {}
});
