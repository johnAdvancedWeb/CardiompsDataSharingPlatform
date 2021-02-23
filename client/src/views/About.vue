<template>

  <div class="text-black text-2xl md:text-4xl font-bold mt-2" v-if="disease.length === 0" id="content-loading">
    <br><h1>Content is loading...</h1>
  </div>

  <div v-else id="section-one">
    <br>
    <div class="mt-2">
      <div class="space-y-10 md:space-y-0">

        <div class="md:flex md:flex-col md:justify-center">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
            <p v-for="d in disease" :key="d.diseaseId">About {{ d.diseaseId }},<br> {{ d.diseaseName }}</p>
          </h2>
          <p class="text-sm md:text-lg mb-4">The name, description and synopsis data all found here, so please read thoroughly</p>

          <div v-for="(ctm, index) in catTermMap" :key="index" style="padding: 16px">
            <h1 class="about-heading">{{ ctm.catLabel }}</h1>
            <div class="latest-news-container">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div id="post">
<!--                      <div id="content" v-for="(terms, index) in ctm.terms" :key="index" class="mb-2">-->
<!--                        <b><p>Name: {{ terms.name }}</p></b>-->
<!--                      <div id="heading"><h1>Synopsis: {{ ctm.catLabel }}</h1></div>-->
                      <div id="content" v-for="(terms, index) in ctm.terms" :key="index" class="mb-2">
                        <strong><p>Name: {{ terms.name }}</p></strong>
                        <p>Definition: {{ terms.definition }}</p>
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
import axios from 'axios';

export default {
  name: 'About',

  components: {},

  mounted() {
    this.fetchDiseaseApi();
  },

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
              this.catTermMap = res.data.catTermsMap;
              console.log(this.catTermMap.terms);
            }
          });

    },
  },
}
</script>

