import { createStore } from "vuex";
import andriko from '../data/andriko';
import paidiko from '../data/paidiko';

const state = {
  roster: []
};

const mutations = {
  'SET_ANDRIKO' (state, andriko) {
      state.roster = andriko;
  },
  'SET_PAIDIKO' (state, paidiko) {
    state.roster = paidiko;
  },
};

const actions = {
  initAndriko: ({commit}) => {
      commit('SET_ANDRIKO', andriko);
  },
  initPaidiko: ({commit}) => {
    commit('SET_PAIDIKO', paidiko);
}
};

const getters = {
  roster: state => {
      return state.roster;
  }
};

export default createStore({
  state,
  mutations,
  actions,
  getters
});
