<template>
    <div>
        <div class="center">
            <div class="section">
                <div class="title">
                    <div class="language" @click="handleLanguage">{{lang !== 'en' ? 'EN' : 'CN'}}</div>
                    {{$t("comparison.oilFilter.title")}}
                </div>
                <div class="image">
                    <img src="../../assets/oil-photo.png">
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.content")}}
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.oilFilter.housingGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.HousingCounterfeits")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.oilFilter.housingGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.HousingCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.oilFilter.bypassValveGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.bypassValveCounterfeits")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.oilFilter.bypassValveGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.bypassValveCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="section2">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.oilFilter.filterPaperGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.filterPaperCounterfeits")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.oilFilter.filterPaperGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.filterPaperCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="section1">
                <div class="title">
                    <div class="left">
                        {{$t("comparison.oilFilter.sealGenuine")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.sealCounterfeits")}}
                    </div>
                </div>
                <div class="content">
                    <div class="left">
                        {{$t("comparison.oilFilter.sealGenuineContent")}}
                    </div>
                    <div class="right">
                        {{$t("comparison.oilFilter.sealCounterfeitsContent")}}
                    </div>
                </div>
            </div>
            <div class="harm" v-if="lang==='zh'">
                <img src="../../assets/harm.png">
            </div>
            <div class="section" v-if="lang==='en'">
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

    .section1, .section2 {
        padding: 0;
        font-size: 16px;
        text-align: left;

        .title {
            font-size: 20px;
            font-weight: 700;
            text-align: center;
            height: 100%;
            background-color: rgb(246, 146, 153);

            .left, .right {
                padding: 16px 8px;
                width: 50%;
                height: 100%;
                display: inline-block;
                vertical-align: top;
            }
        }

        .content {
            height: 100%;

            .left, .right {
                text-align: left;
                padding: 0 8px 8px 8px;
                width: 50%;
                height: 100%;
                display: inline-block;
                vertical-align: top;
            }
        }
    }

    .section1 .content {
        background-color: rgb(148, 175, 243);
    }

    .section2 .content {
        background-color: rgb(246, 146, 153);
    }

    .left, .bg-blue {
        background-color: rgb(148, 175, 243);
    }

    .right, .bg-red {
        background-color: rgb(246, 146, 153);
    }
    .harm {
        width: 100%;

        img {
            width: 100%;
        }
    }
</style>