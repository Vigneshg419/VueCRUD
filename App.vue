<template>
	<div id="app" class="container">
		<h1>Employee Application</h1>
		<main id="app1">
			<router-view></router-view>
		</main>
		
	</div>
</template>

<script>
	import Home from './components/Home.vue';

	export default {
		name: 'app',

		components: {
			Home
		}
	};
</script>

<style>
    @import 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
</style>
