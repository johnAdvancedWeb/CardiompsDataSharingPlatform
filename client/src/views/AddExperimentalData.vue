<template>
  <div>

    <div v-if="user">
      (What user sees)
    </div>
    <div v-else>
      (What guest sees)
    </div>

    <p>Add experimental data form goes here</p>
  </div>

  <ion-grid>
    <ion-row>
      <ion-col size-md="6" offset-md="3">
        <div id="register-container">
          <div id="register-header">Sign up below</div>
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

              <button @click="addPost">Create Post</button><br>

<!--              <transition name="fade-in">-->
<!--                <div id="error-container" v-if="errorRegistration">-->
<!--                  <p class="red-text">{{ errorRegistration }}</p>-->
<!--                </div>-->
<!--              </transition>-->
            </form>
          </div>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>


</template>

<script>

import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
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
}

  emits: ["add-post"],

  },
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
    return { slug, title, description, content, tags, addPost };
  },
};

</script>

<style scoped>

</style>
