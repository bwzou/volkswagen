<template>
    <div>
        <div class="section">
            <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            <div v-show="lang === 'en'" style="padding-top: 50px">
                <img src="../../assets/comics/part4/ip1.png" width="100%">
                <img src="../../assets/comics/part4/ip2.png" width="100%">
                <img src="../../assets/comics/part4/ip3.png" width="100%">
                <img src="../../assets/comics/part4/ip4.png" width="100%">
                <img src="../../assets/comics/part4/ip5.png" width="100%">
                <img src="../../assets/comics/part4/ip6.png" width="100%">
                <img src="../../assets/comics/part4/ip7.png" width="100%">
                <img src="../../assets/comics/part4/ip8.png" width="100%">
            </div>
            <div v-show="lang === 'zh'" style="padding-top: 50px">
                <img src="../../assets/comics/part4/ip1.png" width="100%">
                <img src="../../assets/comics/part4/ip2.png" width="100%">
                <img src="../../assets/comics/part4/ip3.png" width="100%">
                <img src="../../assets/comics/part4/ip4.png" width="100%">
                <img src="../../assets/comics/part4/ip5.png" width="100%">
                <img src="../../assets/comics/part4/ip6.png" width="100%">
                <img src="../../assets/comics/part4/ip7.png" width="100%">
                <img src="../../assets/comics/part4/ip8.png" width="100%">
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterNav from '../../components/Footer/index'

  export default {
    name: "Part1",
    components: {
      FooterNav
    },
    computed: {
      ...mapGetters({
        lang: 'lang'
      })
    },
    mounted() {
        const {aplus_queue} = window;
        aplus_queue&&aplus_queue.push({
            action: 'aplus.sendPV',
            arguments: [{is_auto: false}]
        }); 
        console.log('test')
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
        padding: 60px 20px;

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