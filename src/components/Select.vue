<template>
	<div class="input-group justify-content-center">
		<div class="input-group-prepend">
			<label class="input-group-text" for="select">{{ placeholder }}</label>
		</div>
		<select
			id="select"
			class="custom-select col-4"
			v-model="selectedValue"
			@change="$emit('update:model', selectedValue)"
		>
			<option
				v-for="item in items"
			>
				{{ item }}
			</option>
		</select>
	</div>
</template>

<script>
    export default {
        props: [
            'items',
            'model',
            'placeholder'
        ],

        data() {
            return {
                selectedValue: null,
            }
        }
    }
</script>