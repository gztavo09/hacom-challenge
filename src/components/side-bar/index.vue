<template lang="pug">
    .sidebar
        ul
            li
                router-link(to='/') 
                    BIconLayoutWtf
                    | Dashboard
            li
                router-link(to='/autores')
                    BIconPersonPlus 
                    | Autores
            li
                router-link(to='/libros') 
                    BIconBook
                    | Libros
</template>

<script>
import { BIconLayoutWtf, BIconBook, BIconPersonPlus } from 'bootstrap-vue'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'sidebar',
    data () {
        return {
            variant: 'dark'
        }
    },
    components: {
        BIconLayoutWtf,
        BIconPersonPlus,
        BIconBook
    },
    computed: {
        ...mapState(['showSidebar'])
    },
	methods: {
		...mapMutations(['toggleShowSidebar'])
	}
}
</script>

<style lang="scss">
	@import '@/assets/scss/components/side-bar.scss';
</style>