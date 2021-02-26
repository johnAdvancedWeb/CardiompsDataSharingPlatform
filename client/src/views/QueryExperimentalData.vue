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
    <div class="md:flex md:flex-col md:justify-center mt-4">
      <h2 class="text-black text-2xl md:text-4xl font-bold mb-1">
        <p>Experimental Data</p>
      </h2>
      <p class="text-sm md:text-lg mb-4">The latest cardiomyopathy experiments</p>
    </div>

    <div id="search-container">
      <label for="search-select">Filter by mutation</label><br>
      <select id="search-select" required>
        <option disabled selected value>Select an option</option>
        <option>HCM</option>
        <option>MYBP3</option>
      </select><br>
      <button>Filter</button>
    </div>

    <div class="text-black text-2xl md:text-4xl font-bold mt-2" v-if="disease.length === 0" id="content-loading">
      <br>
      <h1>Content is loading...</h1>
    </div>

    <div id="section-one" v-else>
      <div class="">
        <div class="space-y-10 md:space-y-0">


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

    return {deleteExperimentalData};
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

