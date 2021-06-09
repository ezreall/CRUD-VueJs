
import Vue from 'vue';
import Vuex from 'vuex';
import {state} from './tableData'

Vue.use(Vuex);

export const store =  new Vuex.Store({
  state,

})