<template>
    <div>
        <div class="section">
            <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            <div v-if="lang === 'en'" style="">
                <img src="../assets/comics/ip1-en.png" width="100%">
                <img src="../assets/comics/ip2-en.png" width="100%">
                <img src="../assets/comics/ip3-en.png" width="100%">
                <img src="../assets/comics/ip4-en.png" width="100%">
                <img src="../assets/comics/ip5-en.png" width="100%">
                <img src="../assets/comics/ip6-en.png" width="100%">
            </div>
            <div v-if="lang === 'zh'">
                <img src="../assets/comics/ip1.png" width="100%">
                <img src="../assets/comics/ip2.png" width="100%">
                <img src="../assets/comics/ip3.png" width="100%">
                <img src="../assets/comics/ip4.png" width="100%">
                <img src="../assets/comics/ip5.png" width="100%">
                <img src="../assets/comics/ip6.jpg" width="100%">
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterNav from '../components/Footer/index'

  export default {
    name: "IpComics",
    components: {
      FooterNav
    },
    computed: {
      ...mapGetters({
        lang: 'lang'
      })
    },
    methods: {
      handleLanguage() {
        let lang = localStorage.getItem('locale')
        if (lang === 'zh') {
          this.$i18n.locale = 'en'
          this.$store.dispatch('app/toggleLang', 'en')
          localStorage.setItem('locale', 'en')
        } else {
          this.$i18n.locale = 'zh'
          this.$store.dispatch('app/toggleLang', 'zh')
          localStorage.setItem('locale', 'zh')
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .section {
        height: calc(100vh - 70px);
        overflow-y: auto;
        background-color: #fff;
        padding: 80px 20px;

        .language {
            float: right;
            height: 30px;
            width: 40px;
            color: #fff;
            font-size: 20px;
            font-weight: 600;
            background-color: rgb(222, 84, 82);
        }
    }
</style>