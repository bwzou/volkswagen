<template>
    <div>
        <div v-if="time>0" class="launch-screen">
            <div class="header">
                <div class="title">VOLKSWAGEN</div>
                <div class="sub-title">GROUP CHINA</div>
            </div>
            <div class="content">
                <div class="title">SAY  NO  TO  FAKE</div>
                <div class="sub-title">
                    <div>Brand Protection</div>
                    <div>大众中国品牌保护</div>
                </div>
            </div>
            <div class="counter">浏览{{time}}</div>
        </div>
        <div v-if="time===0" class="launch-content">
            <nav-bar></nav-bar>
            <div class="header">
                <div class="title">VOLKSWAGEN</div>
                <div class="sub-title">GROUP CHINA</div>
                <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            </div>
            <div class="content">
                <div class="line half1" @click="handleChange('/about-us', 1)">
                    <img src="../assets/svg/aboutus.svg">
                    {{$t("launch.aboutUs")}}
                </div>
                <div class="line half2" @click="handleChange('/contact-us', 3)">
                    <img src="../assets/svg/call0.svg">
                    {{$t("launch.contactUs")}}
                </div>
                <div class="line" @click="handleChange('/comparison', 2)">
                    <img src="../assets/svg/book0.svg">
                    {{$t("launch.encyclopedia")}}
                </div>
                <div class="line" @click="handleChange('/avoid-fakes', 1)">
                    <img src="../assets/svg/fake0.svg">
                    {{$t("launch.counterfeits")}}
                </div>
            </div>
            <footer-nav class="footer"></footer-nav>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterNav from '../components/Footer/index'

  export default {
    name: "Launch",
    components: {
      FooterNav
    },
    data() {
      return  {
        toggle: false
      }
    },
    computed: {
      ...mapGetters({
        time: 'time',
        lang: 'lang',
        activeTab: 'activeTab',
        activeStatus: 'activeStatus'
      })
    },
    mounted() {
      let t = this.time
      let func = () => {
        setTimeout(() => {
          if (this.time === 0) {

          } else {
            this.$store.dispatch('app/toggleTime', t--)
            func()
          }
        }, 1000)
      }
      func()
    },
    methods: {
      handleChange(path, tab) {
        this.$store.dispatch('app/toggleActiveStatus', true)
        this.$store.dispatch('app/toggleActiveTab', tab)
        if(this.$route.path !== path) {
          this.$router.push(path)
        }
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
    .launch-screen {
        position: relative;
        width: 100%;
        height: 100vh;
        text-align: center;
        /*background-image: url("../assets/launch.jpeg");*/
        /*background-size: auto 100vh;*/
        /*background-position: center;*/


        .header {
            height: 110px;
            color: rgb(78, 82, 84);
            background-color: #fff;

            .title {
                padding-top: 40px;
                font-size: 24px;
                font-weight: 500;
            }

            .sub-title {
                font-size: 12px;
            }
        }

        .content {
            height: calc(100vh - 110px);
            color: #fff;
            background-color: rgb(7, 33, 76);

            .title {
                padding-top: 50%;
                font-size: 36px;
                font-weight: 600;
            }

            .sub-title {
                padding-top: 65%;
                font-size: 12px;
            }
        }

        .counter {
            position: absolute;
            width: 50px;
            bottom: 20px;
            right: 20px;
            background-color: rgba(26, 26, 26, 0.59);
            color: #fff;
            border-radius: 4px;
        }
    }

    .launch-content {
        position: relative;
        width: 100%;
        height: 100vh;
        text-align: center;

        .navbar {
            right: unset;
            background-color: #fff;

            .navbar-toggler {
                padding: 0.25rem 0.35rem;
            }
        }

        .header {
            height: 110px;
            color: rgb(78, 82, 84);
            background-color: #fff;
            z-index: 10;

            .title {
                padding-top: 40px;
                font-size: 24px;
                font-weight: 500;
            }

            .sub-title {
                font-size: 12px;
            }

            .language {
                position: absolute;
                top: 45px;
                right: 10px;
                height: 30px;
                width: 40px;
                color: #fff;
                font-size: 20px;
                font-weight: 600;
                background-color: rgb(222, 84, 82);
            }
        }

        .content {
            padding: 30px 16px;
            height: calc(100vh - 180px);
            overflow-y: auto;
            color: #000;
            background-color: rgb(7, 33, 76);

            .line {
                margin-bottom: 20px;
                padding: 20px 10px 20px 15px;
                height: 70px;
                font-size: 20px;
                text-align: left;
                background-color: #fff;

                img {
                    height: 30px;
                    margin-right: 5px;
                }
            }

            .half1 {
                display: inline-block;
                padding-right: 5px;
                width: calc(50% - 10px);
                margin-right: 10px;
            }

            .half2 {
                display: inline-block;
                padding-right: 5px;
                width: 50%;
            }
        }
    }
</style>