<template>
    <div>
        <div class="launch-content">
            <nav-bar></nav-bar>
            <div class="header">
                <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
            </div>
            <div class="content">
                <div class="line" @click="handleChange('/ip-comics/part1', 1)">
<!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part1")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part2', 2)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part2")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part3', 3)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part3")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part4', 4)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part4")}}
                    </div>
                </div>
<!--                <div class="line" @click="handleChange('/ip-comics/part5', 5)">-->
<!--                    &lt;!&ndash;                    <img src="../assets/part/oilFilter.png">&ndash;&gt;-->
<!--                    <div class="text">-->
<!--                        {{$t("navbar.ipComics.part5")}}-->
<!--                    </div>-->
<!--                </div>-->
                <div class="line" @click="handleChange('/ip-comics/part6', 6)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part6")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part7', 7)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part7")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part8', 8)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part8")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part9', 9)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part9")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part10', 10)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part10")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part11', 11)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part11")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part12', 12)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part12")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part13', 13)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part13")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part14', 14)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part14")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part15', 15)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part15")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part16', 16)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part16")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part17', 17)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part17")}}
                    </div>
                </div>
                <div class="line" @click="handleChange('/ip-comics/part18', 18)">
                    <!--                    <img src="../assets/part/oilFilter.png">-->
                    <div class="text">
                        {{$t("navbar.ipComics.part18")}}
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
  import NavBar from '../components/Navbar/index'

  export default {
    name: "IpComics",
    components: {
      FooterNav,
      NavBar
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
            background-image: url("../assets/header.png") ;
            background-repeat: no-repeat;
            background-size: auto 45px;
            background-position: center;
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
            padding: 16px;
            height: calc(100vh - 180px);
            overflow-y: auto;
            color: #000;
            background-color: rgb(0, 51, 102);

            .line-input {
                margin-bottom: 20px;
                font-size: 20px;
                text-align: left;
                background-color: #fff;
            }

            .line {
                margin-bottom: 20px;
                padding: 10px 10px;
                height: 70px;
                line-height: 50px;
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
                    width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
</style>