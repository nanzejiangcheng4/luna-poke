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
      {{ randomQuote }}
    </div>
    <button
      @click="updateQuote"
      :disabled="isLoading"
      class="rounded-lg bg-blue-500 px-6 py-2 text-white font-semibold hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {{ isLoading ? "更新中。。。" : "もう一回" }}
    </button>
  </div>
</template>
