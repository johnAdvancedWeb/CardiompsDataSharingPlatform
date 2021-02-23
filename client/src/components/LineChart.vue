<template>
  <div>
    <apexchart
        type="line"
        height="350"
        width="500"
        :options="chartOptions"
        :series="series"
    ></apexchart>
  </div>
  <!--  <button @click="test">Click me</button>-->

</template>

<script>
import { ref } from "vue";

export default {
  name: 'linechart',

  props: {
    mutationGroups: {
      type: Array,
      default: () => [],
    }
  },

  methods: {

  },

  setup() {
    let hcmData = [], hcmMykData = [], xLabels = [];
    hcmData = [0, 7.8565, 2.9038, 1.3811, 0.7305, 0.1927, 0];
    hcmMykData = [0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0];
    xLabels = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6];

    const chartOptions = ref({
      chart: {
        background: '#1a1423',
        foreColor: "#fff",
        toolbar: {
          show: false
        }
      },

      colors: ["#FCCF31", "#17ead9", "#f02fc2"],
      stroke: {
        width: 3,
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        dashArray: 0,
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: "#40475D"
      },
      xaxis: {
        categories: {
          xLabels
        },
        decimalsInFloat: 2,

        title: {
          text: "Time (divided by 10)",
        },
        axisTicks: {
          color: "#333"
        },
        axisBorder: {
          color: "#333"
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
        }
      },
      tooltip: {
        theme: "dark",
        x: {
          // formatter: function (val) {
          //   return moment(new Date(val)).format("HH:mm:ss");
          // }
        }
      },
      yaxis: {
        title: {
          text: "Length",
        },
        decimalsInFloat: 2,
        labels: {
        }
      }
    });

    const series = ref([
      {
        name: "HCM",
        data: hcmData,
      },
      {
        name: "HCM+(MYK-461)",
        data: hcmMykData,
      },
    ]);

    return { chartOptions, series };
  },
};
</script>
