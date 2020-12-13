<template>
    <div>
        <div v-if="time>0" class="launch-screen">
<!--            <img class="screen" src="../assets/launch.jpeg" alt="">-->
            <div class="counter">浏览{{time}}</div>
        </div>
        <div v-f="time===0" class="launch-content">
<!--            <img src="../assets/launch.jpeg">-->
        </div>
    </div>
</template>

<script>
  export default {
    name: "Launch",
    data() {
      return  {
        time: 3
      }
    },
    mounted() {
      let func = () => {
        setTimeout(() => {
          // this.time --
          // if (this.time === 0) {
          //
          // } else {
          //   func()
          // }
        }, 1000)
      }
      func()
    }
  }
</script>

<style scoped lang="scss">
    .launch-screen {
        position: relative;
        width: 100%;
        height: 100vh;
        background-image: url("../assets/launch.jpeg");
        background-size: auto 100vh;
        background-position: center;


        .screen {
            height: 100vh;
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
        background-image: url("../assets/launch.jpeg");
    }
</style>