import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enLocale from './en.js'
import zhLocale from './zh.js'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale
  },
  zh: {
    ...zhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: localStorage.getItem('locale') || 'zh',
  // set locale messages
  messages
})

export default i18n
