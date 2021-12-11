<template lang="pug">
	#books
		h5.mb-4 Lista de libros
		data-table(:items='books', :columns='columns', :perPage='perPage', @goRegister='openRegister')
			template(v-slot:actions='row')
				ul.actions-button
					li
						BIconPencil(type='button', @click='updateBook(row.item)') 
					li
						BIconTrash(type='button', @click='confirmDelete(row.item)')
</template>

<script>
import { BIconTrash, BIconPencil } from 'bootstrap-vue'
import DataTable from '@/components/data-table'
import { mapMutations, mapState } from 'vuex'
export default {
	name: 'Books',
	components: {
		'data-table': DataTable,
		BIconTrash,
		BIconPencil
	},
	data() {
		return {
			perPage: 5,
			columns: [
				{
					key: 'id',
					label: 'ID',
					sortable: false,
					variant: 'info',
					width: '100px'
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
					key: 'year',
					label: 'Año',
					sortable: false,
					width: '100px'
				},
				{
					key: 'published',
					label: 'Publicado',
					formatter: value => {
						return value ? 'Si' : 'No'
					},
					width: '100px'
				},
				{
					key: 'idAuthor',
					label: 'Autor',
					formatter: value => {
						return this.getAuthor(value)
					},
				},
				{
					key: 'actions', 
					label: 'Actions',
					class: 'text-center'
				}
			]
		}
	},
	computed: {
		...mapState(['books', 'authors'])
	},
	methods: {
		...mapMutations(['setUpdateBook', 'deleteBook']),
		confirmDelete(val) {
			this.$bvModal.msgBoxConfirm(`¿Seguro que deseas eliminar el libro ${val.title}?`)
			.then(value => {
				this.deleteBook(val.id)
			})
			.catch(err => {
				// An error occurred
			})
		},
		getAuthor(value) {
			let res = this.authors.filter(item => item.id == value)
			return res[0].author
		},
		updateBook(value) {
			this.setUpdateBook(value)
			this.$router.push('libros/registro')
		},
		openRegister() {
			this.setUpdateBook(null)
			this.$router.push('libros/registro')
		}
	}
}
</script>
