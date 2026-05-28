<script setup lang="ts">
import { onMounted } from "vue";
import { useRandomQuote } from "~/composables/useRandomQuote";

const { randomQuote, isLoading, updateQuote } = useRandomQuote();

onMounted(() => {
  updateQuote();
});
</script>

<template>
  <div class="flex h-screen flex-col items-center justify-center text-center">
    <div class="text-2xl font-bold mb-8">
      {{ isLoading ? "更新中。。。" : randomQuote }}
    </div>
    <button @click="updateQuote" :disabled="isLoading">
      <img
        src="https://placehold.jp/c084fc/ffffff/150x150.png?text=Luna"
        alt="Luna"
        class="animate-pulse size-full object-cover"
      />
    </button>
  </div>
</template>
