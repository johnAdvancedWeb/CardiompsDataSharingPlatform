<!--<template>-->
<!--  <div>-->
<!--    <apexchart type="line" height="350" width="500" :options="chartOptions" :series="series" ref="realtimeChart"></apexchart>-->
<!--    <button @click="updateChart">Click me</button>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->

<!--export default {-->
<!--  name: 'linechart',-->

<!--  props: {-->
<!--    mutationGroups: {-->
<!--      type: Array,-->
<!--      default: () => [],-->
<!--    }-->
<!--  },-->

<!--  methods: {-->
<!--    consoleLog(x, y1, y2, y3) {-->
<!--      console.log(x, y1, y2, y3);-->
<!--    },-->

<!--    updateChart() {-->
<!--      const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']-->

<!--      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.-->
<!--      this.chartOptions = {-->
<!--        colors: [colors[Math.floor(Math.random()*colors.length)]]-->
<!--      };-->
<!--      // In the same way, update the series option-->
<!--      this.series = [{-->
<!--        data: newData-->
<!--      }]-->
<!--    }-->
<!--  },-->

<!--  data() {-->

<!--    return {-->
<!--      hcmData: [0, 7.8565, 2.9038, 1.3811, 0.7305, 0.1927, 0],-->
<!--      hcmMykData: [0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0],-->
<!--      xLabels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],-->

<!--      chartOptions: {-->
<!--        chart: {-->
<!--          background: '#1a1423',-->
<!--          foreColor: "#fff",-->
<!--          toolbar: {-->
<!--            show: false-->
<!--          }-->
<!--        },-->


<!--        colors: ["#FCCF31", "#17ead9", "#f02fc2"],-->
<!--        stroke: {-->
<!--          width: 3,-->
<!--          show: true,-->
<!--          curve: 'smooth',-->
<!--          lineCap: 'butt',-->
<!--          colors: undefined,-->
<!--          dashArray: 0,-->
<!--        },-->
<!--        dataLabels: {-->
<!--          enabled: false-->
<!--        },-->
<!--        grid: {-->
<!--          borderColor: "#40475D"-->
<!--        },-->
<!--        xaxis: {-->
<!--          categories: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],-->
<!--          decimalsInFloat: 2,-->

<!--          title: {-->
<!--            text: "Time (divided by 10)",-->
<!--          },-->
<!--          axisTicks: {-->
<!--            color: "#333"-->
<!--          },-->
<!--          axisBorder: {-->
<!--            color: "#333"-->
<!--          }-->
<!--        },-->
<!--        fill: {-->
<!--          type: "gradient",-->
<!--          gradient: {-->
<!--            gradientToColors: ["#F55555", "#6078ea", "#6094ea"]-->
<!--          }-->
<!--        },-->
<!--        tooltip: {-->
<!--          theme: "dark",-->
<!--          x: {-->
<!--            // formatter: function (val) {-->
<!--            //   return moment(new Date(val)).format("HH:mm:ss");-->
<!--            // }-->
<!--          }-->
<!--        },-->
<!--        yaxis: {-->
<!--          title: {-->
<!--            text: "Length",-->
<!--          },-->
<!--          decimalsInFloat: 2,-->
<!--          labels: {}-->
<!--        }-->
<!--      },-->
<!--      series: [-->
<!--        {-->
<!--          name: "Desktops",-->
<!--          data: [0, 7.8565, 2.9038, 1.3811, 0.7305, 0.1927, 0],-->
<!--        },-->
<!--        {-->
<!--          name: "PCs",-->
<!--          data: [0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0],-->
<!--        }-->
<!--      ],-->
<!--    }-->
<!--  }-->
<!--  // setup() {-->
<!--  // let hcmData = [], hcmMykData = [], xLabels = [];-->
<!--  // hcmData = [0, 7.8565, 2.9038, 1.3811, 0.7305, 0.1927, 0];-->
<!--  // hcmMykData = [0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0];-->
<!--  // xLabels = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];-->

<!--  // const chartOptions = ref();-->

<!--  // const series = ref([-->
<!--  //   {-->
<!--  //     // name: "HCM",-->
<!--  //     data: hcmData,-->
<!--  //   },-->
<!--  //   {-->
<!--  //     // name: "HCM+(MYK-461)",-->
<!--  //     data: hcmMykData,-->
<!--  //   },-->
<!--  // ]);-->
<!--  //-->
<!--  // return { chartOptions, series };-->
<!--  // },-->

<!--};-->
<!--</script>-->
