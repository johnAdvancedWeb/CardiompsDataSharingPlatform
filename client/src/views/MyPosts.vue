<!--<template>-->

<!--  <div id="section-one">-->
<!--    <div class="min-h-screen p-10">-->
<!--      <div class="space-y-10 md:space-y-0">-->

<!--        &lt;!&ndash; left &ndash;&gt;-->
<!--        <div class="md:flex md:flex-col md:justify-center">-->
<!--          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">-->
<!--            <p>My Posts</p>-->
<!--          </h2>-->
<!--          <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy news</p>-->
<!--        </div>-->

<!--        &lt;!&ndash; right &ndash;&gt;-->
<!--        <div v-for="(ed, index) in experimentalData" :key="index" style="padding: .5%">-->
<!--          <div class="latest-news-container">-->
<!--            <div class="container">-->
<!--              <div class="row">-->
<!--                <div class="col">-->
<!--                  <div id="post">-->
<!--                    <div id="heading"><h1>{{ ed.title }}</h1></div>-->

<!--                    <div id="content">-->
<!--                      <p>{{ ed.description }}</p>-->
<!--                      <p>{{ ed.content }}</p>-->
<!--                      <p>{{ ed.xAxis }}</p>-->
<!--                      <p>{{ ed.y1Axis }}</p>-->
<!--                      <p v-if="ed.y2Axis.length">{{ ed.y2Axis }}</p>-->
<!--                      <p v-if="ed.y3Axis.length">{{ ed.y3Axis }}</p><br>-->


<!--                      <div style="position: relative;" v-if="this.indexClicked === index">-->
<!--                        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>-->
<!--                      </div>-->


<!--                    </div>-->
<!--                  </div>-->
<!--                  <button @click="recordIndexClicked(index); updateChart(ed.y1Axis, ed.y2Axis)" style="margin-top: 10px;">Display Chart</button><br>-->
<!--                  <button @click="deleteData(index)" style="margin-top: 10px">Delete Post</button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->


<!--export default {-->
<!--  name: 'MyPosts',-->

<!--  data() {-->
<!--    return {-->
<!--      isModalVisible: false,-->
<!--      actionDescription: "",-->
<!--      indexClicked: null,-->
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
<!--  },-->


<!--  props: {-->
<!--    user: {-->
<!--      type: Object,-->
<!--      default: () => {-->
<!--      },-->
<!--    },-->
<!--    experimentalData: {-->
<!--      type: Array,-->
<!--      default: () => [],-->
<!--    },-->
<!--  },-->

<!--  methods: {-->
<!--    recordIndexClicked(index) {-->
<!--      this.indexClicked = index;-->
<!--      console.log(this.indexClicked);-->
<!--    },-->

<!--    updateChart(y1, y2) {-->
<!--      const y1Axis = y1;-->
<!--      const y2Axis = y2;-->

<!--      const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']-->

<!--      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.-->
<!--      this.chartOptions = {-->
<!--        colors: [colors[Math.floor(Math.random() * colors.length)]],-->
<!--        chart: {-->
<!--          background: '#1a1423',-->
<!--          foreColor: "#fff",-->
<!--          toolbar: {-->
<!--            show: false-->
<!--          }-->
<!--        },-->
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


<!--      };-->
<!--      // In the same way, update the series option-->
<!--      this.series = [-->
<!--        {-->
<!--          data: y1Axis-->
<!--        },-->
<!--        {-->
<!--          data: y2Axis-->
<!--        },-->
<!--      ]-->
<!--    },-->

<!--    deleteData(data) {-->
<!--      this.$emit("delete-post", data);-->
<!--    },-->

<!--    showModal(action) {-->
<!--      this.actionDescription = action;-->
<!--      this.isModalVisible = true;-->
<!--    },-->
<!--    closeModal() {-->
<!--      this.isModalVisible = false;-->
<!--    },-->
<!--  },-->

<!--  emits: ['graph-data'],-->
<!--}-->
<!--</script>-->

