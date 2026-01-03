<script lang="ts">
    import { goto } from '$app/navigation';
    import type { Department } from '@prisma/client';

    export let data: { departments: Department[] };

    let searchTerm = '';
    let filteredResults: Department[] = [...data.departments];

    $: filteredResults = searchTerm.trim() !== ''
        ? data.departments.filter(d =>
            d.department_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [...data.departments];
</script>

<h1 class="text-2xl">Departments</h1>

<div class="mb-4 flex gap-2">
    <input type="text" bind:value={searchTerm} placeholder="Search..." class="border border-zinc-400 rounded-md h-9 p-2" />
    <button type="button" class="h-9 px-2 rounded-md bg-slate-500 text-white font-bold hover:brightness-90">
        Search
    </button>
    <button type="button" class="h-9 px-2 rounded-md bg-slate-500 text-white font-bold hover:brightness-90" on:click={() => goto('/department/0')}>
        Add
    </button>
</div>

{#each filteredResults as department}
    <div class="flex odd:bg-zinc-200 items-center gap-3 p-2">
        <button type="button" class="h-9 px-2 rounded-md bg-slate-500 text-white font-bold hover:brightness-90" on:click={() => goto('/department/'+department.department_id)}>
            Edit
        </button>
        {department.department_name}
    </div>
{/each}

{#if filteredResults.length === 0}
    <div class="p-4 bg-zinc-200">No departments found, add one above</div>
{/if}
