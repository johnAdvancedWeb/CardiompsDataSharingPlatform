<template>


  <div id="section-one">
    <div class="min-h-screen p-10">
      <div class="space-y-10 md:space-y-0">

        <div class="md:flex md:flex-col md:justify-center">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
            <p>What's new</p>
          </h2>
          <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy news</p>
        </div>

        <div v-for="d in disease" :key="d.diseaseId" style="padding: .5%">
          <div class="latest-news-container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div id="post">
                    <div id="heading"><h1>{{ d.diseaseId }}<br> {{ d.diseaseName }}</h1></div>
                    <div id="content">
                      <p>{{ d.diseaseName }}</p>
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
import axios from 'axios';

export default {
  name: 'Home',

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
      disease: [],
      catTermMap: [],
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

    fetchDiseaseApi() {
      axios.get('https://hpo.jax.org/api/hpo/disease/OMIM:115197')
      .then((res) => {
        if(this.disease.length === 0) {
          this.disease.push(res.data.disease);
          // this.catTermMap = res.data.catTermMap;
          console.log(this.disease.diseaseId);
          // console.log(this.catTermMap);
        }
      });

    },
  },
}
</script>

