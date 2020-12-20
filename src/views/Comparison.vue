<template>
    <div>
        <div class="launch-content">
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
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <div class="header">
                <div class="title">VOLKSWAGEN</div>
                <div class="footer">GROUP CHINA</div>
                <div class="language" @click="handleLanguage">EN</div>
            </div>
            <div class="content">
                <div class="line">
                    {{$t("navbar.encyclopedia.cabinFilter")}}
                </div>
                <div class="line" @click="handleChange('/oil-filter', 2)">
                    {{$t("navbar.encyclopedia.oilFilter")}}
                </div>
                <div class="line">
                    {{$t("navbar.encyclopedia.energyOil")}}
                </div>
                <div class="line">
                    {{$t("navbar.encyclopedia.sparkingPlug")}}
                </div>
                <div class="line">
                    {{$t("navbar.encyclopedia.brakePad")}}
                </div>
                <div class="line">
                    {{$t("navbar.encyclopedia.airbag")}}
                </div>
            </div>
            <div class="footer">
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
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "Comparison",
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
                padding: 20px 10px;
                height: 80px;
                font-size: 28px;
                background-color: #fff;
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