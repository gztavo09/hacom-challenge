<template lang="pug">
	#home
		b-row
			b-col(md='9')
				.chart-container
					BarChart
					.mt-3
						LineChart
			b-col(md='3')
				PieChartPublished
				.mt-3
					PieChartGener
</template>

<script>
import BarChart from '../components/bar-chart'
import LineChart from '../components/line-chart'
import PieChartPublished from '../components/pie-chart/published.vue'
import PieChartGener from '../components/pie-chart/gener.vue'
export default {
  name: 'Home',
  components: {
    BarChart,
	LineChart,
	PieChartPublished,
	PieChartGener
  },
}
</script>