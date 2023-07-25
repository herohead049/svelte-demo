<script>
	import { mixers } from '$lib/stores/cocktail-store';
	import AddMixer from '$lib/UI/addMixer.svelte';

	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Button,
		Li,
		List,
		P,
		Heading
	} from 'flowbite-svelte';

	let showMixer = false;
</script>

<h1>CD Svelte Demo</h1>
<div>
	<p class="mb-6 text-sm text-gray-500 dark:text-gray-400">
		<Table color="blue" striped={true} hoverable={true}>
			<TableHead>
				<TableHeadCell tdClass="px-2 py-2 whitespace-nowrap font-medium">Name</TableHeadCell>
				<TableHeadCell tdClass="px-2 py-2 whitespace-nowrap font-medium">Type</TableHeadCell>
				<TableHeadCell tdClass="px-2 py-2 whitespace-nowrap font-medium">Amount</TableHeadCell>
			</TableHead>
			<TableBody>
				{#each $mixers as mixer}
					<TableBodyRow>
						<TableBodyCell>
							{mixer.name}
						</TableBodyCell>
						<TableBodyCell>
							{mixer.type}
						</TableBodyCell>
						<TableBodyCell>
							{mixer.amount}
						</TableBodyCell>
					</TableBodyRow>
				{/each}
			</TableBody>
		</Table>
	</p>
</div>
<Button color="green" pill on:click={() => (showMixer = true)}>Add Mixer</Button>
<Heading>Notes</Heading>
<List tag="ul" class="space-y-1">
	<Li>demo shows my implementation of svelte-kit, socket.io and forerunnerdb</Li>
	<Li>UI framework I used is the flowbite and flowbite-svelte</Li>
	<Li>To build you can use npm or yarn</Li>
	<Li>yarn dev or npm run dev</Li>
	<Li>browser http://localhost:3000</Li>
	<br />
	<Heading tag="h2">Database</Heading>
	<Li>db file is located ./src/lib/server/dbData/mixers.json</Li>
	<Li>You can edit the file but you will need to restart the application.</Li>
	<br />
	<Heading tag="h2">Socket.io</Heading>
	<Li
		>Socket<P
			>This is used for dynamic loading of any database change. If a new mixer is added, the client
			will add the entry to the database and then send a socket message called "mixer-update" and
			the client will then query the api/mixers and add value into the store and therefore the
			updates will be reflected by the store subscribe ($) in the page.</P
		></Li
	>
</List>
{#if showMixer}
	<AddMixer on:mixer-done={() => (showMixer = false)} />
{/if}
