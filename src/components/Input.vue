<template>
	<div class="input-group justify-content-center mb-3">
		<input
			type="text"
			class="form-control col-md-4"
			:placeholder="placeholder"
			v-model="inputValue"
			@input="$emit('update:model', inputValue)"
		>
	</div>
</template>

<script>
    export default {
		props: [
		    'placeholder',
			'model',
		],

	    data() {
		    return {
				inputValue: '',
		    }
	    },
    }
</script>