<template>
  <Unauthorised v-if="!user"></Unauthorised>
  <div class="container" v-else>
    <div class="row">
      <div class="col-sm">
        <div id="add-experiment-container">
          <div id="add-experiment-header">Add and record experimental data</div>
          <div id="add-experiment-form">
            <div id="title-container">
              <label for="title">Title:</label><br>
              <select id="title" required v-model="title">
                <option disabled selected value>Select an option</option>
                <option>Sarcomere Length vs Time</option>
                <option>Tension vs Calcium</option>
                <option>Velocity vs Calcium</option>
                <option>Force vs Calcium</option>
                <option>Length vs Time</option>
              </select>
              <!--                <input type="text" id="title" v-model="title" required placeholder='e.g., "Unhealthy Sarcomere Length vs Time"'><br>-->
            </div>

            <div id="mutation-container">
              <label for="mutation-select">Gene mutation: </label><br>
              <select id="mutation-select" required v-model="mutation">
                <option disabled selected value>Select a mutation</option>
                <option>MYBPC3</option>
                <option>MYH7</option>
                <option>TNNT</option>
                <option>TMP1</option>
              </select>
            </div>

            <form @submit.prevent>
              <div id="csv-reader">
                <label class="logo-text">Submit by importing a CSV and hit generate <br><strong>(please make sure the columns are named accurately, e.g., "X, Y1, Y2, Y3")</strong></label><br>
                <file-reader @fileLoaded="csvData.text = $event"></file-reader><button style="margin-left: 10px" @click="generateCsvData">Generate</button>
              </div>
              <label class="logo-text">Alternatively, you may manually input your data</label>

              <div>
                <label for="x-data">X-axis (comma separated): </label><br>
                <input type="text" id="x-data" v-model="xAxisData" placeholder='e.g., "0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9"' required><br>
              </div>


              <label class="logo-text">If not specified, default column names ("series 1, series 2, series 3") will be used</label>
              <div id="y-columns-container">
                <label for="y-columns">Y-column names (comma separated): </label><br>
                <input type="text" id="y-columns" v-model="yColumns" placeholder='e.g., "HCM, donor, healthy"'><br>
              </div>

              <div id="y1-container">
                <label for="y1-data">Y-axis 1 (comma separated): </label><br>
                <input type="text" id="y1-data" v-model="y1AxisData" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>

<!--                <label for="y1-series">Y-series name 1: </label><br>-->
<!--                <input type="text" id="y1-series" v-model="y1SeriesName" placeholder='e.g., "HCM"' required><br>-->
              </div>

              <div id="y2-container" style="display: none">
                <label for="y2-data">Y-axis 2 (comma separated): </label><br>
                <input type="text" id="y2-data" v-model="y2AxisData" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>

<!--                <label for="y2-series">Y-series name 1: </label><br>-->
<!--                <input type="text" id="y2-series" v-model="y2SeriesName" placeholder='e.g., "HCM+(MYK-461)"' required><br>-->
              </div>

              <div id="y3-container" style="display: none">
                <label for="y3-data">Y-axis 3 (comma separated): </label><br>
                <input type="text" id="y3-data" v-model="y3AxisData" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>

<!--                <label for="y3-series">Y-series name 1: </label><br>-->
<!--                <input type="text" id="y3-series" v-model="y3SeriesName" placeholder='e.g., "Donor"' required><br>-->
              </div>

              <button v-if="!areInputsShowing" @click="showAdditionalYaxisInputs">{{ showInputsMsg }}</button>
              <button v-else @click="hideAdditionalYaxisInputs">{{ hideInputsMsg }}</button><br>
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

import csv from "jquery-csv";
import FileReader from "@/components/FileReader";
import Unauthorised from "@/components/Unauthorised";


export default {
  components: {Unauthorised, FileReader },
  name: "AddExperimentalData",


  props: {
    user: {
      type: Object,
      default: () => {},
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
      title: "",
      mutation: "",
      xAxisData: [],
      yColumns: [],
      y1AxisData: [],
      y2AxisData: [],
      y3AxisData: [],
      showInputsMsg: "Show additional Y-axis inputs",
      hideInputsMsg: "Hide additional Y-axis inputs",
      areInputsShowing: false,
    }
  },

  methods: {
    hideAdditionalYaxisInputs() {
      document.getElementById('y2-container').style.display = 'none';
      document.getElementById('y3-container').style.display = 'none';

      this.areInputsShowing = false;
    },

    showAdditionalYaxisInputs() {
      document.getElementById('y2-container').style.display = 'block';
      document.getElementById('y3-container').style.display = 'block';

      this.areInputsShowing = true;
    },

    generateCsvData() {
      let jsonData = csv.toObjects(this.csvData.text);

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
        console.log(this.y1AxisData[i]);
      }
    },

    addExperimentalData() {
      /* if they're not arrays, turn them into arrays by splitting them, this is if a user manually types inputs their data */
      if (!Array.isArray(this.yColumns)) {
        this.yColumns = this.yColumns.replaceAll(/\s/g, '').split(',');
      }

      if (!Array.isArray(this.xAxisData)) {
        this.xAxisData = this.xAxisData.replaceAll(/\s/g, '').split(',');
      }

      if (!Array.isArray(this.y1AxisData)) {
        this.y1AxisData = this.y1AxisData.replaceAll(/\s/g, '').split(',');
      }

      if (!Array.isArray(this.y2AxisData)) {
        this.y2AxisData = this.y2AxisData.replaceAll(/\s/g, '').split(',');
      }

      if (!Array.isArray(this.y3AxisData)) {
        this.y3AxisData = this.y3AxisData.replaceAll(/\s/g, '').split(',');
      }
      this.$emit('add-experimental-data', this.title, this.mutation, this.xAxisData, this.yColumns, this.y1AxisData, this.y2AxisData, this.y3AxisData);
      this.$router.push("/");
    }
  },

  emits: ["add-experimental-data"],
};

</script>

<style scoped>

</style>
