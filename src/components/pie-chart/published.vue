<template lang="pug">
    .chart-container-small
        h5.text-center Publicados
        v-chart(class="chart" autoresize :option="option")
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { mapGetters } from 'vuex';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
]);

export default {
    name: 'PieChartPublished',
    components: {
        VChart
    },
    provide: {
        [THEME_KEY]: "light"
    },
    computed: {
        ...mapGetters(['publishedTotal'])
    },
    data() {
        return {
            option: {
                tooltip: {
                    trigger: 'item'
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '15',
                                fontWeight: 'bold',
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: []
                    }
                ]
            }
        }
	},
    mounted() {
        this.option.series[0].data = this.publishedTotal
    }
}
</script>