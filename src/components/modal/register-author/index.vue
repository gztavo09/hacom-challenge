<template lang="pug">
    b-modal(v-model='showModalAuthor' ref='my-modal' hide-footer title='Using Component Methods')
        .d-block.text-center
            h3 Hello From My Modal!
        b-button.mt-3(variant='outline-danger' block='' @click='hideModal') Close Me
        b-button.mt-2(variant='outline-warning' block='' @click='toggleModal') Toggle Me
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'ModalAuthor',
    data() {
        return {
            showModalAuthor: true
        }
    }
}
</script>