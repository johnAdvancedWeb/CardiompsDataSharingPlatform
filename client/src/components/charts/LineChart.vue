<template>
  <div class="chart">
    <reactive-line-chart :chartData="chartData" :chartOptions="chartOptions" :chartType="chartType" />
    <button @click="generateData">Click me to change me</button>
  </div>
</template>

<script>
import ReactiveLineChart from "@/components/charts/ReactiveLineChart";

export default {
  components: {
    ReactiveLineChart,
  },

  methods: {
    generateData() {
      let newArray = [];
      newArray = [0, 7.8565, 2.9038, 1.3811, 0.7305, 0.1927, 0];


      this.chartData = {
        labels: [0, 0.1, 0.2, 0.3, 0.5, 0.6],
        datasets: [
          {
            label: "HCM",
            data: newArray,
            backgroundColor: "rgba(224, 248, 255, 0.4)",
            borderColor: "#5cddff",
            lineTension: 0,
            pointBackgroundColor: "#5cddff",
          },
          {
            label: "HCM+(MYK-461)",
            data: [0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0],
            backgroundColor: "rgba(241, 225, 197, 0.4)",
            borderColor: "#ffc764",
            lineTension: 0,
            pointBackgroundColor: "#ffc764",
          },
        ],
      };
    }
  },

  data() {

    return {
      chartType: "line",
      chartData: {
        labels: [],
        datasets: [
          {
            label: "",
            data: [],
            backgroundColor: "rgba(224, 248, 255, 0.4)",
            borderColor: "#5cddff",
            lineTension: 0,
            pointBackgroundColor: "#5cddff",
          },
          {
            label: "",
            data: [],
            backgroundColor: "rgba(241, 225, 197, 0.4)",
            borderColor: "#ffc764",
            lineTension: 0,
            pointBackgroundColor: "#ffc764",
          },
        ],
      },

      chartOptions: {
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              gridLines:{
                color:"#ffffff"
              },
              ticks: {
                stepSize: 1,
                callback: function(value, index, values) {
                  if (value % Math.round(values[0] / 6) === 0) {
                    return value;
                  } else if (value === 0) {
                    return value;
                  }
                },
              },

              // stacked: true
            },
          ],
        },
        maintainAspectRatio: false,
        legend: {
          labels: {
            boxWidth: 10,
          },
          position: "top",
        },
        animation: {
          duration: 2000,
          easing: "easeInOutQuart",
        },

      },
    };
  },
};
</script>

<style></style>
