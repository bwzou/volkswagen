<template>
    <div>
        <div class="launch-content">
            <div class="header">
                <div class="title">VOLKSWAGEN</div>
                <div class="sub-title">GROUP CHINA</div>
                <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            </div>
            <div class="content">
                <div class="line" @click="handleChange('/oil-filter', 2)">
                    <img src="../assets/part/oilFilter.png">
                    <div class="text">
                        {{$t("navbar.encyclopedia.oilFilter")}}
                    </div>
                </div>
                <div class="line">
                    <img src="../assets/part/cabinFilter.png">
                    <div class="text">
                        {{$t("navbar.encyclopedia.cabinFilter")}}
                    </div>
                </div>
                <div class="line">
                    <img src="../assets/part/airFilter.png">
                    <div class="text">
                        {{$t("navbar.encyclopedia.airFilter")}}
                    </div>
                </div>
                <div class="line">
                    <img src="../assets/part/sparkingPlug.png">
                    <div class="text">
                        {{$t("navbar.encyclopedia.sparkingPlug")}}
                    </div>
                </div>
                <div class="line">
                    <img src="../assets/part/brakePad.png">
                    <div class="text">
                        {{$t("navbar.encyclopedia.brakePad")}}
                    </div>
                </div>
                <div class="line">
                    <img src="../assets/part/pump.png">
                    <div class="text">
                        {{$t("navbar.encyclopedia.pump")}}
                    </div>
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
    name: "Comparison",
    components: {
      FooterNav
    },
    data() {
      return  {

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
                padding: 10px 10px;
                height: 70px;
                font-size: 20px;
                text-align: left;
                background-color: #fff;

                img {
                    height: 50px;
                    width: 50px;
                    margin-left: 10px;
                }

                .text {
                    display: inline-block;
                    text-align: center;
                    width: calc(100% - 60px);
                }
            }
        }
    }
</style>