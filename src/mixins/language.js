import {mapState} from "vuex";

export default {
  data() {
    return {
      ClientWidth: null
    }
  },
  created() {
    this.ClientWidth =  (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 750 ? true : false
    window.addEventListener('resize',  () => {
      // console.log('ss', this)
      this.ClientWidth =  (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 750 ? true : false
    })

    const lang = localStorage.getItem("language");
    if (["zh", "en"].includes(lang)) {
      if (lang === "zh") {
        localStorage.setItem("languageIcon", "change_en.png");
        localStorage.setItem("language", "zh");
      } else {
        localStorage.setItem("languageIcon", "change_cn.png");
        localStorage.setItem("language", "en");
      }
    } else {
      localStorage.setItem("language", "zh");
      localStorage.setItem("languageIcon", "change_en.png");
    }
  },
  computed: {
    ...mapState(['dialogStatus']),
    lang: function() {
      const la = localStorage.getItem("language");
      return ["zh", "en"].includes(la) ? la : 'zh'
    }
  }
};
