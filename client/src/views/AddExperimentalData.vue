<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <div id="register-container">
          <div id="register-header">Add and record experimental data</div>
          <div id="register-form">
            <form @submit.prevent>
              <div id="full-name-container">
                <label for="title">Title:</label><br>
                <input type="text" id="title" v-model="title" required><br>
              </div>

              <div id="institution-container">
                <label for="description">Description:</label><br>
                <input type="text" id="description" v-model="description" required><br>
              </div>

              <div>
                <label for="x-label">X-label: </label><br>
                <input type="text" id="x-label" v-model="content" placeholder='e.g., "Time"' required><br>
              </div>

              <div>
                <label for="x-data">X-axis (comma separated): </label><br>
                <input type="text" id="x-data" v-model="content" placeholder='e.g., "0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9"' required><br>
              </div>

              <div>
                <label for="y-label">Y-label: </label><br>
                <input type="text" id="y-label" v-model="content" placeholder='e.g., "Velocity"' required><br>
              </div>

              <div>
                <label for="y-data">Y-axis (comma separated): </label><br>
                <input type="text" id="y-data" v-model="tags" placeholder='e.g., "0, 3.891, 0.8063, 0.1905, 0.0105, 0, 0"' required><br>
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

export default {
  name: "AddExperimentalData",

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
