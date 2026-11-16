<script setup lang="ts">
import { computed, ref } from 'vue';
import { foodGroups, pantryItems, type CheckItem } from '../data/lists';

const tab = ref<'food' | 'pantry'>('food');
const checked = ref<Record<string, boolean>>({});

const foodItems = computed(() => foodGroups.flatMap((group) => group.items));

const activeItems = computed(() => (tab.value === 'food' ? foodItems.value : pantryItems));

const picked = computed(() => activeItems.value.filter((item) => checked.value[item.id]));

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function printList() {
  const title = tab.value === 'food' ? 'Food donations' : 'Pantry items';
  const rows = activeItems.value
    .map((item) => {
      const mark = checked.value[item.id] ? '☑' : '☐';
      return `<li>${mark} ${escapeHtml(item.label)}</li>`;
    })
    .join('');
  const pickedNote =
    picked.value.length > 0
      ? `<p>${picked.value.length} item${picked.value.length === 1 ? '' : 's'} ticked for your trip.</p>`
      : '<p>No items ticked yet. This is the full list.</p>';
  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${title} shopping list — Community Help Network</title>
  <style>
    body { font-family: Roboto, sans-serif; padding: 24px; color: #000; }
    h1 { font-size: 1.4rem; margin-bottom: 0.25rem; }
    li { margin: 0.35rem 0; }
  </style>
</head>
<body>
  <h1>Community Help Network</h1>
  <h2>${title} shopping list</h2>
  ${pickedNote}
  <p>This list stays on your device. Nothing is sent, saved on the server, or emailed.</p>
  <ul>${rows}</ul>
</body>
</html>`;
  const popup = window.open('', '_blank', 'noopener,noreferrer');
  if (!popup) {
    window.alert('Allow pop-ups to print your shopping list.');
    return;
  }
  popup.document.write(html);
  popup.document.close();
  popup.focus();
  popup.print();
}

function itemLabel(item: CheckItem) {
  return item.label;
}
</script>

<template>
  <div class="rounded-box bg-base-100 p-4 sm:p-6">
    <div role="tablist" class="tabs tabs-border" aria-label="Shopping lists">
      <button
        type="button"
        role="tab"
        class="tab"
        :class="{ 'tab-active': tab === 'food' }"
        :aria-selected="tab === 'food'"
        @click="tab = 'food'"
      >
        Food donations
      </button>
      <button
        type="button"
        role="tab"
        class="tab"
        :class="{ 'tab-active': tab === 'pantry' }"
        :aria-selected="tab === 'pantry'"
        @click="tab = 'pantry'"
      >
        Pantry items
      </button>
    </div>

    <div class="mt-4" role="tabpanel">
      <div v-if="tab === 'food'" class="grid gap-6 sm:grid-cols-2">
        <fieldset v-for="group in foodGroups" :key="group.id" class="space-y-2">
          <legend class="font-semibold">{{ group.label }}</legend>
          <label v-for="item in group.items" :key="item.id" class="flex cursor-pointer items-center gap-3">
            <input v-model="checked[item.id]" type="checkbox" class="checkbox checkbox-primary" />
            <span>{{ itemLabel(item) }}</span>
          </label>
        </fieldset>
      </div>

      <fieldset v-else class="grid gap-2 sm:grid-cols-2">
        <legend class="sr-only">Pantry items</legend>
        <label v-for="item in pantryItems" :key="item.id" class="flex cursor-pointer items-center gap-3">
          <input v-model="checked[item.id]" type="checkbox" class="checkbox checkbox-primary" />
          <span>{{ item.label }}</span>
        </label>
      </fieldset>
    </div>

    <div class="mt-6 rounded-box bg-base-200 p-4">
      <h3 class="font-semibold">Your shopping list</h3>
      <p v-if="picked.length === 0" class="mt-2 text-sm">
        Tick items to build a list on this screen. Nothing is sent, stored, or emailed.
      </p>
      <ul v-else class="mt-2 list-disc pl-5">
        <li v-for="item in picked" :key="item.id">{{ item.label }}</li>
      </ul>
      <button type="button" class="btn btn-primary mt-4" @click="printList">Print list</button>
    </div>
  </div>
</template>
