<template>
    <div>
        <div class="section">
            <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            <div class="title">
                {{$t("aboutUs.aboutUs")}}
            </div>
            <div class="content">
                {{$t("aboutUs.aboutUsContent1")}}
            </div>
            <div class="content">
                {{$t("aboutUs.aboutUsContent2")}}
            </div>
            <div class="content">
                {{$t("aboutUs.aboutUsContent3")}}
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterNav from '../components/Footer/index'

  export default {
    name: "About",
    components: {
      FooterNav
    },
    data() {
        return {

        }
    },
    computed: {
      ...mapGetters({
        lang: 'lang',
        activeTab: 'activeTab',
        activeStatus: 'activeStatus'
      })
    },
    mounted() {

    },
    methods: {
      handleClick(item) {
        console.log(item)
        if(this.$route.path !== item) {
          this.$router.push(item)
        }
      },
      handleGoClick() {
        this.$router.push('/comparison')
      },
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

        .title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .content {
            text-align: left;
            font-size: 16px;
        }
    }
</style>