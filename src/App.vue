<template lang="pug">
	#app
		main-bar.mb-4
		b-container
			b-row
				b-col.br-solid(md='2')
					side-bar
				b-col(md='10')
					.container-pad
						router-view
</template>

<script>
import MainBar from './components/main-bar'
import SideBar from './components/side-bar'
export default {
	components: {
		'main-bar': MainBar,
		'side-bar': SideBar
	}
}
</script>

<style lang="scss">
	@import '@/assets/scss/style.scss';
	@import '@/assets/scss/_mobile.scss';
</style>
