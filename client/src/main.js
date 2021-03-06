import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import router from './router'
import './assets/css/style.scss';
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import solid from "@fortawesome/fontawesome-free-solid";

import ChartKick from 'vue-chartkick';
import Chart from 'chart.js';

fontawesome.library.add(brands, solid);

const app = createApp(App);
app.use(router);
app.use(VueApexCharts);
app.use(ChartKick.use(Chart));
app.mount('#app');

