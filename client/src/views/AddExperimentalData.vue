<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div id="add-experiment-container">
          <div id="add-experiment-header">Add and record experimental data</div>
          <div id="add-experiment-form">
            <div id="title-container">
              <label for="title">Title:</label><br>
              <select id="title" required>
                <option disabled selected value>Select an option</option>
                <option>Sarcomere Length vs Time</option>
                <option>Tension vs Calcium</option>
                <option>Velocity vs Calcium</option>
                <option>Force vs Calcium</option>
                <option>Length vs Time</option>
              </select>
              <!--                <input type="text" id="title" v-model="title" required placeholder='e.g., "Unhealthy Sarcomere Length vs Time"'><br>-->
            </div>

            <div id="description-container">
              <label for="description">Description:</label><br>
              <input type="text" id="description" v-model="description" required placeholder='e.g., "An experiment showing the difference between..."'><br>
            </div>

            <form @submit.prevent>
              <div id="csv-reader">
                <label class="logo-text">Submit by importing a CSV and hit generate <br><strong>(please make sure the columns are named accurately, e.g., "X, Y1, Y2, Y3")</strong></label><br>
                <file-reader @fileLoaded="csvData.text = $event"></file-reader><button style="margin-left: 10px" @click="generateCsvData">Generate</button>
              </div>
              <label class="logo-text">Alternatively, you may manually input your data</label>

<!--              <div>-->
<!--                <label for="x-label">X-label: </label><br>-->
<!--                <input type="text" id="x-label" v-model="xLabel" placeholder='e.g., "Time"' required><br>-->
<!--              </div>-->


              <div>
                <label for="x-data">X-axis (comma separated): </label><br>
                <input type="text" id="x-data" v-model="xAxisData" placeholder='e.g., "0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9"' required><br>
              </div>

<!--              <div>-->
<!--                <label for="y-label">Y-label: </label><br>-->
<!--                <input type="text" id="y-label" v-model="yLabel" placeholder='e.g., "Length"' required><br>-->
<!--              </div>-->

              <div id="y1-container">
                <label for="y1-data">Y-axis 1 (comma separated): </label><br>
                <input type="text" id="y1-data" v-model="y1AxisData" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>
              </div>

              <div id="y2-container" style="display: none">
                <label for="y2-data">Y-axis 2 (comma separated): </label><br>
                <input type="text" id="y2-data" v-model="y2AxisData" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>
              </div>

              <div id="y3-container" style="display: none">
                <label for="y3-data">Y-axis 3 (comma separated): </label><br>
                <input type="text" id="y3-data" v-model="y3AxisData" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>
              </div>

              <button @click="hideAdditionalYaxisInputs">Hide additional Y-axis inputs</button><br>
              <button @click="addExperimentalData" style="margin-top: 20px">Submit Form</button>
              <br>
            </form>

            <br><br>

          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

import { ref } from "vue";
import { useRouter } from "vue-router";
import csv from "jquery-csv";
import FileReader from "@/components/FileReader";

export default {
  name: "AddExperimentalData",
  components: {FileReader},
  props: {
    user: {
      type: Object,
      default: () => {
      },
    },

    posts: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      csvData : {
        text : ""
      },
      xAxisData: [],
      y1AxisData: [],
      y2AxisData: [],
      y3AxisData: [],
    }
  },

  methods : {
    hideAdditionalYaxisInputs() {
      document.getElementById('y2-container').style.display = 'none';
      document.getElementById('y3-container').style.display = 'none';
    },

    generateCsvData() {
      let jsonData = csv.toObjects(this.csvData.text);
      // console.table(jsonData);

      this.xAxisData = [];
      this.y1AxisData = [];

      this.y2AxisData = [];
      this.y3AxisData = [];

      this.hideAdditionalYaxisInputs();
      jsonData.forEach((ad) => {
        this.xAxisData.push(ad.x);
        this.y1AxisData.push(ad.y1);
        if(ad.y2) {
          document.getElementById('y2-container').style.display = 'block';
          this.y2AxisData.push(ad.y2);
        }
        if(ad.y3) {
          document.getElementById('y3-container').style.display = 'block';
          this.y3AxisData.push(ad.y3);
        }
      });

      for(let i = 0; i < this.xAxisData.length; i++) {
        // console.log(this.xAxisValues[i]);
      }
    }
  },

  emits: ["add-experimental-data"],

  setup(props, context) {
    const title = ref("");
    const description = ref("");
    const xLabel = ref("");
    const xAxis = ref("");
    const yLabel = ref("");
    const yAxis = ref("");
    const router = useRouter();

    function addExperimentalData() {
      context.emit("add-experimental-data", title.value, description.value, xLabel.value, xAxis.value, yLabel.value, yAxis.value);
      router.push("/");
    }

    return { title, description, xLabel, xAxis, yLabel, yAxis, addExperimentalData };
  },
};

</script>

<style scoped>

</style>
