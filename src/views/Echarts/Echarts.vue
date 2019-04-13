<template>
  <div class="echarts-wrapper">
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <div
            id="stackedArea"
            :style="{width: '680px', height: '380px'}"
          ></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content-light">
          <div
            id="rainFall"
            :style="{width: '680px', height: '380px'}"
          ></div>
        </div>
      </el-col>
    </el-row>
    <br /><br />
    <el-row>
      <el-col :span="12">
        <div class="grid-content">
          <div
            id="punchCard"
            :style="{width: '680px', height: '380px'}"
          ></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content-light">
          <div
            id="themeRiver"
            :style="{width: '680px', height: '380px'}"
          ></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Echarts from 'echarts';
import stackedAreaOption from './stackedArea';
import rainFallOption from './rainFall';
import punchCardOption from './punchCard';
import themeRiverOption from './themeRiver';
export default {
  name: 'Echarts',
  mounted() {
    this.drawStackedArea();
    this.drawRainFall();
    this.drawPunchCard();
    this.drawThemeRiver();
  },
  methods: {
    drawStackedArea() {
      // 基于准备好的dom，初始化echarts实例
      let stackedArea = Echarts.init(document.getElementById('stackedArea'));
      stackedArea.setOption(stackedAreaOption);
    },

    drawRainFall() {
      let rainFall = Echarts.init(document.getElementById('rainFall'));
      rainFall.setOption(rainFallOption);
    },

    drawPunchCard() {
      let punchCard = Echarts.init(document.getElementById('punchCard'));
      punchCard.setOption(punchCardOption);
    },

    drawThemeRiver() {
      let themeRiver = Echarts.init(document.getElementById('themeRiver'));
      themeRiver.setOption(themeRiverOption);
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts-wrapper {
  padding: 30px 0;
}
</style>

