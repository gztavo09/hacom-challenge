<template lang="pug">
	#authors
		modal-author
		data-table(:items='authors', :columns='columns', :perPage='perPage')
</template>

<script>
import DataTable from '@/components/data-table'
import ModalAuthor from '@/components/modal/register-author'
import { mapState } from 'vuex'
export default {
  name: 'Authors',
  components: {
	'data-table': DataTable,
	'modal-author': ModalAuthor
  },
  data() {
    return {
      	perPage: 5,
        currentPage: 1,
        columns: [
			{
				key: 'id',
				label: 'ID',
				sortable: false,
				variant: 'info'
        	},
			{
				key: 'author',
				label: 'Autor',
				sortable: false
      		},
			{
				key: 'gener',
				label: 'Genero'
			}
		]
    }
  },
  computed: {
	  ...mapState(['authors'])
  }
}
</script>
