<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div id="register-container">
          <div id="register-header">Add and record experimental data</div>
          <div id="Csv-reader">
            <textarea id="preview" v-model="csvData.text"></textarea>
            <file-reader @fileLoaded="csvData.text = $event"></file-reader>
            <button @click="saveChartData" ></button>
            </div>
          <div id="register-form">
            <form @submit.prevent>
              <div id="username-container">
                <label for="slug">Slug: </label><br>
                <input type="text" id="slug" v-model="slug" required><br>
              </div>

              <div id="full-name-container">
                <label for="title">Title:</label><br>
                <input type="text" id="title" v-model="title" required><br>
              </div>

              <div id="institution-container">
                <label for="description">Description:</label><br>
                <input type="text" id="description" v-model="description" required><br>
              </div>

              <div id="password-container">
                <label for="content">Content: </label><br>
                <input type="text" id="content" v-model="content" required><br>
              </div>

              <div id="confirm-password-container">
                <label for="tags">Tags: </label><br>
                <input type="text" id="tags" v-model="tags" required><br>
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
    const slug = ref("");
    const title = ref("");
    const description = ref("");
    const content = ref("");
    const tags = ref("");
    const router = useRouter();

    function addPost() {
      context.emit("add-post", slug.value, title.value, description.value, content.value, tags.value);
      router.push("/");
    }

    return {slug, title, description, content, tags, addPost};
  },
};

</script>

<style scoped>

</style>
