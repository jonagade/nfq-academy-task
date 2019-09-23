<template>
	<button
		class="btn mx-2"
		:class="classes"
		@click.prevent="$emit('click')"
	>
		{{ name }}
	</button>
</template>

<script>
    export default {
        props: [
            'name',
	        'classes',
        ],
    }
</script>