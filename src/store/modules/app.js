const state = {
  activeStatus: false,
  activeTab: 0,
  lang: 'zh'
}

const mutations = {
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
