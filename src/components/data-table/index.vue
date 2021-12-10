<template lang="pug">
    b-row.data-table
        b-col(md='4')
            b-form-group.mb-0(label='' label-for='filter-input' label-align-sm='right' label-size='sm')
                b-input-group(size='sm')
                    b-form-input#filter-input(v-model='filter' type='search' placeholder='Buscar por...')
                    b-input-group-append
                        b-button(:disabled='!filter' @click="filter = ''") Limpiar
        b.col(md='8').text-right
            b-button(variant='primary') Nuevo
        b-col.mt-4(md='12')
            .overflow-auto
                b-table#my-table(:items='items' :filter="filter" :per-page='perPage' :fields="columns" :current-page='currentPage')
                b-pagination(v-model='currentPage' :total-rows='rows' :per-page='perPage' aria-controls='my-table')
</template>

<script>
export default {
    props: {
        columns: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        },
        perPage: 0
    },
    data() {
        return {
            currentPage: 1,
            filter: null,
        }
    },
    computed: {
        rows() {
            return this.items.length
        }
    }
}
</script>