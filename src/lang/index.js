import Vue from "vue";
import VueI18n from "vue-i18n";
import router from "../router";
import enLocale from "./en";
import zhLocale from "./zh";
import { getUrlKey } from "@/utils/index";

Vue.use(VueI18n);
const messages = {
  zh: {
    ...zhLocale
  },
  en: {
    ...enLocale
  }
};
if(getUrlKey('lang', window.location.href)){
  console.log('什么语言', window.location.href)
  localStorage.setItem('language', getUrlKey('lang', window.location.href))
}
if(getUrlKey('lang', window.location.href) === 'en' && ((window.location.href).indexOf('/E.5') > -1 || (window.location.href).indexOf('/TestDrive') > -1)){
  router.push('/')
}
const language = localStorage.getItem("language");
const i18n = new VueI18n({
  locale: ["zh", "en"].includes(language) ? language : 'zh',
  messages
});

export default i18n;
