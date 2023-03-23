<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import data from "../data.json";

const days = data.map((i) => {
  return i.day;
});
const amounts = data.map((i) => {
  return i.amount;
});

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: days,
        datasets: [
          {
            data: amounts,
            backgroundColor: "hsl(10, 79%, 65%)",
            hoverBackgroundColor: "hsl(186, 34%, 60%)",
            borderRadius: "5",
           
            

          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          x: {
            display:true,
            grid: {
              display: false,
            },
            ticks:{
              display:true
            },
            border:{
              display:false
            }
          },
          y: {
            display:false,
            
            
          }, 
        },
      },
    };
  },
};
</script>
