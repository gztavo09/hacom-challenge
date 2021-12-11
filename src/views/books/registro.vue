<template lang="pug">
	#books-register
		modal-author(ref='ModalAuthor', @lastAuthor='getLastAuthor')
		b-row
			b-col
				h4 {{ editBook == null ? 'Nuevo libro' : 'Editar libro' }}
				p * Todos los campos son obligatorios
		b-form
			b-row
				b-col(md='6')
					b-form-group.mt-3(label='Título')
						b-form-input(v-model='form.title' type='text' placeholder='')
					b-form-group.mt-3(label='Descripción')
						b-form-textarea(v-model='form.description' placeholder='')
					b-form-group.mt-4
						b-form-checkbox(v-model='form.checked') Publicado
				b-col(md='6')
					b-form-group.mt-3.p-relative(label='Autor')
						b-input-group
							b-form-input(v-model='author' @keyup='filterName(author)' type='text' placeholder='')
							b-input-group-append
								b-button(@click="openModal") Nuevo autor
						ul.autocomplete(v-if='authorsFiltered.length != 0')
							li
								p(v-for='item in authorsFiltered' @click='selectAuthor(item)') {{ item.author }} - {{ item.gener }}
					b-form-group.mt-3(label='Año')
						b-form-input(v-model='form.year' type='number' placeholder='')
					
				b-col(md='12')
					.text-left.mt-4
						b-button.mt-3(variant='default' @click='$router.push("/libros")') Atrás
						b-button.mt-2(variant='primary' :disabled='disabledButton' @click='Guardar()') {{ editBook == null ? 'Guardar' : 'Editar' }}
</template>

<script>
import DataTable from '@/components/data-table'
import ModalAuthor from '@/components/modal/register-author'
import { mapMutations, mapState } from 'vuex'
export default {
	name: 'Books',
	components: {
		'data-table': DataTable,
		'modal-author': ModalAuthor
	},
	data() {
		return {
			author: '',
			form: {
				title: '',
				description: '',
				author: '',
				year: '',
				checked: false
			}
		}
	},
	computed: {
		...mapState(['authors', 'authorsFiltered', 'editBook']),
		disabledButton() {
            return this.form.title.length == 0 || this.form.description.length == 0 || this.form.author.length == 0 || this.author.length == 0 || this.form.year.length == 0
        }
	},
	methods: {
		...mapMutations(['setBook', 'filterName', 'clearFilterName']),
		getLastAuthor(event) {
			this.form.author = event
			this.author = event.author
		},
		openModal (event) {
		  	console.log(event)
		  	this.$refs.ModalAuthor.open()
	  	},
		selectAuthor (item) {
			this.clearFilterName()
			this.author = item.author
			this.form.author = item
		},
		Guardar () {
            let datos = {
                id: this.editBook != null ? this.editBook.id : Date.now(),
                title: this.form.title,
				description: this.form.description,
				year: this.form.year, 
				published: this.form.checked, 
				idAuthor: this.form.author.id
            }
            this.setBook(datos)
            this.$router.push('/libros')
        },
		getAuthor(value) {
			let res = this.authors.filter(item => item.id == value)
			return res[0]
		},
		completeDataEdit () {
			if(this.editBook != null) {
				this.form.title = this.editBook.title
				this.form.description = this.editBook.description
				this.form.author = this.getAuthor(this.editBook.idAuthor)
				this.form.year = this.editBook.year
				this.form.checked = this.editBook.published
				this.author = this.form.author.author
			}
		}
	},
	created() {
		this.completeDataEdit()
	}
}
</script>
