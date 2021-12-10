<template lang="pug">
	b-navbar
		b-container(fluid)
			b-navbar-brand(href='#')
				img(:src="logo")
			b-navbar-toggle(target='nav-collapse')
			b-collapse#nav-collapse(is-nav)
				b-navbar-nav.ml-auto
					b-nav-item-dropdown(right)
						template(#button-content)
							span Gustavo Arias
						b-dropdown-item(href='#') Profile
						b-dropdown-item(href='#') Sign Out
</template>

<script>
import { BIconList } from 'bootstrap-vue'
import { mapMutations } from 'vuex'
export default {
	name: 'mainbar',
	data () {
		return {
			logo: 'http://www.hacom.com.pe/wp-content/uploads/2016/12/15666186_1398260866873109_1864976039_n-Mobile-Custom.png'
		}
	},
	components: {
		BIconList
	},
	methods: {
		...mapMutations(['toggleShowSidebar'])
	}
}
</script>

<style lang="scss">
	@import '@/assets/scss/components/main-bar.scss';
</style>