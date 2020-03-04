import Vuex from 'vuex';
import Vue from 'vue';
import categories from './modules/categories'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    categories,
  }
});
