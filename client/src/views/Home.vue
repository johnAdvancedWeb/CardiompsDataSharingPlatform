<template>

  <!-- if a user is not logged in -->
  <div class="md:flex md:flex-col md:justify-center mt-2" id="user-not-logged-in" v-if="!user">
    <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
      <p>Unauthorised</p>
    </h2>
    <p class="text-sm md:text-lg mb-4">Please login or register to view this page</p>
  </div>
  <!-- above code ends here -->

  <div id="section-one" v-else>
    <div class="min-h-screen p-10">
      <div class="space-y-10 md:space-y-0">

        <div class="md:flex md:flex-col md:justify-center" v-if="experimentalData.length < 1">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
            <p>No data can be fetched 😞</p>
          </h2>
          <p class="text-sm md:text-lg mb-4">Come back later</p>
        </div>

        <div v-else>
          <div class="md:flex md:flex-col md:justify-center">
            <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
              <p>Experimental Data</p>
            </h2>
            <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy experiments</p>
          </div>

          <div v-if="experimentalData && experimentalData.length > 0" id="experimental-data-container">
            <div v-for="(ed, index) in experimentalData" :key="index">
              <div class="latest-news-container" id="l-n-c-h">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div id="experimental-post">
                        <h2 class="text-white text-2xl md:text-4l font p-0">
                          {{ ed.title }}
                        </h2>
                        <div id="content">
                          <p>{{ ed.description }}</p>
                          <p>Added by {{ ed.postedBy }}</p>
                          <p>{{ ed.content }}</p>
                          <div style="position: relative;" v-if="this.indexClicked === index">
                            <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                          </div>
                        </div>
                      </div>
                      <button
                          @click="recordIndexClicked(index); updateChart(ed.yColumns, ed.y1Axis, ed.y2Axis, ed.y3Axis, ed.title)"
                          style="margin-top: 20px; margin-bottom: 20px;">Display Chart
                      </button>
                      <br>
                      <button v-if="user && ed.postedBy === user.email" @click="deleteExperimentalData(ed.postedBy)"
                              style="margin-bottom: 20px;">Delete Experiment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>


export default {
  name: 'Home',

  data() {
    return {
      isModalVisible: false,
      actionDescription: "",
      indexClicked: null,

      chartOptions: {
      },
      series: [
      ],
    }
  },


  props: {
    user: {
      type: Object,
      default: () => {
      },
    },
    experimentalData: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    recordIndexClicked(index) {
      this.indexClicked = index;
      console.log(this.indexClicked);
    },

    deleteExperimentalData(owner) {
      this.$emit('delete-experimental-data', owner)
    },

    updateChart(yColumns, y1, y2, y3, title) {
      const y1Axis = y1;
      const y2Axis = y2;
      const y3Axis = y3;

      const yLabel = title.split(' vs ')[0];
      const xLabel = title.split(' vs ')[1];
      const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
        chart: {
          background: '#1a1423',
          foreColor: "#fff",
          toolbar: {
            show: false
          }
        },
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
          categories: [],
          decimalsInFloat: 2,

          title: {
            text: xLabel,
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
            text: yLabel,
          },
          decimalsInFloat: 2,
          labels: {}
        }


      };
      // In the same way, update the series option
      this.series = [
        {
          name: yColumns[0],
          data: y1Axis
        },
        {
          name: yColumns[1],
          data: y2Axis
        },
        {
          name: yColumns[2],
          data: y3Axis
        },
      ]
    },

    deleteData(data) {
      this.$emit("delete-post", data);
    },

    showModal(action) {
      this.actionDescription = action;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },

  emits: ['graph-data'],
}
</script>

