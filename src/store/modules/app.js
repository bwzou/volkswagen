const state = {
  time: 3,
  activeStatus: true,
  activeTab: 1,
  lang: localStorage.getItem('locale') || 'zh'
}

const mutations = {
  TOGGLE_TIME: (state, time) => {
    state.time = time
  },
  TOGGLE_ACTIVE_STATUS: (state, activeStatus) => {
    state.activeStatus = activeStatus
  },
  TOGGLE_ACTIVE_TAB: (state, activeTab) => {
    state.activeTab = activeTab
  },
  TOGGLE_LANG: (state, lang) => {
    state.lang = lang
  }
}

const actions = {
  toggleTime({ commit }, time) {
    commit('TOGGLE_TIME', time)
  },
  toggleActiveStatus({ commit }, activeStatus) {
    commit('TOGGLE_ACTIVE_STATUS', activeStatus)
  },
  toggleActiveTab({ commit }, activeTab) {
    commit('TOGGLE_ACTIVE_TAB', activeTab)
  },
  toggleLang({ commit }, lang) {
    commit('TOGGLE_LANG', lang)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
