
<script>
import  { mixers} from "$lib/stores/cocktail-store"
import AddMixer from "$lib/UI/addMixer.svelte";
import {onMount} from 'svelte'

import {
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Button
  } from "flowbite-svelte";

let showMixer = false;


$: mixersList = $mixers
</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
    <p class="mb-6 text-sm text-gray-500 dark:text-gray-400">

<Table color="blue" striped={true} hoverable={true}>
    <TableHead>
      <TableHeadCell tdClass="px-2 py-2 whitespace-nowrap font-medium"
        >Name</TableHeadCell
      >
      <TableHeadCell tdClass="px-2 py-2 whitespace-nowrap font-medium"
        >Type</TableHeadCell
      >
      <TableHeadCell tdClass="px-2 py-2 whitespace-nowrap font-medium"
        >Amount</TableHeadCell
      >
    </TableHead>
    <TableBody>
{#each mixersList as mixer}

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



{#if showMixer}
  <AddMixer
    on:mixer-done={() => (showMixer = false)}
  />
{/if}