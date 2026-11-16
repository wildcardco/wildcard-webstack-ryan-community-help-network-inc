<script setup lang="ts">
import { computed, ref } from 'vue';
import { corporations, schools } from '../data/schools';

const query = ref('');
const corporation = ref('all');

const filtered = computed(() => {
  const needle = query.value.trim().toLowerCase();
  return schools.filter((school) => {
    const corporationMatches = corporation.value === 'all' || school.corporation === corporation.value;
    const textMatches =
      needle.length === 0 ||
      school.name.toLowerCase().includes(needle) ||
      school.corporation.toLowerCase().includes(needle);
    return corporationMatches && textMatches;
  });
});

const giftCardVisible = computed(() => filtered.value.some((school) => school.giftCard));
</script>

<template>
  <div class="rounded-box bg-base-100 p-4 sm:p-6">
    <div class="grid gap-4 md:grid-cols-2">
      <label class="block w-full">
        <span class="mb-1 block font-semibold">Search schools</span>
        <input
          v-model="query"
          type="search"
          class="input w-full"
          placeholder="School name"
          aria-label="Search schools"
        />
      </label>
      <label class="block w-full">
        <span class="mb-1 block font-semibold">School corporation</span>
        <select v-model="corporation" class="select w-full" aria-label="Filter by school corporation">
          <option value="all">All corporations</option>
          <option v-for="name in corporations" :key="name" :value="name">{{ name }}</option>
        </select>
      </label>
    </div>

    <p class="mt-4 text-sm">
      {{ filtered.length }} {{ filtered.length === 1 ? 'school' : 'schools' }}
    </p>

    <p v-if="filtered.length === 0" class="mt-4" role="status">No schools match that search.</p>

    <ul v-else class="list mt-4 rounded-box bg-base-200">
      <li v-for="school in filtered" :key="school.name" class="list-row items-center">
        <div>
          <p class="font-semibold">{{ school.name }}</p>
          <p class="text-sm">{{ school.corporation }}</p>
        </div>
        <span v-if="school.giftCard" class="badge badge-secondary">$25 gift card</span>
      </li>
    </ul>

    <p v-if="giftCardVisible" class="mt-4 text-sm">
      Wheeler Middle School, Hanover Central Middle School, and Lowell Middle School receive a $25 gift card instead of a bag.
    </p>
  </div>
</template>
