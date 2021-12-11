<template lang="pug">
    b-modal(v-model='showModalAuthor' ref='my-modal' hide-footer title='Nuevo autor')
        .d-block.text-left
            b-form
                b-form-group.mt-3(label='Autor')
                    b-form-input#input-1(v-model='form.author' type='text' placeholder='')
                b-form-group.mt-3(label='Género')
                    b-form-input#input-2(v-model='form.gener' placeholder='')
        .text-right.mt-3
            b-button.mt-3(variant='default' @click='showModalAuthor = false') Cerrar
            b-button.mt-2(variant='primary' :disabled='disabledButton' @click='Guardar()') Guardar
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'ModalAuthor',
    data() {
        return {
            showModalAuthor: false,
            form: {
                author: '',
                gener: '',
            },
        }
    },
    computed: {
        disabledButton() {
            return this.form.author.length == 0 || this.form.gener.length == 0
        }
    },
    methods: {
        ...mapMutations(['setAuthor']),
        Guardar () {
            let datos = {
                id: Date.now(),
                author: this.form.author,
                gener: this.form.gener
            }
            this.$emit('lastAuthor', datos)
            this.setAuthor(datos)
            this.showModalAuthor = false
        },
        open() {
            this.showModalAuthor = true
        }
    }
}
</script>