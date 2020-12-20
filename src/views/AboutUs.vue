<template>
    <div>
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
        <div class="section">
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
        <div class="section bg-img">
            <div class="title">
                {{$t("aboutUs.encyclopedia")}}
            </div>
            <div class="content" style="text-align: center">
                <button @click="handleGoClick">{{$t("aboutUs.go")}}</button>
            </div>
        </div>
        <div class="section">
            <div class="title">
                {{$t("aboutUs.counterfeits")}}
            </div>
            <div class="content">
                {{$t("aboutUs.counterfeitsContent")}}
            </div>
        </div>
        <div class="section bg-black">
            <div class="title">
                {{$t("aboutUs.contactUs")}}
            </div>
            <div class="content">
                {{$t("aboutUs.contactUsContent")}}
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "About",
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
      }
    }
  }
</script>

<style scoped lang="scss">
    .section {
        background-color: #fff;
        padding: 80px 20px;

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

    .bg-img {
        background-image: url("../assets/bg-photo.jpeg");
        background-size: contain;
        color: #fff;
    }

    .bg-black {
        background-color: #000;
        color: #fff;
    }

    .navbar {
        right: unset;
        background-color: #fff;

        .navbar-toggler {
            padding: 0.25rem 0.35rem;
        }
    }
</style>