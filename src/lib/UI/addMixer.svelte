<script>
	import { Button, Modal, FloatingLabelInput, Helper } from 'flowbite-svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { io } from '$lib/webSocketConnection';

	// @ts-ignore
	let dispatch = new createEventDispatcher();

	let mixer = { name: '', type: '', amount: '' };

	let defaultModal = true;

	$: if (defaultModal === false) {
		dispatch('mixer-done');
	}

	/**
	 * @param {any} data
	 */
	async function addMixerToDataBase(data) {
		await fetch('/api/mixers', {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
	}

	async function addMixer() {
		await addMixerToDataBase(mixer);
		io.emit('mixer-update', mixer);
		dispatch('mixer-done');
	}
</script>

<Modal title="Enter Mixer" bind:open={defaultModal} autoclose>
	<div>
		<FloatingLabelInput
			style="outlined"
			id="floating_filled"
			name="name"
			type="text"
			label="Name"
			bind:value={mixer.name}
		/>
		<Helper color="green"><span class="font-medium">Enter in Name</span></Helper>
	</div>
	<div>
		<FloatingLabelInput
			style="outlined"
			id="floating_outlined"
			name="type"
			type="text"
			label="Type"
			bind:value={mixer.type}
		/><Helper color="green"><span class="font-medium">Enter in Type</span></Helper>
	</div>
	<div>
		<FloatingLabelInput
			style="outlined"
			id="floating_standard"
			name="amount"
			type="number"
			label="Amount"
			bind:value={mixer.amount}
		/>
		<Helper color="green"><span class="font-medium">Amount</span></Helper>
	</div>

	<div>
		<Button color="green" type="submit" on:click={addMixer}>Add Mixer</Button>
	</div>
</Modal>
