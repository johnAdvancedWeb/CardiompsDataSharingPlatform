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
        <p>External Cardiomyopathy Data</p>
      </h2>
      <p class="text-sm md:text-lg mb-4">Cardiomyopathy information in one place</p>
    </div>

    <div id="search-container">
      <label for="mutation-select">Filter by gene mutation and cardiomyopathy</label><br>
      <select id="mutation-select" v-model="mutation" required>
        <option disabled selected value>Select a mutation</option>
        <option disabled value></option>
        <option>MYBPC3 hypertrophic</option>
        <option>MYBPC3 dilated</option>
        <option>MYBPC3 ventricular</option>
        <option disabled value></option>

        <option>MYH7 hypertrophic</option>
        <option>MYH7 dilated</option>
        <option disabled value></option>

        <option>TNNT hypertrophic</option>
        <option>TNNT restrictive</option>
        <option>TNNT dilated</option>
        <option disabled value></option>

        <option>TPM1 hypertrophic</option>
        <option>TPM1 dilated</option>
      </select>
      <button @click="fetchDiseaseApi()" style="margin-left: 10px">Fetch</button>
      <button @click="goToQueryExperimentalData()" style="margin-left: 10px">Query internal data instead?</button>
      <br>

<!--      <label for="type-select">Filter by cardiomyopathy type</label><br>-->
<!--      <select id="type-select" required>-->
<!--        <option disabled selected value>Select a type</option>-->
<!--        <option>Hypertrophic</option>-->
<!--        <option>Restrictive</option>-->
<!--        <option>Arrhythmogenic right ventricular</option>-->
<!--      </select>-->
<!--      <button style="margin-left: 10px">Filter</button><br>-->
      <p v-if="this.mutationUpdate">Result displaying for genetic mutation {{ this.mutationUpdate }}</p>
    </div>

<!--    <div class="text-black text-2xl md:text-4xl font-bold mt-2" v-if="disease.length === 0" id="content-loading">-->
<!--      <br>-->
<!--      <h1>Content is loading...</h1>-->
<!--    </div>-->

    <div id="section-one">
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
  name: 'FetchExternalData',

  components: {},

  mounted() {
    // this.fetchDiseaseApi();
  },

  emits: ['delete-experimental-data'],

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
      mutation: '',
      mutationUpdate: null,
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
    goToQueryExperimentalData() {
      this.$router.push('/');
    },

    showModal(action) {
      this.actionDescription = action;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },

    fetchDiseaseApi() {
      let url = 'https://hpo.jax.org/api/hpo/disease/';
      if (this.mutation) {
        if (this.mutation === 'MYBPC3 hypertrophic') {
          url = url + 'OMIM:115197';
        } else if (this.mutation === 'MYBPC3 dilated') {
          url = url + 'ORPHA:154';
        } else if (this.mutation === 'MYBPC3 ventricular') {
          url = url + 'OMIM:615396';
        }

        else if (this.mutation === 'MYH7 hypertrophic') {
          url = url + 'OMIM:192600';
        } else if (this.mutation === 'MYH7 dilated') {
          url = url + 'OMIM:613426';
        }

        else if (this.mutation === 'TNNT hypertrophic') {
          url = url + 'OMIM:115195';
        } else if (this.mutation === 'TNNT restrictive') {
          url = url + 'OMIM:612422';
        } else if (this.mutation === 'TNNT dilated') {
          url = url + 'OMIM:601494';
        }

        else if (this.mutation === 'TPM1 hypertrophic') {
          url = url + 'OMIM:115196';
        } else if (this.mutation === 'TPM1 dilated') {
          url = url + 'OMIM:611878';
        }
        this.mutationUpdate = this.mutation;
      }
      axios.get(url)
          .then((res) => {
            this.disease = res.data.disease;
            this.catTermMap = res.data.catTermsMap;
            console.log(this.catTermMap.terms);
          });

    },
  },
}
</script>

