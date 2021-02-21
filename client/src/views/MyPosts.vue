<template>
  <div id="section-one">
    <div class="min-h-screen p-10">
      <div class="space-y-10 md:space-y-0">

        <!-- left -->
        <div class="md:flex md:flex-col md:justify-center">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
            <p>My Posts</p>
          </h2>
          <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy news</p>
        </div>

        <!-- right -->
        <div v-for="p in posts" :key="p.slug" style="padding: .5%">
          <div class="latest-news-container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div id="post">
                    <div id="heading"><h1>{{ p.title }}</h1></div>
                    <div id="content">
                      <p>{{ p.description }}</p>
                      <p>{{ p.content }}</p>
                    </div>
                  </div>
                  <button @click="deletePost(p.slug)" style="margin-top: 10px;">Delete Post</button>
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
  name: 'MyPosts',

  components: {},

  setup(props, context) {
    function deletePost(slug) {
      context.emit("delete-post", slug);
    }
    return { deletePost };
  },

  data() {
    return {
      isModalVisible: false,
      actionDescription: "",
    }
  },

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

  methods: {
    showModal(action) {
      this.actionDescription = action;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
}
</script>

