<template>
    <div>
        <div class="center">
            <div class="section">
                <div class="title">
                    <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
                    {{$t("comparison.brakePad.title")}}
                </div>
                <div class="image">
                    <img src="../../assets/brakePad.png">
                </div>
                <div class="content">
                    {{$t("comparison.brakePad.content")}}
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.brakePad.thermalBarrierGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.brakePad.thermalBarrierCounterfeit")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.brakePad.thermalBarrierGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.brakePad.thermalBarrierCounterfeitContent")}}
                    </div>
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.brakePad.frictionLayerGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.brakePad.frictionLayerCounterfeit")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.brakePad.frictionLayerGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.brakePad.frictionLayerCounterfeitContent")}}
                    </div>
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.brakePad.noiseShimGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.brakePad.noiseShimCounterfeit")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.brakePad.noiseShimGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.brakePad.noiseShimCounterfeitContent")}}
                    </div>
                </div>
            </div>
<!--            <div class="harm" v-if="lang==='zh'">-->
<!--                <img src="../../assets/harm.png">-->
<!--            </div>-->
            <div class="section">
                <div class="title">
                    {{$t("comparison.oilFilter.hazards")}}
                </div>
                <div class="content">
                    <p>{{$t("comparison.oilFilter.hazards1")}}</p>
                    <p>{{$t("comparison.oilFilter.hazards2")}}</p>
                    <p>{{$t("comparison.oilFilter.hazards3")}}</p>
                    <p>{{$t("comparison.oilFilter.hazards4")}}</p>
                    <p>{{$t("comparison.oilFilter.hazards5")}}</p>
                    <p>{{$t("comparison.oilFilter.hazards6")}}</p>
                    <p>{{$t("comparison.oilFilter.hazards7")}}</p>
                </div>
                <div class="bottom">
                    {{$t("comparison.oilFilter.save")}}
                </div>
            </div>
        </div>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import FooterNav from '../../components/Footer/index'

  export default {
    name: "BrakePad",
    components: {
      FooterNav
    },
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
    .center {
        height: calc(100vh - 70px);
        overflow-y: auto;

        .language {
            float: right;
            height: 30px;
            width: 40px;
            color: #fff;
            font-size: 20px;
            font-weight: 600;
            background-color: rgb(222, 84, 82);
        }
    }

    .section {
        padding: 16px;
        font-size: 16px;

        .title {
            padding: 40px;
            font-size: 28px;
        }

        .image {
            width: 100%;
            height: 100%;

            img {
                width: 100%;
            }
        }

        .content {
            padding-top: 16px;
            text-align: left;

            p {
                margin-bottom: 8px;
            }
        }

        .bottom {
            padding-top: 16px;
        }
    }

    .section1 {
        padding: 0;
        font-size: 16px;
        text-align: left;

        .title {
            display: flex;
            justify-content: space-between;
            align-items: stretch;
            font-size: 20px;
            font-weight: 700;
            text-align: center;

            .left, .right {
                display: inline-block;
                padding: 16px 8px;
                width: 50%;
                height: auto;
                word-break: break-word;
                vertical-align: top;
            }
        }

        .content {
            display: flex;
            justify-content: space-between;
            align-items: stretch;

            .left, .right {
                display: inline-block;
                padding: 0 8px 8px 8px;
                width: 50%;
                height: auto;
                word-break: break-word;
                text-align: left;
                vertical-align: top;
            }
        }
    }

    .left {
        color: #fff;
        background-color: rgb(0, 51, 102);
    }

    .right {
        background-color: rgb(246, 229, 188);
    }

    .harm {
        width: 100%;

        img {
            width: 100%;
        }
    }
</style>