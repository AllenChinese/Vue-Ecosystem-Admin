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

  </div>
</template>

<script>
import Echarts from 'echarts';
import stackedAreaOption from './stackedArea';
import rainFallOption from './rainFall';
export default {
  name: 'Echarts',
  mounted() {
    this.drawStackedArea();
    this.drawRainFall();
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
    }
  }
};
</script>

<style lang="scss" scoped>
.echarts-wrapper {
  padding: 30px 0;
}
</style>

