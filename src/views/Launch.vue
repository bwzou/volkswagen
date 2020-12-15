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
                        <b-nav-item href="#">首页</b-nav-item>
                        <b-nav-item-dropdown text="真假百科全书" right>
                            <b-dropdown-item href="#">百科列表</b-dropdown-item>
                            <b-dropdown-item href="#">空调滤清器</b-dropdown-item>
                            <b-dropdown-item href="#">机油滤清器</b-dropdown-item>
                            <b-dropdown-item href="#">机油</b-dropdown-item>
                            <b-dropdown-item href="#">火花塞</b-dropdown-item>
                            <b-dropdown-item href="#">刹车片</b-dropdown-item>
                            <b-dropdown-item href="#">安全气囊</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="简体中文" right>
                            <b-dropdown-item href="#">简体中文</b-dropdown-item>
                            <b-dropdown-item href="#">English</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
            <div class="header">
                <div class="title">VOLKSWAGEN</div>
                <div class="footer">GROUP CHINA</div>
                <div class="language">EN</div>
            </div>
            <div class="content">
                <div class="line half1">
                    {{$t("launch.aboutUs")}}
                </div>
                <div class="line half2">
                    {{$t("launch.contactUs")}}
                </div>
                <div class="line">
                    {{$t("launch.encyclopedia")}}
                </div>
                <div class="line">
                    {{$t("launch.counterfeits")}}
                </div>
            </div>
            <div class="footer">

            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Launch",
    data() {
      return  {
        time: 0,
        toggle: false
      }
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
            height: calc(100vh - 230px);
            color: #000;
            background-color: rgb(7, 33, 76);

            .line {
                margin-bottom: 20px;
                padding: 30px 30px;
                height: 100px;
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
        }
    }
</style>