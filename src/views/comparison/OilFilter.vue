<template>
    <div>
        <div class="center">
            <div class="section">
                <div class="title">
                    <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
                    {{$t("comparison.oilFilter.title")}}
                </div>
                <div class="image">
                    <img src="../../assets/oilFilter.jpg">
                </div>
                <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                    {{$t("comparison.oilFilter.content")}}
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.genuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.counterfeit")}}
                    </div>
                </div>
            </div>
            <div class="section2">
                {{$t("comparison.oilFilter.housing")}}
            </div>
            <div class="section1">
                <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                    <div class="left">
                        {{$t("comparison.oilFilter.housingGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.HousingCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="section2">
                {{$t("comparison.oilFilter.bypassValve")}}
            </div>
            <div class="section1">
                <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                    <div class="left">
                        {{$t("comparison.oilFilter.bypassValveGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.bypassValveCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="section2">
                {{$t("comparison.oilFilter.filterPaper")}}
            </div>
            <div class="section1">
                <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                    <div class="left">
                        {{$t("comparison.oilFilter.filterPaperGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.filterPaperCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="section2">
                {{$t("comparison.oilFilter.seal")}}
            </div>
            <div class="section1">
                <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                    <div class="left">
                        {{$t("comparison.oilFilter.sealGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.sealCounterfeitsContent")}}
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
                <div class="content" :style="{'line-height' : (lang === 'en' ? '1.3': 'unset')}">
                    <ul style="list-style-type:circle">
                        <li>{{$t("comparison.oilFilter.hazards1")}}</li>
                        <li>{{$t("comparison.oilFilter.hazards2")}}</li>
                        <li>{{$t("comparison.oilFilter.hazards3")}}</li>
                        <li>{{$t("comparison.oilFilter.hazards4")}}</li>
                        <li>{{$t("comparison.oilFilter.hazards5")}}</li>
                        <li>{{$t("comparison.oilFilter.hazards6")}}</li>
                        <li>{{$t("comparison.oilFilter.hazards7")}}</li>
                    </ul>
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
    name: "OilFilter",
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
        const {aplus_queue} = window;
        aplus_queue&&aplus_queue.push({
            action: 'aplus.sendPV',
            arguments: [{is_auto: false}]
        });
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
        font-size: 16px;

        .title {
            padding: 40px;
            font-size: 28px;
        }

        .image {
            padding: 16px;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
            }
        }

        .content {
            padding: 16px;
            text-align: justify;
            background-color: rgb(238, 238, 238);

            p, li {
                margin-bottom: 8px;
            }
        }

        .bottom {
            font-size: 28px;
            padding: 12px 8px;
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
                padding: 12px 8px;
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
                padding: 10px;
                width: 50%;
                height: auto;
                word-break: break-word;
                text-align: left;
                vertical-align: top;
            }
        }
    }

    .section2 {
        padding: 12px 8px;
        font-size: 20px;
        font-weight: 700;
        background-color: rgb(238, 238, 238);
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