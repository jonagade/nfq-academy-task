<template>
	<button
		class="btn btn-success mx-2"
		@click.prevent="$emit('click')"
	>
		{{ name }}
	</button>
</template>

<script>
    export default {
        props: [
            'name',
        ],
    }
</script>