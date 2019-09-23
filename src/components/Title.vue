<template>
	<h3
		class="title my-3"
		v-show="show"
	>
		{{ name }}
	</h3>
</template>

<script>
    export default {
        props: [
            'name',
	        'show',
        ],
    }
</script>

<style scoped>
	@import '../assets/styles/global.scss';
</style>