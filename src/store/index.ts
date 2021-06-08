
import Vue from 'vue';
import Vuex from 'vuex';
import tableData from './data/tableData'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tableData
  },
});