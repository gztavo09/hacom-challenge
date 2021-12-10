<template lang="pug">
    .chart-container
        v-chart(class="chart" autoresize :option="option")
</template>

<script>
import { mapGetters } from 'vuex'
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
    name: 'BarChart',
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: "light"
    },
	data() {
		return {
			option: {
				title: {
					text: 'Años'
				},
				tooltip: {},
				legend: {
					data: ['Libros']
				},
				xAxis: {
                    type: 'category',
					data: []
				},
				yAxis: {
                    type: 'value'
                },
				series: [
					{
						name: 'Libros',
						type: 'bar',
						data: []
					}
				]
			}
		}
	},
    computed: {
        ...mapGetters(['booksByYear'])
    },
    mounted () {
        this.option.xAxis.data = this.booksByYear.names
        this.option.series[0].data = this.booksByYear.years
    }
}
</script>