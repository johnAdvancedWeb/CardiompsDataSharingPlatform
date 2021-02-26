<template>
  <!-- if a user is not logged in -->
  <div class="md:flex md:flex-col md:justify-center" id="user-not-logged-in" v-if="!user">
    <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
      <p>Unauthorised</p>
    </h2>
    <p class="text-sm md:text-lg mb-4">Please login or register to view this page</p>
  </div>
  <!-- above code ends here -->

  <div v-else>
    <div class="md:flex md:flex-col md:justify-center mt-2">
      <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
        <p>{{ status }}</p>
      </h2>
    </div>

    <div class="md:flex md:flex-col md:justify-center">
      <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
        <p>{{ title }}</p>
      </h2>
      <p class="text-sm md:text-lg mb-4">{{ description }}</p>
    </div>

    <div id="section-one">
      <div class="">
        <div class="space-y-10 md:space-y-0">
          <div id="experimental-data-container">
            <div v-for="(c, index) in content" :key="index">
              <div class="latest-news-container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div id="api-post">
                        <h1 class="about-heading">{{ c.title }}</h1>

                        <div id="content">

                          <img style="position: relative; left: 50%; transform: translateX(-50%); box-shadow: 16px 16px rgba(0, 0, 0, 0.15);" :src="c.content.url" alt="postImage">
                          <p style="padding-top: 20px">{{ c.description }}</p>
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
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "News",

  props: {
    user: {
      type: Object,
      default: () => {
      },
    },
  },

  data() {
    return {
      title: null,
      description: null,
      content: null,
      status: 'No data can be fetched 😞',
    }
  },

  mounted() {
    this.getLatestNews();
  },

  methods: {
    getLatestNews() {
      axios.get('https://api.factmaven.com/xml-to-json/?xml=https://www.news-medical.net/tag/feed/Cardiomyopathy.aspx')
          .then((res) => {
            this.status = 'Content is loading...';
            const data = res.data.rss.channel;
            this.title = data.title;
            this.description = data.description;
            this.content = data.item;
            if (this.content.length > 1) {
              this.status = '';
            } else {
              this.status = 'No data can be fetched 😞';
            }
            console.log(data);
          });
    },
  }
}
</script>

<style scoped>

</style>
