<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div id="add-experiment-container">
          <div id="add-experiment-header">Add and record experimental data</div>
          <div id="add-experiment-form">
            <form @submit.prevent>
              <div id="title-container">
                <label for="title">Title:</label><br>
                <input type="text" id="title" v-model="title" required placeholder='e.g., "Unhealthy Sarcomere Length vs Time"'><br>
              </div>

              <div id="description-container">
                <label for="description">Description:</label><br>
                <input type="text" id="description" v-model="description" required placeholder='e.g., "An experiment showing the difference between..."'><br>
              </div>

              <div>
                <label for="x-label">X-label: </label><br>
                <input type="text" id="x-label" v-model="xLabel" placeholder='e.g., "Time"' required><br>
              </div>

              <div>
                <label for="x-data">X-axis (comma separated): </label><br>
                <input type="text" id="x-data" v-model="xAxis" placeholder='e.g., "0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9"' required><br>
              </div>

              <div>
                <label for="y-label">Y-label: </label><br>
                <input type="text" id="y-label" v-model="yLabel" placeholder='e.g., "Length"' required><br>
              </div>

              <div>
                <label for="y-data">Y-axis (comma separated): </label><br>
                <input type="text" id="y-data" v-model="yAxis" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>
              </div>

              <button @click="addPost">Submit Form</button>
              <br>

              <!--              <transition name="fade-in">-->
              <!--                <div id="error-container" v-if="errorRegistration">-->
              <!--                  <p class="red-text">{{ errorRegistration }}</p>-->
              <!--                </div>-->
              <!--              </transition>-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

import {ref} from "vue";
import {useRouter} from "vue-router";
import csv from "jquery-csv";
import FileReader from '../components/FileReader.vue';

export default {
  components: { FileReader },
  name: "AddExperimentalData",

  data () {
    return { csvData : { text : "" } }
  },
  methods : {
    saveChartData : function() {
      let jsonData = csv.toObjects(this.csvData.text);
      console.log(jsonData);
    
    }
  },

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

  emits: ["add-post"],

  setup(props, context) {
    const title = ref("");
    const description = ref("");
    const xLabel = ref("");
    const xAxis = ref("");
    const yLabel = ref("");
    const yAxis = ref("");
    const router = useRouter();

    function addPost() {
      context.emit("add-post", title.value, description.value, xLabel.value, xAxis.value, yLabel.value, yAxis.value);
      router.push("/");
    }

    return {title, description, xLabel, xAxis, yLabel, yAxis, addPost};
  },
};

</script>

<style scoped>

</style>
