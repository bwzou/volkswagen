<template>
    <div class="footer">
        <div class="nav-button" @click="handleClick('/launch', 1)">
            <img v-if="!activeStatus||activeTab!==1" src="../../assets/svg/home0.svg">
            <img v-if="activeStatus&&activeTab===1" src="../../assets/svg/home1.svg">
        </div>
        <div class="nav-button" @click="handleClick('/comparison', 2)">
            <img v-if="!activeStatus||activeTab!==2" src="../../assets/svg/book0.svg">
            <img v-if="activeStatus&&activeTab===2" src="../../assets/svg/book1.svg">
        </div>
        <div class="nav-button" @click="handleClick('/contact-us', 3)">
            <img v-if="!activeStatus||activeTab!==3" src="../../assets/svg/call0.svg">
            <img v-if="activeStatus&&activeTab===3" src="../../assets/svg/call1.svg">
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: "index",
    computed: {
      ...mapGetters({
        activeTab: 'activeTab',
        activeStatus: 'activeStatus'
      })
    },
    methods: {
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
    .footer {
        height: 70px;
        background-color: #fff;
        border-top: rgba(127, 120, 176, 0.15) 1px solid;

        .nav-button {
            display: inline-block;
            width: 33.3%;
            padding: 20px;

            img {
                height: 30px;
            }
        }
    }
</style>