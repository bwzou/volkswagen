<template>
    <div>
        <div class="section">
            <div class="title">
                {{$t("comparison.oilFilter.title")}}
            </div>
            <div class="image">
                <img src="../../assets/oil-photo.png">
            </div>
            <div class="content">
                {{$t("comparison.oilFilter.content")}}
            </div>
        </div>
        <div class="section">
            <div class="left">
                <div class="title">
                    {{$t("comparison.oilFilter.housingGenuine")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.housingGenuineContent")}}
                </div>
            </div>
            <div class="right">
                <div class="title">
                    {{$t("comparison.oilFilter.HousingCounterfeits")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.HousingCounterfeitsContent")}}
                </div>
            </div>
        </div>
        <div class="section">
            <div class="left">
                <div class="title">
                    {{$t("comparison.oilFilter.bypassValveGenuine")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.bypassValveGenuineContent")}}
                </div>
            </div>
            <div class="right">
                <div class="title">
                    {{$t("comparison.oilFilter.bypassValveCounterfeits")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.bypassValveCounterfeitsContent")}}
                </div>
            </div>
        </div>
        <div class="section">
            <div class="left">
                <div class="title">
                    {{$t("comparison.oilFilter.filterPaperGenuine")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.filterPaperGenuineContent")}}
                </div>
            </div>
            <div class="right">
                <div class="title">
                    {{$t("comparison.oilFilter.filterPaperCounterfeits")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.filterPaperCounterfeitsContent")}}
                </div>
            </div>
        </div>
        <div class="section">
            <div class="left">
                <div class="title">
                    {{$t("comparison.oilFilter.sealGenuine")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.sealGenuineContent")}}
                </div>
            </div>
            <div class="right">
                <div class="title">
                    {{$t("comparison.oilFilter.sealCounterfeits")}}
                </div>
                <div class="content">
                    {{$t("comparison.oilFilter.sealCounterfeitsContent")}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "OilFilter",
    data() {
      return {

      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

</style>