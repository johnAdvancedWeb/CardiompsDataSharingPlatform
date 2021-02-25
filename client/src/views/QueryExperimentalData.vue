<template>

  <div class="text-black text-2xl md:text-4xl font-bold mt-2" v-if="disease.length === 0" id="content-loading">
    <br>
    <h1>Content is loading...</h1>
  </div>

  <div id="section-one" v-else>
    <div class="min-h-screen p-10">
      <div class="space-y-10 md:space-y-0">



        <div class="md:flex md:flex-col md:justify-center">
          <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
            <p>Experimental Data</p>
          </h2>
          <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy experiments</p>
        </div>

        <div class="search-container">
          <label for="search-select">Query by mutation</label><br>
          <select id="search-select" style="color: black; background-color: white">
            <option disabled selected value>Select an option</option>
            <option>HCM</option>
            <option>MYBP3</option>
          </select>
        </div>

        <div id="experimental-data-container">
          <div v-for="(ctm, index) in catTermMap" :key="index">
            <div class="latest-news-container">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div id="api-post">
                      <h1 class="about-heading">{{ ctm.catLabel }}</h1>

                      <div id="content" v-for="(terms, index) in ctm.terms" :key="index" class="">

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
  name: 'QueryExperimentalData',

  components: {},

  mounted() {
    this.fetchDiseaseApi();
  },

  setup(props, context) {
    function deleteExperimentalData(owner) {
      context.emit("delete-experimental-data", owner);
    }

    return { deleteExperimentalData };
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
            if (this.disease.length === 0) {
              this.disease.push(res.data.disease);
              this.catTermMap = res.data.catTermsMap;
              console.log(this.catTermMap.terms);
            }
          });

    },
  },
}
</script>

