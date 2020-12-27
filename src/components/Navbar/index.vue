<template>
    <b-navbar toggleable="true" fixed="top" type="light">
        <b-navbar-toggle target="nav-collapse" @click="handleToggle"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" @click="handleClick('/launch', 1)">{{$t("navbar.home")}}</b-nav-item>
                <b-nav-item-dropdown :text="lang==='zh' ? '真假百科全书' : 'Encyclopedia'" right>
                    <b-dropdown-item href="#" @click="handleClick('/comparison', 2)">{{$t("navbar.encyclopedia.encyclopediaList")}}</b-dropdown-item>
                    <b-dropdown-item href="#" @click="handleClick('/oil-filter', 2)">{{$t("navbar.encyclopedia.oilFilter")}}</b-dropdown-item>
                    <b-dropdown-item href="#" @click="handleClick('/comparison', 2)">{{$t("navbar.encyclopedia.cabinFilter")}}</b-dropdown-item>
                    <b-dropdown-item href="#" @click="handleClick('/comparison', 2)">{{$t("navbar.encyclopedia.airFilter")}}</b-dropdown-item>
                    <b-dropdown-item href="#" @click="handleClick('/comparison', 2)">{{$t("navbar.encyclopedia.sparkingPlug")}}</b-dropdown-item>
                    <b-dropdown-item href="#" @click="handleClick('/comparison', 2)">{{$t("navbar.encyclopedia.brakePad")}}</b-dropdown-item>
                    <b-dropdown-item href="#" @click="handleClick('/comparison', 2)">{{$t("navbar.encyclopedia.pump")}}</b-dropdown-item>
                </b-nav-item-dropdown>
                <!--                        <b-nav-item-dropdown text="简体中文" right>-->
                <!--                            <b-dropdown-item href="#">简体中文</b-dropdown-item>-->
                <!--                            <b-dropdown-item href="#">English</b-dropdown-item>-->
                <!--                        </b-nav-item-dropdown>-->
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "index",
    computed: {
      ...mapGetters({
        lang: 'lang'
      })
    },
    data() {
      return {
        toggle: false
      }
    },
    methods: {
      handleToggle() {
        console.log('toggle')
        this.toggle = !this.toggle
      },
      handleClick(path, tab) {
        this.$store.dispatch('app/toggleActiveStatus', true)
        this.$store.dispatch('app/toggleActiveTab', tab)
        if(this.$route.path !== path) {
          this.$router.push(path)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .navbar {
        right: unset;
        background-color: #fff;

        .navbar-toggler {
            padding: 0.25rem 0.35rem;
        }
    }
</style>