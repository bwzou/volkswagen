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
            <b-navbar toggleable="true" fixed="top" type="light">
                <b-navbar-toggle target="nav-collapse" @click="handleToggle"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">{{$t("navbar.home")}}</b-nav-item>
                        <b-nav-item-dropdown :text="lang==='zh' ? '真假百科全书' : 'Encyclopedia'" right>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.encyclopediaList")}}</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.cabinFilter")}}</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.oilFilter")}}</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.energyOil")}}</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.sparkingPlug")}}</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.brakePad")}}</b-dropdown-item>
                            <b-dropdown-item href="#" @click="handleClick('/comparison')">{{$t("navbar.encyclopedia.airbag")}}</b-dropdown-item>
                        </b-nav-item-dropdown>
<!--                        <b-nav-item-dropdown text="简体中文" right>-->
<!--                            <b-dropdown-item href="#">简体中文</b-dropdown-item>-->
<!--                            <b-dropdown-item href="#">English</b-dropdown-item>-->
<!--                        </b-nav-item-dropdown>-->
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <div class="header">
                <div class="title">VOLKSWAGEN</div>
                <div class="footer">GROUP CHINA</div>
                <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : '中'}}</div>
            </div>
            <div class="content">
                <div class="line half1" @click="handleChange('/about-us', 1)">
                    <img src="../assets/svg/aboutus.svg">
                    {{$t("launch.aboutUs")}}
                </div>
                <div class="line half2" @click="handleChange('/contact-us', 3)">
                    <img src="../assets/svg/contact0.svg">
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
            <div class="footer">
                <div class="nav-button">
                    <img v-if="!activeStatus||activeTab!==1" src="../assets/svg/home0.svg">
                    <img v-if="activeStatus&&activeTab===1" src="../assets/svg/home1.svg">
                </div>
                <div class="nav-button">
                    <img v-if="!activeStatus||activeTab!==2" src="../assets/svg/book0.svg">
                    <img v-if="activeStatus&&activeTab===2" src="../assets/svg/book1.svg">
                </div>
                <div class="nav-button">
                    <img v-if="!activeStatus||activeTab!==3" src="../assets/svg/call0.svg">
                    <img v-if="activeStatus&&activeTab===3" src="../assets/svg/call1.svg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Launch",
    data() {
      return  {
        time: 3,
        toggle: false
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
      let func = () => {
        setTimeout(() => {
          if (this.time === 0) {

          } else {
            this.time --
            func()
          }
        }, 1000)
      }
      func()
    },
    methods: {
      handleToggle() {
        console.log('toggle')
        this.toggle = !this.toggle
      },
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
      },
      handleClick(item) {
        console.log(item)
        if(this.$route.path !== item) {
          this.$router.push(item)
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
            height: 130px;
            color: rgb(78, 82, 84);
            background-color: #fff;

            .title {
                padding-top: 40px;
                font-size: 28px;
                font-weight: 500;
            }

            .sub-title {
                font-size: 12px;
            }
        }

        .content {
            height: calc(100vh - 130px);
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
            height: 130px;
            color: rgb(78, 82, 84);
            background-color: #fff;
            z-index: 10;

            .title {
                padding-top: 40px;
                font-size: 28px;
                font-weight: 500;
            }

            .sub-title {
                font-size: 12px;
            }

            .language {
                position: absolute;
                top: 45px;
                right: 10px;
                height: 35px;
                width: 50px;
                color: #fff;
                font-size: 24px;
                font-weight: 600;
                background-color: rgb(222, 84, 82);
            }
        }

        .content {
            padding: 30px 20px;
            height: calc(100vh - 210px);
            overflow-y: auto;
            color: #000;
            background-color: rgb(7, 33, 76);

            .line {
                margin-bottom: 20px;
                padding: 30px 10px 30px 15px;
                height: 100px;
                font-size: 24px;
                text-align: left;
                background-color: #fff;

                img {
                    height: 40px;
                    margin-right: 5px;
                }
            }

            .half1 {
                display: inline-block;
                width: calc(50% - 10px);
                margin-right: 20px;
            }

            .half2 {
                display: inline-block;
                width: calc(50% - 10px);
            }
        }

        .footer {
            height: 80px;
            background-color: #fff;

            .nav-button {
                display: inline-block;
                width: 33.3%;
                padding: 15px;

                img {
                    height: 50px;
                }
            }
        }
    }
</style>