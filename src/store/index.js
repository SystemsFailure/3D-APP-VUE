import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: false,
    visible_text_or_blockMessanger: true,
    visible_auth_window: false,
  },
  getters: {
  },
  mutations: {
    ch_visible_text_or_blockMessanger(st, vl) {
      st.visible_text_or_blockMessanger = vl;
    },
    ch_visible_auth_window(st, vl) {
      st.visible_auth_window = vl;
    }
  },
  actions: {
  },
  modules: {
  }
})
