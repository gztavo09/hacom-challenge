<template lang="pug">
    .chart-container
        v-chart(class="chart" autoresize :option="option")
</template>

<script>
import { mapGetters } from 'vuex'
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
  name: 'LineChart',
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
					text: 'Control de Registros de libro'
				},
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
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