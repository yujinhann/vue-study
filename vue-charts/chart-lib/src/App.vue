<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart';
import LineChart from "./components/LineChart";

export default {
  //컴포넌트 속성 && 인스턴스 옵션
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style scoped>
</style>
