<template lang="pug">
	#books
		data-table(:items='books', :columns='columns', :perPage='perPage')
</template>

<script>
import DataTable from '@/components/data-table'
import { mapState } from 'vuex'
export default {
  name: 'Books',
  components: {
	  'data-table': DataTable
  },
  data() {
    return {
      	perPage: 5,
		columns: [
			{
				key: 'id',
				label: 'ID',
				sortable: false,
				variant: 'info'
        	},
			{
				key: 'title',
				label: 'Título',
				sortable: false
        	},
			{
				key: 'description',
				label: 'Descripción'
        	},
			{
				key: 'age',
				label: 'Año',
				sortable: false
        	},
			{
				key: 'published',
				label: 'Publicado',
				formatter: value => {
					return value ? 'Si' : 'No'
				}
			}
		]
    }
  },
  computed: {
	  ...mapState(['books'])
  }
}
</script>
