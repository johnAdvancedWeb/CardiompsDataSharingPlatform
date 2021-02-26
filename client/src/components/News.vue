<template>
  <Unauthorised v-if="!user"></Unauthorised>
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
                          <p><strong>Posted on {{ c.pubDate }}</strong></p>
                          <img style="width: 50%; position: relative; left: 50%; transform: translateX(-50%); box-shadow: 16px 16px rgba(0, 0, 0, 0.15);" :src="c.content.url" alt="postImage">
                          <p style="padding-top: 20px">{{ c.description }}</p>
                          <p>More information at <a :href="link">{{ link }}</a></p>
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
import Unauthorised from "@/components/Unauthorised";

export default {
  name: "News",
  components: { Unauthorised },
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
      link: null,
      date: null,
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
            this.link = data.link;
            this.data = data.date;
            if (this.content.length > 1) {
              this.status = '';
            } else {
              this.status = 'No data can be fetched 😞';
            }
          });
    },
  }
}
</script>

<style scoped>

</style>
