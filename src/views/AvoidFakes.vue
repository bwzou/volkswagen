<template>
    <div>
        <div class="section">
            <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            <div class="title" :style="{'text-align':(lang === 'en' ? 'left': 'center')}">
                {{$t("aboutUs.counterfeits")}}
            </div>
            <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                &nbsp;&nbsp;{{$t("aboutUs.counterfeitsContent1")}}
            </div>
            <br/>
            <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                &nbsp;&nbsp;{{$t("aboutUs.counterfeitsContent2")}}
            </div>
            <br/>
            <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                &nbsp;&nbsp;{{$t("aboutUs.counterfeitsContent3")}}
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterNav from '../components/Footer/index'

  export default {
    name: "AvoidFakes",
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

        .title {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        .content {
            text-align: justify;
            font-size: 16px;
        }
    }
</style>