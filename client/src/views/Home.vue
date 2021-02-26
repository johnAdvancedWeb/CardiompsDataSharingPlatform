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
    <div class="min-h-screen">
      <div class="space-y-10 md:space-y-0 mt-2">

        <div class="md:flex md:flex-col md:justify-center" v-if="experimentalData.length < 1">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
            <p>No data can be fetched 😞</p>
          </h2>
        </div>

        <div v-else>
          <div class="md:flex md:flex-col md:justify-center">
            <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
              <p>Experimental Data</p>
            </h2>
            <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy experiments</p>
          </div>

          <div id="search-container">
            <label for="mutation-search-experiment">Search and filter by mutation</label><br>
            <select id="mutation-search-experiment" required v-model="geneMutation">
              <option selected disabled value>Select a mutation to filter experiments</option>
              <option>MYBPC3</option>
              <option>MYH7</option>
              <option>TNNT</option>
              <option>TPM1</option>
            </select>
            <button @click="filterExperiment(geneMutation, 'mutation')" style="margin-left: 10px">Filter by gene mutation</button>
            <button @click="showAllExperiments" style="margin-left: 10px">Show all</button>
            <br>

            <label for="title-search-experiment">Search and filter by title</label><br>
            <select id="title-search-experiment" required v-model="experimentTitle">
              <option selected disabled value>Select an experiment title</option>
              <option>Sarcomere Length vs Time</option>
              <option>Tension vs Calcium</option>
              <option>Velocity vs Calcium</option>
              <option>Force vs Calcium</option>
              <option>Length vs Time</option>
            </select>
            <button @click="filterExperiment(experimentTitle, 'title')" style="margin-left: 10px">Filter by experiment title</button>
            <button @click="showAllExperiments" style="margin-left: 10px">Show all</button>
            <br>
            <p v-if="this.mutationUpdate">Result displaying for genetic mutation {{ this.mutationUpdate }}</p>
          </div>

          <div v-if="!filteredExperiments && experimentalData && experimentalData.length > 0" id="experimental-data-container">
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
                          <p>{{ ed.mutation }} gene mutation</p>
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

          <div v-if="filteredExperiments" id="experimental-data-container1">
            <div v-for="(ed, index) in filteredExperiments" :key="index">
              <div class="latest-news-container" id="l-n-c-h1">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div id="experimental-post1">
                        <h2 class="text-white text-2xl md:text-4l font p-0">
                          {{ ed.title }}
                        </h2>
                        <div id="content1">
                          <p>{{ ed.mutation }} gene mutation</p>
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


import { firebaseFireStore } from "@/firebase/database";

export default {
  name: 'Home',

  data() {
    return {
      isModalVisible: false,
      actionDescription: "",
      indexClicked: null,

      chartOptions: {},
      series: [],
      filteredExperiments: null,

      geneMutation: '',
      experimentTitle: '',
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
    filterExperiment(searchData, searchType) {
      this.filteredExperiments = [];
      firebaseFireStore.collection("experimental-data").where(searchType, "==", searchData)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              this.filteredExperiments = [];
              this.filteredExperiments.push(doc.data());
            });
          })
          .catch((error) => {
            console.log("Error getting documents: ", error);
          });
    },

    showAllExperiments() {
      this.filteredExperiments = null;
    },

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
            text: xLabel + ' (divided by 10)',
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

