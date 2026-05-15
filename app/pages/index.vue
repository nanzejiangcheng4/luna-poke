<script setup lang="ts">
import { ref, onMounted } from "vue";
import { quotes } from "~/data/quotes";

const randomQuote = ref("");

onMounted(() => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  randomQuote.value = quotes[randomIndex] ?? "なのら〜！";
});
</script>

<template>
  <div
    class="flex h-screen items-center justify-center text-center text-2xl font-bold"
  >
    {{ randomQuote }}
  </div>
</template>
