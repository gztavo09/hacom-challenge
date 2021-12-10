<template lang="pug">
	#app
		main-bar.mb-4
		b-container(fluid)
			b-row
				b-col(md='2')
					side-bar
				b-col(md='10')
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
</style>
