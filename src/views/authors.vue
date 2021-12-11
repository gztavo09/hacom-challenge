<template lang="pug">
	#authors
		h5.mb-4 Lista de Autores
		modal-author(ref='ModalAuthor')
		data-table(:items='authors', :columns='columns', :perPage='perPage', @goRegister='openModal')
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
				variant: 'info',
				width: '100px'
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
  },
  methods: {
	  openModal (event) {
		  console.log(event)
		  this.$refs.ModalAuthor.open()
	  }
  }
}
</script>
