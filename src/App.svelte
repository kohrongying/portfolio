<script>
	import TailwindStyles from './TailwindStyles.svelte';

	import About from './About.svelte'
	import Works from './Works.svelte';
</script>

<style>
	#app-container {
		display: grid;
		grid-template-columns: 1fr 3fr;
		grid-gap: 20px;
	}
	@media only screen and (max-width: 860px) {	
		#app-container {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 10px;
		}
	}
</style>

<div id="app-container">
	<About />
	<Works />
</div>